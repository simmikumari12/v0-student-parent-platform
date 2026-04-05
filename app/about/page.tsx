"use client";

import { useRouter } from "next/navigation";
import { LanguageSelector } from "@/components/language-selector";
import { Button } from "@/components/ui/button";
import { GraduationCap, ArrowLeft } from "lucide-react";

const stats = [
  { label: "ELA (3rd Grade)", hispanic: 32, average: 48 },
  { label: "ELA (5th Grade)", hispanic: 30, average: 47 },
  { label: "ELA (8th Grade)", hispanic: 29, average: 46 },
  { label: "Math (3rd Grade)", hispanic: 35, average: 49 },
  { label: "Math (5th Grade)", hispanic: 31, average: 46 },
  { label: "Math (8th Grade)", hispanic: 27, average: 42 },
  { label: "Social Studies & Science", hispanic: 25, average: 40 },
];

export default function AboutPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#10071c] text-white">
      <header className="fixed top-0 z-50 w-full border-b border-[#32174D]/50 bg-[#32174D] backdrop-blur-sm text-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-8 w-8" />
            <div className="flex items-center gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-purple-200">About Us</p>
                <h1 className="text-xl font-bold">EduPath</h1>
              </div>
              <img
                src="https://vibraatl.com/assets/VIbra_Logo-C4Gtn0H4.png"
                alt="Vibra logo"
                className="h-12 w-auto rounded-md border border-white/10 bg-white/5 p-1"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <Button variant="outline" onClick={() => router.push("/") }>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Home
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-300">Our mission</p>
            <h2 className="mt-3 text-4xl font-bold text-white">Supporting Hispanic families through education, language, and culture.</h2>
          </div>

          <div className="space-y-6 text-sm leading-8 text-muted-foreground sm:text-base">
            <p>
              Hispanic families make up a significant part of the U.S. population, coming from diverse communities across Latin America. Many are not native English speakers, which can create challenges in navigating the education system and finding the right support. As a result, their children often face difficulties in school, including falling behind due to language barriers and limited access to resources.
            </p>
            <p>
              Our model, based on data from the U.S. Census Bureau in 2022, shows that Hispanic students frequently scored below state averages across various subjects, and many families face income gaps and limited access to higher education opportunities.
            </p>
            <p>
              But behind these statistics are parents who want the best for their children, students eager to succeed, and adults hoping for better opportunities. We created this platform to provide quality education and resources that honor their language and culture.
            </p>
            <p>
              Our goal is to make learning and growth easier and more connected—helping kids excel, parents stay involved, and adults discover new paths. Together, we can break down barriers and open doors to brighter futures.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-[#1b1030]/80 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-blue-300">Statistics histogram</p>
              <h3 className="mt-3 text-3xl font-bold text-white">Georgia Milestone Assessment Comparison</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                % of students meeting or exceeding grade-level standards, 2022-2023.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {stats.map((item) => (
              <div key={item.label} className="space-y-3 rounded-3xl border border-white/10 bg-white/5 p-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="font-semibold text-white">{item.label}</p>
                  <div className="flex gap-4 text-xs text-muted-foreground sm:text-sm">
                    <span className="inline-flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />
                      Hispanic ~ {item.hispanic}%
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                      State Average ~ {item.average}%
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-orange-400" style={{ width: `${item.hispanic}%` }} />
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-blue-500" style={{ width: `${item.average}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm leading-7 text-muted-foreground">
            <p className="mb-4 text-white font-semibold">Analysis</p>
            <p>
              The achievement gap between Hispanic students and the state average is largely influenced by language barriers, socioeconomic factors, and unequal access to educational resources. Socioeconomic factors can include challenges such as lower household income, limited access to reliable internet or learning materials, and parents working multiple jobs, which can reduce the time and support available for academic practice at home.
            </p>
            <p className="mt-4">
              Unequal access to resources also plays a significant role, as many students attend under-resourced schools with fewer experienced teachers, larger class sizes, and limited access to tutoring, advanced coursework, or enrichment programs. Research from organizations like the Pew Research Center and the National Center for Education Statistics shows that these differences in access and support can directly impact student performance across subjects.
            </p>
            <p className="mt-4 text-xs text-white/70">
              Fry, Richard. “III. National ELL Achievement Gaps.” Pew Research Center, 6 June 2007, https://www.pewresearch.org/hispanic/2007/06/06/iii-national-ell-achievement-gaps/
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
