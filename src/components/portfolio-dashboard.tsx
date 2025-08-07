"use client"

import { useEffect, useState } from "react"
import { TopNavigation } from "./top-navigation"
import { Footer } from "./footer"
import { DashboardSection } from "./dashboard-section"
import { AboutSection } from "./about-section"
import { SkillsSection } from "./skills-section"
import { PortfolioSection } from "./portfolio-section"
import { ExperienceSection } from "./experience-section"
import { EducationSection } from "./education-section"
import { ContactSection } from "./contact-section"

export default function PortfolioDashboard() {
  const [activeSection, setActiveSection] = useState("dashboard")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["dashboard", "about", "skills", "portfolio", "experience", "education", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial active section

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80 // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen">
      <TopNavigation activeSection={activeSection} onSectionChange={scrollToSection} />

      <main className="container mx-auto px-4">
        <section id="dashboard" className="py-16">
          <DashboardSection />
        </section>

        <section id="about" className="py-16">
          <AboutSection />
        </section>

        <section id="skills" className="py-16">
          <SkillsSection />
        </section>

        <section id="portfolio" className="py-16">
          <PortfolioSection />
        </section>

        <section id="experience" className="py-16">
          <ExperienceSection />
        </section>

        <section id="education" className="py-16">
          <EducationSection />
        </section>

        <section id="contact" className="py-16">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  )
}