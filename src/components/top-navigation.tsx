"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { User, Code, Briefcase, GraduationCap, FolderOpen, Mail, Home, Menu } from 'lucide-react'

const menuItems = [
  {
    title: "Dashboard",
    url: "dashboard",
    icon: Home,
  },
  {
    title: "About",
    url: "about",
    icon: User,
  },
  {
    title: "Skills",
    url: "skills",
    icon: Code,
  },
  {
    title: "Portfolio",
    url: "portfolio",
    icon: FolderOpen,
  },
  {
    title: "Experience",
    url: "experience",
    icon: Briefcase,
  },
  {
    title: "Education",
    url: "education",
    icon: GraduationCap,
  },
  {
    title: "Contact",
    url: "contact",
    icon: Mail,
  },
]

interface TopNavigationProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function TopNavigation({ activeSection, onSectionChange }: TopNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleSectionChange = (section: string) => {
    onSectionChange(section)
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-center">
          {/* Logo/Brand */}
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Button
                key={item.title}
                variant={activeSection === item.url ? "default" : "ghost"}
                size="sm"
                onClick={() => onSectionChange(item.url)}
                className="flex items-center gap-2 transition-all duration-200"
              >
                <item.icon className="w-4 h-4" />
                <span className="hidden lg:inline">{item.title}</span>
              </Button>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="w-5 h-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-4 mt-8">
                <nav className="flex flex-col gap-2">
                  {menuItems.map((item) => (
                    <Button
                      key={item.title}
                      variant={activeSection === item.url ? "default" : "ghost"}
                      onClick={() => handleSectionChange(item.url)}
                      className="justify-start gap-3 h-12"
                    >
                      <item.icon className="w-5 h-5" />
                      {item.title}
                    </Button>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
