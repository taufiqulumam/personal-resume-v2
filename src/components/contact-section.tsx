import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react'
import { useTheme } from "../contexts/ThemeContext"

export function ContactSection() {
  const { isDarkMode } = useTheme()
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "taufiqulmam@gmail.com",
      href: "mailto:taufiqulmam@gmail.com",
    },
    // {
    //   icon: Phone,
    //   label: "Phone",
    //   value: "+62 857-3624-0014",
    //   href: "tel:+6285736240014",
    // },
    {
      icon: MapPin,
      label: "Location",
      value: "Bekasi, Indonesia",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/muhammad-taufiqul-umam/",
      href: "https://linkedin.com/in/muhammad-taufiqul-umam/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/taufiqulumam",
      href: "https://github.com/taufiqulumam",
    },
  ]

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   // Handle form submission here
  //   console.log("Form submitted")
  // }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/myyakrgv", {
        method: "POST",
        headers: {
          "Accept": "application/json",
        },
        body: formData,
      })

      if (response.ok) {
        // alert("Message sent successfully!")
        window.location.href = "https://formspree.io/thanks?language=en"
        form.reset()
      } else {
        const data = await response.json()
        if (data.errors) {
          alert("Error: " + data.errors.map((error: any) => error.message).join(", "))
        } else {
          alert("Oops! There was a problem sending your message.")
        }
      }
    } catch (error) {
      alert("Failed to send message: " + error)
    }
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Let's connect and discuss opportunities. I'm always open to interesting projects and collaborations
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>
                I'm always open to discussing new opportunities and interesting projects.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${isDarkMode ? 'bg-secondary/10' : 'bg-primary/10'} rounded-lg flex items-center justify-center`}>
                    <info.icon className={`w-5 h-5 ${isDarkMode ? 'text-secondary' : 'text-primary'}`} />
                  </div>
                  <div>
                    <p className="font-medium">{info.label}</p>
                    <a href={info.href} className={`text-sm text-muted-foreground ${isDarkMode ? 'hover:text-secondary' : 'hover:text-primary'} transition-colors`}>
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Social Media</CardTitle>
              <CardDescription>Follow me on social media for updates and insights.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {socialLinks.map((social, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${isDarkMode ? 'bg-secondary/10' : 'bg-primary/10'} rounded-lg flex items-center justify-center`}>
                    <social.icon className={`w-5 h-5 ${isDarkMode ? 'text-secondary' : 'text-primary'}`} />
                  </div>
                  <div>
                    <p className="font-medium">{social.label}</p>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm text-muted-foreground ${isDarkMode ? 'hover:text-secondary' : 'hover:text-primary'} transition-colors`}
                    >
                      {social.value}
                    </a>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send Message</CardTitle>
            <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4" action="https://formspree.io/f/myyakrgv" method="POST">
              {/* <div className="grid gap-4 md:grid-cols-2"> */}
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="John Doe" required />
                </div>
              {/* </div> */}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="john@example.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="Subject">Subject</Label>
                <Input id="Subject" name="Subject" placeholder="Project Inquiry" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or inquiry..."
                  className="min-h-[120px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full" variant={isDarkMode ? "secondary" : "default"}>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Additional Information */}
      {/* <Card>
        <CardHeader>
          <CardTitle>Let's Work Together</CardTitle>
          <CardDescription>I'm currently available for freelance projects and full-time opportunities.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Response Time</h3>
              <p className="text-sm text-muted-foreground">Usually within 24 hours</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Availability</h3>
              <p className="text-sm text-muted-foreground">Open to new projects</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Time Zone</h3>
              <p className="text-sm text-muted-foreground">GMT+7 (Jakarta)</p>
            </div>
          </div>
        </CardContent>
      </Card> */}
    </div>
  )
}
