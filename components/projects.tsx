import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, ExternalLink } from "lucide-react"
import Link from "next/link"

// Sample project data
const projects = [
  {
    id: 1,
    title: "COGAAN Event Scanner",
    description:
      "COGAAN Event Scanner is a QR code-based event management and attendance tracking system. It allows organizers to create events, scan student QR codes for check-ins and check-outs, and store attendance data in MongoDB. Built with Node.js, Express, and Instascan.js, it supports real-time scanning via camera and image uploads, ensuring seamless event monitoring.",
    image: "/images/projects/qr_scanner.png",
    tags: ["QR Code Scanner", "Node.js & MongoDB", "Event Management System", "Attendance Tracking"],
    github: "https://github.com/OmNaidu123/ticketing-platform",
    demo: "#",
    category: "Coding",
  },
  {
    id: 2,
    title: "COGAAN QR Gen",
    description: "COGAAN QR Generator: A fast, minimal tool to instantly create and download high-quality QR codes for any text or link.",
    image: "/images/projects/qr_gen.png",
    tags: ["QR Code Generator", "Text to QR", "HTML", "CSS", "Quick QR Download"],
    github: "https://github.com/Tejachennuru/COGAAN-QR",
    demo: "https://cogaanqrgen.ccbp.tech/",
    category: "Coding",
  },
  {
    id: 3,
    title: "Gitam RAG (Optimizers)",
    description: "The RAG-Powered Academic Assistance System is a smart tool that helps students by providing course-specific, context-aware answers using Retrieval-Augmented Generation (RAG), ensuring responses match the structure and content of college-level academics.",
    image: "/images/projects/optimizers_rag.png",
    tags: ["RAG", "Gen AI", "Chat GPT", "Gitam"],
    github: "https://github.com/OmNaidu123/GITAM-RAG/tree/main",
    demo: "#",
    category: "Coding",
  },
  {
    id: 4,
    title: "Expensy",
    description: "Expensy is a personal finance tracking application designed to help users manage expenses, analyze spending habits, and make better financial decisions. It provides a user-friendly dashboard, category-based expense tracking, and powerful analytics for smarter budgeting.",
    image: "https://media.licdn.com/dms/image/v2/D5612AQGplp7JKG6Iiw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1673950361361?e=2147483647&v=beta&t=L4d5P81GijVgU4u1yJtFLVsIqATkfWTrymEPSd_C6_o",
    tags: ["Tracking", "Firebase", "UI/UX"],
    github: "https://github.com/BigGSSquare/Expensy",
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

