import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, ExternalLink } from "lucide-react"
import Link from "next/link"

// Sample project data
const projects = [
  {
    id: 1,
    title: "Virtual Reality Game",
    description:
      "A collaborative VR game developed by our gaming division that explores interactive storytelling in virtual environments.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Unity", "C#", "VR", "3D Modeling"],
    github: "#",
    demo: "#",
    category: "Gaming",
  },
  {
    id: 2,
    title: "Web Development Framework",
    description: "A lightweight framework for building responsive web applications with modern JavaScript features.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["JavaScript", "TypeScript", "HTML", "CSS"],
    github: "#",
    demo: "#",
    category: "Coding",
  },
  {
    id: 3,
    title: "Animated Short Film",
    description: "An award-winning animated short film created by our animation team using cutting-edge techniques.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Blender", "After Effects", "Storyboarding"],
    github: "#",
    demo: "#",
    category: "Animation",
  },
  {
    id: 4,
    title: "Mobile App for Students",
    description: "A productivity app designed to help students manage their time and assignments more effectively.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React Native", "Firebase", "UI/UX"],
    github: "#",
    demo: "#",
    category: "Coding",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the innovative projects created by our community members across coding, gaming, and animation.
          </p>
        </div>

        {/* Project filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button variant="outline" className="border-accent/50 text-white">
            All
          </Button>
          <Button variant="ghost" className="text-gray-400 hover:text-white">
            Coding
          </Button>
          <Button variant="ghost" className="text-gray-400 hover:text-white">
            Gaming
          </Button>
          <Button variant="ghost" className="text-gray-400 hover:text-white">
            Animation
          </Button>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Link
                    href={project.github}
                    className="bg-black/80 p-2 rounded-full hover:bg-accent transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link href={project.demo} className="bg-black/80 p-2 rounded-full hover:bg-accent transition-colors">
                    <ExternalLink className="h-5 w-5" />
                  </Link>
                </div>
                <div className="absolute top-3 right-3 bg-black/80 px-3 py-1 rounded-full text-xs font-medium">
                  {project.category}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              <Link href={`/projects/${project.id}`} className="inline-flex items-center text-accent hover:underline">
                View Details <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-accent/50">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

