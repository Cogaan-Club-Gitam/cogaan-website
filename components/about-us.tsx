import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Users, Trophy, Calendar, Lightbulb } from "lucide-react"

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-gray-950 relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn more about our mission, values, and the passionate community behind COGAAN.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p className="text-gray-300 mb-6">
              COGAAN was founded in 2020 by a group of passionate students who wanted to create a space where people
              interested in coding, gaming, and animation could come together to learn, collaborate, and grow.
            </p>
            <p className="text-gray-300 mb-6">
              What started as small meetups has now grown into a thriving community with regular events, workshops,
              hackathons, and game jams. Our members range from beginners to professionals, all united by their love for
              technology and creativity.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-accent" />
                <span className="text-gray-300">100+ Members</span>
              </div>
              <div className="flex items-center gap-3">
                <Trophy className="h-5 w-5 text-accent" />
                <span className="text-gray-300">20+ Awards</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-accent" />
                <span className="text-gray-300">50+ Events</span>
              </div>
              <div className="flex items-center gap-3">
                <Lightbulb className="h-5 w-5 text-accent" />
                <span className="text-gray-300">30+ Projects</span>
              </div>
            </div>

            <Button className="bg-accent hover:bg-accent/80">Join Our Community</Button>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-gray-800">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 z-10"></div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="COGAAN Team"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-accent/50 rounded-lg -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-accent/50 rounded-lg -z-10"></div>
          </div>
        </div>

        {/* Mission and Values */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-300">
              To foster a collaborative environment where individuals can explore their interests in coding, gaming, and
              animation, develop new skills, and create innovative projects that push the boundaries of technology and
              creativity.
            </p>
          </div>

          <div className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Collaboration and teamwork</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Continuous learning and growth</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Inclusivity and diversity</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Innovation and creativity</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Ethical use of technology</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

