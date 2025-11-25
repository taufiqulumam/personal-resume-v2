import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Calendar, MapPin, Award, BookOpen } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"

export function EducationSection() {
  const { isDarkMode } = useTheme()

  const education = [
    {
      degree: "Master of Management Information System",
      institution: "Gunadarma University",
      location: "Jakarta, Indonesia",
      period: "2023 - 2025",
      gpa: "3.81/4.00",
      description:
        "Focused on advanced topics in information systems, including data management, software development methodologies, and system architecture.",
      achievements: [],
      relevantCourses: [
        "Advanced Database Systems",
        "Software Development Methodologies",
        "Information Systems Architecture",
        "Data Mining and Analytics",
        "Cybersecurity Management",
      ],
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "Gunadarma University",
      location: "Bekasi, Indonesia",
      period: "2017 - 2021",
      gpa: "3.68/4.00",
      description:
        "Focused on management, software engineering, algorithms, and data structures. Writing scientific papers related to website-based application development and completing a thesis on sentiment analysis classification using machine learning.",
      achievements: [
        "Participants in the 2019 Student Creativity Program - Written Ideas.",
        "Participants in the 2020 National Student Exhibition in Information and Communication Technology (GemasTIK) XIII.",
      ],
      relevantCourses: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Systems",
        "Web Development",
        "Machine Learning",
        "Computer Networks",
      ],
    },
  ]

  const certifications = [
    {
      name: "PLM200 - Business Processes in Project Management",
      issuer: "Edugate Indonesia",
      date: "2025",
      credentialId: "550175758",
      status: "Active",
    },
    {
      name: "SAP01 - SAP Overview",
      issuer: "Edugate Indonesia",
      date: "2025",
      credentialId: "550175780",
      status: "Active",
    },
    {
      name: "Python Fundamental for Data Science",
      issuer: "DQLab",
      date: "2021",
      credentialId: "DQLABINTP1OERLGH",
      status: "Active",
    },
    {
      name: "R Fundamental for Data Science",
      issuer: "DQLab",
      date: "2021",
      credentialId: "DQLABINTR1EHVWLB",
      status: "Active",
    },
    {
      name: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding Indonesia",
      date: "2021",
      credentialId: "N9ZOD1W48PG5",
      status: "Active",
    },
    {
      name: "Oracle Project",
      issuer: "Lembaga Pengembangan Komputerisasi Universitas Gunadarma",
      date: "2021",
      credentialId: "4010047200227111",
      status: "Active",
    },
    {
      name: "Oracle for Intermediate",
      issuer: "Lembaga Pengembangan Komputerisasi Universitas Gunadarma",
      date: "2020",
      credentialId: "3010346160820211",
      status: "Active",
    },
    {
      name: "Full Stack Web Developer",
      issuer: "BuildWith Angga",
      date: "2020",
      credentialId: "5I97HjfSvU",
      status: "Active",
    },
    {
      name: "Dasar Programming untuk Data Science",
      issuer: "Skill Academy by Ruangguru",
      date: "2020",
      credentialId: "R27375LXED0UFR",
      status: "Active",
    },
    {
      name: "UX Designer: Digital Product Development",
      issuer: "Skill Academy by Ruangguru",
      date: "2020",
      credentialId: "DEEH2F3KXLF59D",
      status: "Active",
    },
    {
      name: "Oracle for Beginner",
      issuer: "Lembaga Pengembangan Komputerisasi Universitas Gunadarma",
      date: "2019",
      credentialId: "2090255190227111",
      status: "Active",
    },
    {
      name: "Fundamental Web Programming",
      issuer: "Lembaga Pengembangan Komputerisasi Universitas Gunadarma",
      date: "2018",
      credentialId: "1030422180816211",
      status: "Active",
    },
    {
      name: "Fundamental DBMS",
      issuer: "Lembaga Pengembangan Komputerisasi Universitas Gunadarma",
      date: "2018",
      credentialId: "1010042180227111",
      status: "Active",
    },
  ]

  // const courses = [
  //   {
  //     name: "Advanced React Patterns",
  //     provider: "Frontend Masters",
  //     date: "2023",
  //     duration: "40 hours",
  //   },
  //   {
  //     name: "Node.js Microservices",
  //     provider: "Udemy",
  //     date: "2022",
  //     duration: "60 hours",
  //   },
  //   {
  //     name: "System Design Interview",
  //     provider: "Educative",
  //     date: "2022",
  //     duration: "30 hours",
  //   },
  //   {
  //     name: "Docker & Kubernetes",
  //     provider: "Linux Academy",
  //     date: "2021",
  //     duration: "50 hours",
  //   },
  // ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Education & Certifications</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          My academic background and professional certifications that shape my expertise
        </p>
      </div>

      <div className="space-y-8">
        {/* Formal Education */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Formal Education</h2>
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <CardDescription className="text-base font-medium text-foreground mt-1">
                      {edu.institution}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">GPA: {edu.gpa}</Badge>
                </div>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {edu.location}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{edu.description}</p>

                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Achievements:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Relevant Knowledges:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevantCourses.map((course) => (
                      <Badge key={course} variant="outline">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Professional Certifications</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{cert.name}</CardTitle>
                      <CardDescription>{cert.issuer}</CardDescription>
                    </div>
                    <Badge variant={cert.status === "Active" ? (isDarkMode ? "secondary" : "default") : "secondary"}>{cert.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Issued: {cert.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      ID: {cert.credentialId}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Online Courses */}
        {/* <div>
          <h2 className="text-2xl font-semibold mb-6">Continuous Learning</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{course.name}</CardTitle>
                  <CardDescription>{course.provider}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Completed: {course.date}</span>
                    <span>{course.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  )
}
