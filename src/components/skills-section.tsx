import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Progress } from "./ui/progress"
import { Badge } from "./ui/badge"
import { useTheme } from "../contexts/ThemeContext"

export function SkillsSection() {
  const { isDarkMode } = useTheme()
  const technicalSkills = [
    { name: "PHP", level: 90 },
    { name: "JavaScript/TypeScript", level: 80 },
    { name: "Python", level: 75 },
    { name: "SQL", level: 80 },
  ]

  const frameworks = ["React.js", "Vue.js", "Express.js", "Node.js", "Laravel", "Livewire", "Bootstrap", "Tailwind CSS", "Oracle", "PostgreSQL", "MySQL", "MongoDB"]

  const tools = ["Git", "Docker", "Jenkins", "Postman", "VS Code", "Cursor", "Jira", "DBeaver"]

  const softSkills = [
    "Problem Solving",
    "Team Leadership",
    "Communication",
    "Project Management",
    "Agile/Scrum",
    "Mentoring",
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Skills & Expertise</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          My technical and professional capabilities that I've developed throughout my career
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
            <CardDescription>Programming languages and proficiency levels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {technicalSkills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Frameworks & Libraries</CardTitle>
            <CardDescription>Technologies I work with regularly</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {frameworks.map((framework) => (
                <Badge key={framework} variant={isDarkMode ? "secondary" : "default"}>
                  {framework}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tools & Platforms</CardTitle>
            <CardDescription>Development and productivity tools</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <Badge key={tool} variant="outline">
                  {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Soft Skills</CardTitle>
            <CardDescription>Professional and interpersonal abilities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
