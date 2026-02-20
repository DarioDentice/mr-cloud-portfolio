import { Hero } from "@/components/sections/Hero"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white dark:bg-slate-950 px-6">
      <div className="w-full max-w-5xl">
        <Hero />
      </div>
    </main>
  )
}