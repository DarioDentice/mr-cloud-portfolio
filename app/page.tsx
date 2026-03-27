import { Hero } from "@/components/sections/Hero"
import { SystemArsenal } from "@/components/sections/SystemArsenal"
import { CaseStudies } from "@/components/sections/CaseStudies"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center selection:bg-terminal/30 selection:text-terminal px-6 md:px-12 lg:px-24">
      <div className="w-full max-w-7xl">
        <Hero />  
        <SystemArsenal />
        <CaseStudies />
      </div>
    </main>
  )
}