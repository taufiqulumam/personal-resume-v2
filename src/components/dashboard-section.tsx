import { Calendar, MapPin, Users, TrendingUp } from 'lucide-react'
import { Button } from "./ui/button"
import { FileDown } from "lucide-react"

export function DashboardSection() {
  // const stats = [
  //   {
  //     title: "Projects Completed",
  //     value: "24",
  //     description: "Total projects delivered",
  //     icon: TrendingUp,
  //   },
  //   {
  //     title: "Years Experience",
  //     value: "5+",
  //     description: "Professional experience",
  //     icon: Calendar,
  //   },
  //   {
  //     title: "Happy Clients",
  //     value: "18",
  //     description: "Satisfied customers",
  //     icon: Users,
  //   },
  //   {
  //     title: "Current Location",
  //     value: "Jakarta",
  //     description: "Indonesia",
  //     icon: MapPin,
  //   },
  // ]

  // const recentProjects = [
  //   { name: "E-commerce Platform", status: "Completed", tech: ["React", "Node.js"] },
  //   { name: "Mobile Banking App", status: "In Progress", tech: ["React Native", "Firebase"] },
  //   { name: "CRM Dashboard", status: "Completed", tech: ["Vue.js", "Laravel"] },
  // ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <img
            src="/images/profile.jpg"
            alt="Muhammad Taufiqul Umam"
            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-2xl"
          />
        <div className="my-5"></div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          I'm Muhammad Taufiqul Umam, a Full Stack Developer who is communicative, trustworthy, hardworking, responsible and able to work with teams or individuals who have expertise in the field of web programming.
        </p>
        <Button className="mt-4" variant="default">
          <a href="/doc/Muhammad_Taufiqul_Umam_CV.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <FileDown className="w-4 h-4" />
            Resume
          </a>
        </Button>
      </div>

      {/* <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="text-center">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div> */}

      {/* <Card>
        <CardHeader>
          <CardTitle>Recent Projects</CardTitle>
          <CardDescription>My latest work and current projects</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentProjects.map((project, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div>
                  <h3 className="font-medium">{project.name}</h3>
                  <div className="flex gap-2 mt-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Badge variant={project.status === "Completed" ? "default" : "outline"}>{project.status}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card> */}
    </div>
  )
}
