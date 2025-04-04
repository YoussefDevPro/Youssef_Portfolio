"use client"

import { useState } from "react"
import { Github, User, Code, Briefcase, Home, Menu, X } from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="overflow-hidden absolute inset-0 flex items-center justify-center p-4 md:p-8">
      <div className="glass-container relative flex h-[90vh] w-full max-w-6xl rounded-2xl shadow-xl bg-opacity-30">
        {/* Mobile Menu Button - Only visible on mobile screens and positioned on the right */}
        <div className="fixed top-4 right-4 z-20 md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-surface0 text-lavender transition-colors hover:bg-lavender hover:text-base"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Main container with sidebar and content */}
        <div className="flex w-full h-full">
          {/* Sidebar Navigation - Hidden on mobile unless menu is open */}
          <div className={`glass-panel ${mobileMenuOpen ? 'flex' : 'hidden'} w-20 flex-shrink-0 flex-col items-center justify-center gap-8 rounded-2xl border-r border-white/10 p-4 md:flex`}>
            <NavItem
              icon={<Home size={24} />}
              label="Home"
              active={activeSection === "home"}
              onClick={() => {
                setActiveSection("home")
                setMobileMenuOpen(false)
              }}
            />
            <NavItem
              icon={<User size={24} />}
              label="About"
              active={activeSection === "about"}
              onClick={() => {
                setActiveSection("about")
                setMobileMenuOpen(false)
              }}
            />
            <NavItem
              icon={<Code size={24} />}
              label="Skills"
              active={activeSection === "skills"}
              onClick={() => {
                setActiveSection("skills")
                setMobileMenuOpen(false)
              }}
            />
            <NavItem
              icon={<Briefcase size={24} />}
              label="Projects"
              active={activeSection === "projects"}
              onClick={() => {
                setActiveSection("projects")
                setMobileMenuOpen(false)
              }}
            />
            <NavItem
              icon={<Github size={24} />}
              label="GitHub"
              active={activeSection === "github"}
              onClick={() => {
                setActiveSection("github")
                setMobileMenuOpen(false)
              }}
            />
          </div>

          {/* Main Content Area - Scrollable */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8">
            <div className="mx-auto max-w-3xl">
              {activeSection === "home" && <HomeSection />}
              {activeSection === "about" && <AboutSection />}
              {activeSection === "skills" && <SkillsSection />}
              {activeSection === "projects" && <ProjectsSection />}
              {activeSection === "github" && <GitHubSection />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function NavItem({ 
  icon, 
  label, 
  active, 
  onClick 
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-1 rounded-xl p-2 transition-all ${
        active ? "bg-overlay1 text-lavender" : "text-text hover:bg-overlay0/50 hover:text-lavender"
      }`}
      title={label}
    >
      {icon}
      <span className="text-xs">{label}</span>
    </button>
  )
}

function HomeSection() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-mauve shadow-lg">
          <img src="/profile.png" alt="Profile" className="h-full w-full object-cover" />
        </div>
        <h1 className="text-4xl font-bold text-lavender">Youssef Lmouden</h1>
        <h2 className="text-xl text-mauve">Full Stack Developer</h2>
        <p className="max-w-lg text-text">
          a tech enthusiast who loves building things and exploring new technologies. Rust 🦀 is my favorite language! 
          I have solid skills in creating well-designed and efficient websites, always striving to improve and learn more.
        </p>
        <div className="flex gap-4">
          <SocialButton icon={<Github />} href="https://github.com/YoussefDevPro" label="GitHub" />
        </div>
      </div>

      {/* ModuFlow Project */}
      <div className="glass-panel rounded-xl p-6 bg-opacity-50">
        <h2 className="mb-4 text-2xl font-bold text-lavender">Upcoming Project</h2>
        <div className="aspect-video w-full overflow-hidden rounded-lg bg-surface0">
          <img
            src="/moduflow_project.jpg"
            alt="Featured Project"
            className="h-full w-full object-cover rounded-xl"
          />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-mauve">ModuFlow</h3>
        <p className="mt-2 text-text">
          ModuFlow is a development tool designed to enhance the Modu programming experience by providing an intelligent assistant for error fixing and code suggestions, 
          a smooth and efficient development environment, and seamless integration with other tools to optimize workflow.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Rust", "Tauri", "HTML/CSS", "TypeScript", "bun"].map((tech) => (
            <span key={tech} className="rounded-full bg-surface0 px-3 py-1 text-xs text-lavender">{tech}</span>
          ))}
        </div>
      </div>

      {/* RustyBot Project */}
      <div className="glass-panel rounded-xl p-6 bg-opacity-50">
        <div className="aspect-video w-full overflow-hidden rounded-lg bg-surface0">
          <img
            src="/RustyBot.png"
            alt="Featured Project"
            className="h-full w-full object-cover rounded-xl"
          />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-mauve">RustyBot</h3>
        <p className="mt-2 text-text">
          RustyBot is a sleek tool that makes Discord bot development in Rust way easier. It comes with a beautiful terminal UI built with ratatui, 
          and includes handy utilities to speed up your workflow.
          <br />
          build faster. code smarter. with RustyBot.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Rust", "ratatui", "poise", "serenity", "tokio"].map((tech) => (
            <span key={tech} className="rounded-full bg-surface0 px-3 py-1 text-xs text-lavender">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-lavender">About Me</h1>
      <div className="glass-panel rounded-xl p-6 bg-opacity-50">
      <p className="text-text">
        Oh hey, you're checking out my "About Me" section! Not many people get this far 😅. Anyway, I'm Youssef, a tech enthusiast who loves building things and diving into new technologies. I'm all about Rust 🦀 these days, but I also love working with a mix of HTML, CSS, JavaScript, TypeScript, Python, and even a little bit of C#.
      </p>
      </div>

      <h2 className="text-2xl font-bold text-lavender">Experience</h2>
      <div className="space-y-4">
        <ExperienceCard
          title="A normal student in college"
          company=""
          period="2020 - 2022"
          description="I've always been interested in development, but before that, I was a ThinkPad nerd 😅. It was around that time I started with Python, along with some basic HTML and CSS."
        />
        <ExperienceCard
          title="student -_-"
          company=""
          period="4/2/2025"
          description="RIP THINKPAD ☠️"
        />
        <ExperienceCard
          title="still a student :p"
          company=""
          period="2022 - 2024"
          description="Now, I'm really into coding and have been diving deeper into programming. I've been learning more and more every day, with languages like Rust and tools like Tauri, and I'm still learning and growing."
        />
                <ExperienceCard
          title="student -_-"
          company=""
          period="4/3/2025"
          description="revived the thinkpad yeah !"
        />
      </div>
    </div>
  )
}

function ExperienceCard({ 
  title, 
  company, 
  period, 
  description 
}: {
  title: string;
  company: string;
  period: string;
  description: string;
}) {
  return (
    <div className="glass-panel rounded-xl p-6 bg-opacity-50">
      <h3 className="text-xl font-semibold text-mauve">{title}</h3>
      <div className="flex justify-between">
        <span className="text-sm text-subtext0">{company}</span>
        <span className="text-sm text-subtext0">{period}</span>
      </div>
      <p className="mt-2 text-text">{description}</p>
    </div>
  )
}

function SkillsSection() {
  const skillCategories = [
    {
      name: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS <- i hate it", "HTML/CSS", "Javascript"],
    },
    {
      name: "Backend",
      skills: ["Rust", "C#", "python", "django", "kivy", "tauri"],
    },
    {
      name: "Tools & Others",
      skills: ["Git", "VSCode", "bun", "npm", "pnpm", "RustRover"],
    },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-lavender">Skills</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category) => (
          <div key={category.name} className="glass-panel rounded-xl p-6 bg-opacity-50">
            <h2 className="mb-4 text-xl font-semibold text-mauve">{category.name}</h2>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="rounded-full bg-surface0 px-3 py-1 text-sm text-lavender">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProjectsSection() {
  const projects = [
    {
      title: "Youssef's Portfolio",
      description: "Hey, you're in my portfolio! 😎 This site is open-source and fully customized to showcase my work.",
      technologies: ["HTML", "CSS", "React", "TypeScript", "TailwindCSS"],
      image: "project-protfolio.gif",
      link: "https://github.com/YoussefDevPro/Youssef_Portfolio",
    },
    {
      title: "Whatsapp AI agent and spammer for absolut no reason",
      description: "It all started when someone sent me '### #### ## #####'. I made a program to spam 'em with 1000 msgs using Selenium 😂. Then I created a tool that auto-replies in any chat or group.",
      technologies: ["Python", "Selenium"],
      image: "/whatsapp_project.jpg",
      link: "https://github.com/YoussefDevPro/Whatsapp-auto-sender",
    },
    {
      title: "Mr Beat",
      description: "Make some beats 🎶 and even add your own sound effects. This project uses Audiostream.",
      technologies: ["Python", "Audiostream"],
      image: "/mrbeat_project.jpg",
      link: "https://github.com/YoussefDevPro/MrBeat",
    },
    {
      title: "Galoix",
      description: "Explore space with your spaceship 🚀. But beware, you can fall and restart! Don't forget to get the highest score—progress isn't saved lol.",
      technologies: ["Python", "Kivy"],
      image: "/galoix_project.jpg",
      link: "https://github.com/YoussefDevPro/GALOIX",
    },
  ]  

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-lavender">Projects</h1>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="glass-panel rounded-xl p-6 bg-opacity-50">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="h-full w-full overflow-hidden rounded-xl bg-surface0">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-mauve">{project.title}</h2>
                <p className="mt-2 text-text">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-2xl bg-surface0 px-3 py-1 text-xs text-lavender">
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => window.open(project.link, "_blank")}
                  className="mt-4 rounded-xl bg-mauve px-4 py-2 text-sm font-medium text-base transition-colors hover:bg-lavender"
                >
                  View Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SocialButton({ 
  icon, 
  href, 
  label 
}: {
  icon: React.ReactNode;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-surface0 text-lavender transition-colors hover:bg-lavender hover:text-base"
      title={label}
    >
      {icon}
    </a>
  )
}

function SkillCard({ 
  icon, 
  skill, 
  description 
}: {
  icon: React.ReactNode;
  skill: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center space-y-2 text-center">
      <div className="rounded-full bg-surface0 p-3 text-lavender">{icon}</div>
      <h3 className="text-lg font-semibold text-mauve">{skill}</h3>
      <p className="text-sm text-text">{description}</p>
    </div>
  )
}

function GitHubSection() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-lavender">GitHub Projects</h1>
      <div className="glass-panel rounded-xl p-6 bg-opacity-50">
        <p className="text-text mb-4">
          Check out my open source contributions and personal projects on GitHub.
        </p>
        
        {/* GitHub Stats Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* GitHub Stats Card */}
          <div className="w-full rounded-xl overflow-hidden">
            <img
              src="https://github-readme-stats.vercel.app/api?username=YoussefDevPro&theme=catppuccin_mocha&show_icons=true&hide_border=true&count_private=true"
              alt="GitHub Stats"
              className="w-full h-auto"
            />
          </div>
          
          {/* GitHub Streak Stats Card */}
          <div className="w-full rounded-xl overflow-hidden">
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=YoussefDevPro&theme=catppuccin_mocha&hide_border=true"
              alt="GitHub Streak Stats"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* GitHub Contribution Snake Animation */}
        <div className="w-full rounded-xl overflow-hidden mb-4 p-4">
          <div className="w-full rounded-xl overflow-hidden bg-base">
            <img
              src="https://raw.githubusercontent.com/YoussefDevPro/YoussefDevPro/output/github-snake-dark.svg"
              alt="GitHub Contribution Snake Animation"
              className="w-full h-auto"
            />
          </div>
        </div>

        <a
          href="https://github.com/YoussefDevPro"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-mauve px-4 py-2 text-sm font-medium text-base transition-colors hover:bg-lavender"
        >
          <Github size={20} />
          View GitHub Profile
        </a>
      </div>
    </div>
  )
}

