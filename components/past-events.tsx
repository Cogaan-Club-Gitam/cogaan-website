import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

// Sample past events data
const pastEvents = [
  {
    id: 1,
    title: "Game Development Workshop",
    description: "A hands-on workshop where participants learned the basics of game development using Unity.",
    image: "/placeholder.svg?height=300&width=500",
    date: "March 15, 2023",
    location: "Tech Hub, Building A",
    attendees: 45,
    category: "Gaming",
  },
  {
    id: 2,
    title: "Web Development Hackathon",
    description: "A 24-hour hackathon where teams competed to build innovative web applications.",
    image: "/placeholder.svg?height=300&width=500",
    date: "May 20, 2023",
    location: "Innovation Center",
    attendees: 60,
    category: "Coding",
  },
  {
    id: 3,
    title: "Animation Masterclass",
    description: "A masterclass by industry professionals on advanced animation techniques and storytelling.",
    image: "/placeholder.svg?height=300&width=500",
    date: "July 8, 2023",
    location: "Digital Arts Center",
    attendees: 35,
    category: "Animation",
  },
  {
    id: 4,
    title: "Competitive Gaming Tournament",
    description: "An exciting tournament featuring multiple games where players competed for prizes and recognition.",
    image: "/placeholder.svg?height=300&width=500",
    date: "October 12, 2023",
    location: "Gaming Arena",
    attendees: 80,
    category: "Gaming",
  },
]

export default function PastEvents() {
  return (
    <section id="past-events" className="py-20 bg-gray-950 relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Past Events</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take a look at our previous events, workshops, and activities that have brought our community together.
          </p>
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pastEvents.map((event) => (
            <div key={event.id} className="event-card group">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute top-3 right-3 bg-accent px-3 py-1 rounded-full text-xs font-medium">
                  {event.category}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-400 mb-4">{event.description}</p>

              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="h-4 w-4 text-accent" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Users className="h-4 w-4 text-accent" />
                  <span>{event.attendees} Attendees</span>
                </div>
              </div>

              <Link href={`/events/${event.id}`} className="inline-flex items-center text-accent hover:underline">
                View Event Details <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-accent/50">
            View All Past Events <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

