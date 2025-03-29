import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

// Sample past events data
const pastEvents = [
  {
    id: 1,
    title: "FOSS Hack 25",
    description: "A hackathon to promote free and open source software by bringing together students and professionals to build or extend FOSS projects.",
    image: "/images/events/FOSS.png",
    date: "July 27-28, 2024",
    location: "Gitam University, ",
    attendees: 90,
    category: "Coding",
  },
  {
    id: 2,
    title: "Career Guidance for Masters: How to score 320+ in GRE",
    description: "To help guide students in their plans of applying to a Masters program and help in their preparation of the GRE exam.",
    image: "/images/events/LaceGRE.png",
    date: "December 20, 2024",
    location: "J - 311, Gitam University",
    attendees: 27,
    category: "Coding",
  },
  {
    id: 3,
    title: "COGAAN Fusion Fest",
    description: "This event will focus on bringing the tech content creators who are also working professionals from companies like Zomato, Redhat, KLA, and Scalar giving guidance to students on various trending technologies, placements, internships, and job Markets in the software field.",
    image: "/images/events/FusionFest24.png",
    date: "October 23rd, 2024",
    location: "Innovation Center",
    attendees: 400,
    category: "Coding",
  },
  {
    id: 4,
    title: "Generative AI Workshop",
    description: "ChatGPT, Bard, Gemini are trending topics of technology. We want students to learn more about Generative AI with hand-on and also it enhances the resume and students knowledge.",
    image: "/images/events/GenAI24.png",
    date: "Feb 20, 2024",
    location: "J - 411, Gitam University",
    attendees: 35,
    category: "Coding",
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

