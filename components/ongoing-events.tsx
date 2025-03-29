"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

// Sample ongoing events data - in a real app, this would come from an API
const ongoingEventsData = [
  {
    id: 1,
    title: "Game Jam 2024",
    description: "A 48-hour game development challenge where teams create games based on a surprise theme.",
    image: "/placeholder.svg?height=300&width=500",
    startDate: "2025-04-15T18:00:00",
    endDate: "2025-04-17T18:00:00",
    location: "Innovation Hub",
    maxAttendees: 50,
    currentAttendees: 32,
    category: "Gaming",
    registrationOpen: true,
  },
  {
    id: 2,
    title: "Web3 Development Workshop Series",
    description: "A series of workshops exploring blockchain technology and decentralized applications.",
    image: "/placeholder.svg?height=300&width=500",
    startDate: "2025-04-10T17:00:00",
    endDate: "2025-05-15T19:00:00",
    location: "Tech Center, Room 305",
    maxAttendees: 30,
    currentAttendees: 25,
    category: "Coding",
    registrationOpen: true,
  },
  {
    id: 3,
    title: "Character Animation Challenge",
    description: "A month-long challenge to create and animate an original character with weekly feedback sessions.",
    image: "/placeholder.svg?height=300&width=500",
    startDate: "2025-04-01T00:00:00",
    endDate: "2025-04-30T23:59:59",
    location: "Online",
    maxAttendees: 100,
    currentAttendees: 67,
    category: "Animation",
    registrationOpen: true,
  },
]

export default function OngoingEvents() {
  const [ongoingEvents, setOngoingEvents] = useState(ongoingEventsData)
  const [loading, setLoading] = useState(false)

  // In a real application, you would fetch data from an API
  useEffect(() => {
    // Simulate API call
    const fetchEvents = async () => {
      setLoading(true)
      try {
        // In a real app: const response = await fetch('/api/events/ongoing')
        // const data = await response.json()
        // setOngoingEvents(data)

        // Simulate loading
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      } catch (error) {
        console.error("Error fetching ongoing events:", error)
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  // Format time for display
  const formatTime = (dateString) => {
    const options = { hour: "2-digit", minute: "2-digit" }
    return new Date(dateString).toLocaleTimeString(undefined, options)
  }

  // Calculate days remaining
  const getDaysRemaining = (endDate) => {
    const end = new Date(endDate)
    const now = new Date()
    const diffTime = end - now
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <section id="ongoing-events" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-20 w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ongoing Events</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our current events and activities happening right now in the COGAAN community.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
          </div>
        ) : (
          <>
            {ongoingEvents.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-gray-400">No ongoing events at the moment. Check back soon!</p>
                <Button className="mt-6 bg-accent hover:bg-accent/80">View Upcoming Events</Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {ongoingEvents.map((event) => (
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

                      {/* Days remaining badge */}
                      <div className="absolute bottom-3 right-3 bg-black/80 px-3 py-1 rounded-full text-xs font-medium">
                        {getDaysRemaining(event.endDate) > 0
                          ? `${getDaysRemaining(event.endDate)} days remaining`
                          : "Ending today"}
                      </div>
                    </div>

                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{event.title}</h3>
                      {event.registrationOpen ? (
                        <Badge className="bg-green-600">Registration Open</Badge>
                      ) : (
                        <Badge variant="outline">Registration Closed</Badge>
                      )}
                    </div>

                    <p className="text-gray-400 mb-4">{event.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Calendar className="h-4 w-4 text-accent" />
                        <span>
                          {formatDate(event.startDate)} - {formatDate(event.endDate)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Clock className="h-4 w-4 text-accent" />
                        <span>
                          {formatTime(event.startDate)} - {formatTime(event.endDate)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Users className="h-4 w-4 text-accent" />
                        <span>
                          {event.currentAttendees}/{event.maxAttendees} Attendees
                        </span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
                        <div
                          className="bg-accent h-2 rounded-full"
                          style={{ width: `${(event.currentAttendees / event.maxAttendees) * 100}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-400">
                        {event.maxAttendees - event.currentAttendees} spots remaining
                      </p>
                    </div>

                    <div className="mt-4">
                      {event.registrationOpen ? (
                        <Button className="w-full bg-accent hover:bg-accent/80">Register Now</Button>
                      ) : (
                        <Button className="w-full" variant="outline" disabled>
                          Registration Closed
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="text-center mt-12">
              <Link href="/events">
                <Button variant="outline" className="border-accent/50">
                  View All Events <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

