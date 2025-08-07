import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Badan Pendapatan Daerah Provinsi DKI Jakarta",
      location: "Jakarta, Indonesia",
      period: "Jan 2022 - Present",
      type: "Full-time",
      description:
        "Work in the field of planning and development with the scope of:",
      descriptionItems: [
        "Developed and maintained online tax applications for DKI Jakarta.",
        "Implemented new features based on user feedback.",
        "Optimized application performance, perform verification, and testing of tax system applications.",
        "Collaborated with cross-functional teams to enhance user experience.",
      ],
      // achievements: [
      //   "Increased application performance by 40% through optimization",
      //   "Led migration from monolith to microservices architecture",
      //   "Implemented CI/CD pipeline reducing deployment time by 60%",
      //   "Mentored 3 junior developers who were promoted to mid-level",
      // ],
      // technologies: ["Laravel", "Livewire", "Docker", "Oracle", "GitLab", "Postman"],
    },
    {
      title: "Software Quality Assurance",
      company: "Incubator Business Center Gunadarma University",
      location: "Depok, Indonesia",
      period: "Sept 2021 - Jan 2022",
      type: "Internship",
      description:
        "Work as a software tester for mHealth application development of the Ministry of Health of the Republic of Indonesia with the scope of:",
      descriptionItems: [
        "Review and analyze system specifications.",
        "Execute test cases (manual or automated) and analyze results.",
        "Evaluate product code according to specifications.",
        "Create logs to document testing processes.",
        "Report bugs and errors to development teams.",
        "Help troubleshoot issues.",
        "Work with cross-functional teams to ensure quality throughout the software development lifecycle.",
      ],
      // achievements: [
      //   "Delivered 15+ projects on time and within budget",
      //   "Reduced bug reports by 35% through improved testing practices",
      //   "Implemented responsive designs increasing mobile traffic by 50%",
      //   "Integrated payment gateways for 8 e-commerce projects",
      // ],
      technologies: [],
    },
    {
      title: "Lab Assistant",
      company: "Lembaga Pengembangan Universitas Gunadarma",
      location: "Bekasi, Indonesia",
      period: "Feb 2021 - Jan 2024",
      type: "Part-time",
      description:
        "Responsible for course registration and student workshops at the Faculty of Computer Science and Faculty of Economics, Gunadarma University.",
      descriptionItems: [
      ],
      achievements: [
      ],
      technologies: [],
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Work Experience</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          My professional journey and career progression
        </p>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{exp.title}</CardTitle>
                  <CardDescription className="text-base font-medium text-foreground mt-1">
                    {exp.company}
                  </CardDescription>
                </div>
                <Badge variant="secondary">{exp.type}</Badge>
              </div>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {exp.location}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{exp.description}</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {exp.descriptionItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {/* <div>
                <h4 className="font-medium mb-2">Key Achievements:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div> */}

              {/* <div>
                <h4 className="font-medium mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div> */}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
