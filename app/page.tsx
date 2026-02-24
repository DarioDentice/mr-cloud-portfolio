import { Hero } from "@/components/sections/Hero"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center selection:bg-terminal/30 selection:text-terminal px-6 md:px-12 lg:px-24">
      <div className="w-full max-w-7xl">
        <Hero />
      </div>
    </main>
  )
}