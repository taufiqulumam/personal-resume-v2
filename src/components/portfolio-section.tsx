import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ExternalLink, Github } from "lucide-react"

export function PortfolioSection() {
  const projects = [
    {
      title: "Wedding Reservation App",
      description:
        "A web-based application for online wedding package reservations.",
      image: "/images/portfolio-1.png?height=200&width=300",
      technologies: ["Laravel", "MySQL", "Bootstrap", "JQuery"],
      liveUrl: "#",
      githubUrl: "https://github.com/taufiqulumam/gendhis",
      category: "Web Application",
    },
    {
      title: "E-commerce Platform",
      description:
        "A full-featured online shopping platform with payment integration, inventory management, and admin dashboard.",
      image: "/images/portfolio-2.png?height=200&width=300",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/taufiqulumam/kickssupply",
      category: "Web Application",
    },
    {
      title: "Toyota Manual Book",
      description:
        "This website serves as a comprehensive guide for Toyota car owners and enthusiasts, providing detailed instructions, tips, and troubleshooting information to enhance the usage and maintenance of various Toyota models.",
      image: "/images/portfolio-3.jpg?height=200&width=300",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Website",
    },
    // {
    //   title: "Portfolio Website",
    //   description: "A responsive portfolio website showcasing creative work with smooth animations and modern design.",
    //   image: "/placeholder.svg?height=200&width=300",
    //   technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   category: "Website",
    // },
    // {
    //   title: "Chat Application",
    //   description: "A real-time messaging application with group chats, file sharing, and video call integration.",
    //   image: "/placeholder.svg?height=200&width=300",
    //   technologies: ["Socket.io", "React", "Node.js", "WebRTC"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   category: "Web Application",
    // },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A showcase of my recent projects and work that demonstrates my skills and creativity
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <Badge variant="secondary" className="text-xs">
                  {project.category}
                </Badge>
              </div>
              <CardDescription className="text-sm">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                {/* <Button size="sm" variant="default" className="flex-1">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button> */}
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
