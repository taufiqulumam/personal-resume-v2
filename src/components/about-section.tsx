import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Mail, MapPin } from 'lucide-react'
import { Badge } from "./ui/badge"
import { useTheme } from "../contexts/ThemeContext"

export function AboutSection() {
  const { isDarkMode } = useTheme()
  const personalInfo = [
    { icon: MapPin, label: "Location", value: "Bekasi, West Java, Indonesia" },
    // { icon: Calendar, label: "Age", value: "26 years old" },
    { icon: Mail, label: "Email", value: "taufiqulmam@gmail.com" },
    // { icon: Phone, label: "Phone", value: "+62 857-3624-0014" },
  ]

  const interests = ["Web Development", "Mobile Apps", "Data Mining", "Artificial Intelligence"]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Get to know more about my background, interests, and what drives my passion for technology
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Basic details about me</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {personalInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isDarkMode ? "bg-secondary/10" : "bg-primary/10"}`}>
                  <info.icon className={`h-4 w-4 ${isDarkMode ? "text-secondary" : "text-primary"}`} />
                </div>
                <div>
                  <span className="text-sm font-medium">{info.label}:</span>
                  <span className="text-sm text-muted-foreground ml-2">{info.value}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Interests</CardTitle>
            <CardDescription>What I'm passionate about</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <Badge key={interest} variant="secondary">
                  {interest}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>My Story</CardTitle>
          <CardDescription>My professional journey and philosophy</CardDescription>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none text-sm">
          <p className="text-muted-foreground leading-relaxed">
            I'm a passionate Full Stack Developer with over 3 years of experience in creating innovative web and mobile
            applications. My journey in programming started during my university years, and since then, I've been
            focusing on web development that makes a real impact.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            I specialize in PHP frameworks like Laravel and modern JavaScript frameworks like React and Node.js, and I'm always eager to learn new
            technologies. I believe in writing clean, maintainable code and creating user experiences that are both
            functional and delightful.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
