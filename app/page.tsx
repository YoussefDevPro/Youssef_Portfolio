import Portfolio from "@/components/portfolio"
import AnimatedBackground from "@/components/animated-background"

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-base">
      <AnimatedBackground />
      <Portfolio />
    </main>
  )
}

