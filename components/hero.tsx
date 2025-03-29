import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight, Code, Gamepad2, Film } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Welcome to <span className="gradient-text">COGAAN</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Where coding, gaming, and animation enthusiasts come together to create, learn, and innovate in a
              collaborative environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-accent hover:bg-accent/80">
                Join Our Community
              </Button>
              <Button size="lg" variant="outline">
                Explore Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image src="/images/logo.png" alt="COGAAN Logo" fill className="object-contain animate-float" priority />
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Coding</h3>
            <p className="text-gray-400">
              Learn programming languages, build applications, and develop your coding skills with our workshops and
              projects.
            </p>
          </div>

          <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
              <Gamepad2 className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Gaming</h3>
            <p className="text-gray-400">
              Participate in game development, game jams, and competitive gaming events with fellow enthusiasts.
            </p>
          </div>

          <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mb-4">
              <Film className="h-6 w-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Animation</h3>
            <p className="text-gray-400">
              Explore 2D and 3D animation techniques, character design, and motion graphics in our creative sessions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

