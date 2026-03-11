"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Mail, Linkedin, ArrowRight, Phone, MapPin, MessageCircle, Star, ExternalLink, Search, Lightbulb, PenTool, Code2, TestTube, Rocket, Quote } from "lucide-react"
import { motion } from "framer-motion"
import { PageTransition } from "@/components/page-transition"
import { FadeUp, FadeDown, FadeLeft, FadeRight, ScaleIn } from "@/components/animate-in"
import { StaggerContainer, StaggerItem } from "@/components/stagger-container"
import { CVDownloadButton } from "@/components/cv-download-button"
import { ContactForm } from "@/components/contact-form"
import { AnimatedHero } from "@/components/animated-hero"
import { ShowcaseCard } from "@/components/showcase-card"
import { AnimatedProfileCard } from "@/components/animated-profile-card"
import { ThemeToggle } from "@/components/theme-toggle"
import { GradientBackground } from "@/components/gradient-background"
import { ParticlesBackground } from "@/components/particles-background"

export default function Home() {
  return (
      <div className="min-h-screen bg-white dark:bg-gray-900 relative">
        {/* Background Animations for entire app */}
        <GradientBackground />
        <ParticlesBackground />
        
        {/* Navigation */}
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm relative">
          <div className="container flex h-16 items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="font-bold text-xl group">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Mohamed
                </span>
                <span className="text-blue-600">.</span>
              </Link>
            </motion.div>
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:flex gap-6"
            >
              {["About", "Work Process", "Experience", "Mobile Projects", "Web Projects", "Skills", "Reviews", "Contact"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <Link
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm font-medium hover:text-blue-600 transition-colors relative group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <ThemeToggle />
              <CVDownloadButton />
              <Button variant="outline" size="icon" className="md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </motion.div>
          </div>
        </header>

        <main className="relative z-10">
          {/* Hero Section */}
          <AnimatedHero />

          {/* About Section */}
          <section id="about" className="relative bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900 py-24 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
            <div className="container relative z-10">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                  <AnimatedProfileCard />
                </div>
                <div className="flex-1 space-y-6">
                  <FadeLeft>
                    <Badge className="px-4 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                      About Me
                    </Badge>
                  </FadeLeft>
                  <FadeLeft delay={0.1}>
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                      Passionate Full Stack Developer
                    </h2>
                  </FadeLeft>
                  <FadeLeft delay={0.2}>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      I'm a motivated Full Stack Developer with expertise in both frontend and backend development. I build cross-platform mobile applications using Flutter and Dart, create modern web applications with React and Next.js, and develop robust backend services with Node.js and Firebase.
                    </p>
                  </FadeLeft>
                  <FadeLeft delay={0.3}>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      I'm committed to delivering high-quality full-stack solutions from design to deployment, emphasizing
                      performance, scalability, and user experience. Currently pursuing a Master's Degree in Mobile App Development at
                      ISET Rades.
                    </p>
                  </FadeLeft>
                </div>
              </div>
            </div>
          </section>

          {/* Work Process Section */}
          <section id="work-process" className="relative py-24 bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20 dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-900 overflow-hidden z-10">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
            <div className="container relative z-10">
              <div className="text-center mb-16">
                <FadeUp>
                  <Badge className="px-4 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                    How I Work
                  </Badge>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <h2 className="text-3xl md:text-4xl font-bold mt-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                    My Work Process
                  </h2>
                </FadeUp>
                <FadeUp delay={0.2}>
                  <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-md mx-auto">
                    A structured approach to deliver high-quality results on every project.
                  </p>
                </FadeUp>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Search,
                    title: "Discovery",
                    step: "01",
                    description: "I start by understanding your vision, goals, and requirements. We discuss the project scope, target audience, and desired outcomes to build a solid foundation.",
                    color: "from-blue-500 to-cyan-500",
                    bgColor: "bg-blue-50 dark:bg-blue-950/30",
                  },
                  {
                    icon: Lightbulb,
                    title: "Planning & Strategy",
                    step: "02",
                    description: "I create a detailed roadmap with milestones, choose the right tech stack, and design the architecture to ensure scalability and performance.",
                    color: "from-purple-500 to-pink-500",
                    bgColor: "bg-purple-50 dark:bg-purple-950/30",
                  },
                  {
                    icon: PenTool,
                    title: "UI/UX Design",
                    step: "03",
                    description: "I design intuitive, beautiful interfaces with wireframes and prototypes, focusing on user experience and modern design principles.",
                    color: "from-pink-500 to-rose-500",
                    bgColor: "bg-pink-50 dark:bg-pink-950/30",
                  },
                  {
                    icon: Code2,
                    title: "Development",
                    step: "04",
                    description: "Clean, maintainable code is written following best practices. I keep you updated with regular progress reports and demo builds.",
                    color: "from-green-500 to-emerald-500",
                    bgColor: "bg-green-50 dark:bg-green-950/30",
                  },
                  {
                    icon: TestTube,
                    title: "Testing & QA",
                    step: "05",
                    description: "Rigorous testing across devices and platforms ensures everything works flawlessly. I fix bugs and optimize performance before launch.",
                    color: "from-orange-500 to-amber-500",
                    bgColor: "bg-orange-50 dark:bg-orange-950/30",
                  },
                  {
                    icon: Rocket,
                    title: "Launch & Support",
                    step: "06",
                    description: "I handle deployment, provide documentation, and offer ongoing support to ensure your project runs smoothly after launch.",
                    color: "from-indigo-500 to-blue-500",
                    bgColor: "bg-indigo-50 dark:bg-indigo-950/30",
                  },
                ].map((process, index) => (
                  <motion.div
                    key={process.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className={`group h-full border-2 hover:border-blue-500/50 transition-all duration-300 ${process.bgColor} backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden relative`}>
                      <div className="absolute top-4 right-4">
                        <span className={`text-5xl font-black bg-gradient-to-r ${process.color} bg-clip-text text-transparent opacity-20 group-hover:opacity-40 transition-opacity`}>
                          {process.step}
                        </span>
                      </div>
                      <CardContent className="p-8 relative z-10">
                        <motion.div
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${process.color} flex items-center justify-center mb-6 shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <process.icon className="h-7 w-7 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-bold mb-3 dark:text-white">{process.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{process.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden z-10">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
            <div className="container relative z-10">
              <div className="text-center mb-16">
                <FadeUp>
                  <Badge className="px-4 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                    Professional Journey
                  </Badge>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <h2 className="text-3xl md:text-4xl font-bold mt-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                    Work Experience
                  </h2>
                </FadeUp>
                <FadeUp delay={0.2}>
                  <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-md mx-auto">
                    My professional journey as a mobile and web developer.
                  </p>
                </FadeUp>
              </div>

              <StaggerContainer className="space-y-12" childrenDelay={0.15}>
                <StaggerItem>
                  <div className="relative border-l border-gray-200 dark:border-gray-700 pl-8 pb-2">
                    <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-2 border-4 border-white dark:border-gray-800"></div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold">Developer</h3>
                        <p className="text-blue-600 dark:text-blue-400">Al Mindhar</p>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        Current
                      </Badge>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                      Developing an Airbnb-like application with Flutter. The app includes features similar to Airbnb's
                      platform, focusing on property listings, user profiles, and booking functionality.
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="relative border-l border-gray-200 dark:border-gray-700 pl-8 pb-2">
                    <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-2 border-4 border-white dark:border-gray-800"></div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold dark:text-white">Flutter Developer</h3>
                        <p className="text-blue-600 dark:text-blue-400">Chatchout App (Personal Project)</p>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        06/2024 - 08/2024
                      </Badge>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                      Developed a chat app with real-time messaging using Firebase and Flutter, ensuring a smooth and
                      responsive UI with optimal performance. Implemented user authentication, push notifications, and
                      message delivery status, utilizing Firebase Cloud Messaging.
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="relative border-l border-gray-200 dark:border-gray-700 pl-8 pb-2">
                    <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-2 border-4 border-white dark:border-gray-800"></div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold">Flutter Developer Intern</h3>
                        <p className="text-blue-600 dark:text-blue-400">Pikoro</p>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        03/2024 - 05/2024
                      </Badge>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                      Developed a mobile app for student club activities, utilizing Flutter and Dart for cross-platform
                      functionality. Implemented real-time communication using Socket.io and managed state with GetX,
                      ensuring seamless user interactions.
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="relative border-l border-gray-200 dark:border-gray-700 pl-8 pb-2">
                    <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-2 border-4 border-white dark:border-gray-800"></div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold">Flutter Developer Intern</h3>
                        <p className="text-blue-600 dark:text-blue-400">Domotika Inc.</p>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        01/2024 - 02/2024
                      </Badge>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                      Designed and developed the UI for a smart home app, ensuring intuitive navigation and
                      functionality. Integrated Flutter front-end with backend APIs and utilized Git for version control
                      and collaboration.
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="relative border-l border-gray-200 dark:border-gray-700 pl-8">
                    <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-2 border-4 border-white dark:border-gray-800"></div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold dark:text-white">Freelance Flutter Developer</h3>
                        <p className="text-blue-600 dark:text-blue-400">Coach Finder App</p>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        09/2023 - 01/2024
                      </Badge>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                      Developed a coaching app with profile management, event scheduling, and user authentication
                      features. Integrated backend services using Node.js, ensuring secure API communication and data
                      handling.
                    </p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </section>

          {/* Mobile Projects Section */}
          <section id="mobile-projects" className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden z-10">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
            <div className="container relative z-10">
              <div className="text-center mb-16">
                <FadeUp>
                  <Badge className="px-4 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                    Mobile Development
                  </Badge>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <h2 className="text-3xl md:text-4xl font-bold mt-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                    Mobile Projects
                  </h2>
                </FadeUp>
                <FadeUp delay={0.2}>
                  <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-md mx-auto">
                    Cross-platform mobile applications built with Flutter and Dart.
                  </p>
                </FadeUp>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ShowcaseCard
                  title="Zaghouan Delivery App"
                  description="A delivery app with multiple user roles: clients, delivery personnel, agents who scan QR codes and generate PDFs for invoices, and admin dashboard with statistics."
                  image="/project-zaghouan.png"
                  imageAlt="Zaghouan Delivery App"
                  tags={["Flutter", "Firebase"]}
                  category="Mobile Application"
                  delay={0}
                />
                <ShowcaseCard
                  title="Chatchout App"
                  description="A real-time messaging app with user authentication, push notifications, and message delivery status using Firebase Cloud Messaging."
                  image="/project-chatchout.png"
                  imageAlt="Chatchout App"
                  tags={["Flutter", "Firebase"]}
                  category="Chat Application"
                  delay={0.1}
                />
                <ShowcaseCard
                  title="Al Mindhar App"
                  description="An Airbnb-like application for property listings, user profiles, and booking functionality with a focus on user experience."
                  image="/project-almindhar.png"
                  imageAlt="Al Mindhar App"
                  tags={["Flutter", "Node.js"]}
                  category="Accommodation Booking"
                  delay={0.2}
                />
                <ShowcaseCard
                  title="Coach Finder App"
                  description="A coaching app with profile management, event scheduling, and user authentication features integrated with Node.js backend."
                  image="/project-coach.png"
                  imageAlt="Coach Finder App"
                  tags={["Flutter", "Node.js"]}
                  category="Coaching Platform"
                  delay={0.3}
                />
                <ShowcaseCard
                  title="Student Club App"
                  description="A mobile app for student club activities with real-time communication using Socket.io and state management with GetX."
                  image="/project-student.png"
                  imageAlt="Student Club Activities App"
                  tags={["Flutter", "Socket.io"]}
                  category="Activity Management"
                  delay={0.4}
                />
                <ShowcaseCard
                  title="Smart Home App"
                  description="A smart home control app with intuitive UI design and seamless integration with backend APIs for device control."
                  image="/project-smarthome.png"
                  imageAlt="Smart Home App"
                  tags={["Flutter", "API Integration"]}
                  category="IoT Control"
                  delay={0.5}
                />
              </div>
            </div>
          </section>

          {/* Web Projects Section */}
          <section id="web-projects" className="relative py-24 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900 overflow-hidden z-10">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
            <div className="container relative z-10">
              <div className="text-center mb-16">
                <FadeUp>
                  <Badge className="px-4 py-2 text-sm bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                    Web Development
                  </Badge>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <h2 className="text-3xl md:text-4xl font-bold mt-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                    Web Projects
                  </h2>
                </FadeUp>
                <FadeUp delay={0.2}>
                  <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-md mx-auto">
                    Modern web applications built with React, Next.js, and Node.js.
                  </p>
                </FadeUp>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ShowcaseCard
                  title="Vibe Linx App"
                  description="A modern web application for connecting people and sharing experiences. Built with React and Node.js, featuring real-time interactions and social networking capabilities."
                  image="/project-almindhar.png"
                  imageAlt="Vibe Linx App"
                  tags={["React", "Node.js", "MongoDB"]}
                  category="Web Application"
                  delay={0}
                />
                <ShowcaseCard
                  title="Cabinet Management App"
                  description="A comprehensive management system for medical or professional cabinets. Features appointment scheduling, patient/client management, and administrative dashboard built with Next.js."
                  image="/project-chatchout.png"
                  imageAlt="Cabinet Management App"
                  tags={["Next.js", "Node.js", "PostgreSQL"]}
                  category="Web Application"
                  delay={0.1}
                />
                <ShowcaseCard
                  title="E-Commerce Platform"
                  description="A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration using Next.js and Node.js."
                  image="/project-coach.png"
                  imageAlt="E-Commerce Platform"
                  tags={["Next.js", "Node.js", "MongoDB"]}
                  category="Web Application"
                  delay={0.2}
                />
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="relative py-24 bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20 dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-900 overflow-hidden z-10">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
            <div className="container relative z-10">
              <div className="text-center mb-16">
                <FadeUp>
                  <Badge className="px-4 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                    My Skills
                  </Badge>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <h2 className="text-3xl md:text-4xl font-bold mt-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                    Technical Expertise
                  </h2>
                </FadeUp>
                <FadeUp delay={0.2}>
                  <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-md mx-auto">
                    The technologies and tools I work with to build amazing applications.
                  </p>
                </FadeUp>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <FadeRight>
                  <h3 className="text-xl font-bold mb-6 text-center md:text-left">Frontend</h3>
                  <div className="space-y-4">
                    {[
                      { name: "Next.js", level: 90 },
                      { name: "React.js", level: 90 },
                      { name: "TypeScript", level: 85 },
                      { name: "HTML/CSS", level: 90 },
                      { name: "Tailwind CSS", level: 85 },
                    ].map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="flex flex-col gap-2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-blue-600 dark:text-blue-400">{skill.level}%</span>
                        </div>
                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                          <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                            viewport={{ once: true }}
                          ></motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </FadeRight>
                <FadeUp>
                  <h3 className="text-xl font-bold mb-6 text-center md:text-left dark:text-white">Mobile</h3>
                  <div className="space-y-4">
                    {[
                      { name: "Flutter", level: 90 },
                      { name: "Dart", level: 90 },
                      { name: "React Native", level: 85 },
                      { name: "Firebase", level: 90 },
                      { name: "Expo", level: 80 },
                    ].map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="flex flex-col gap-2"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-blue-600 dark:text-blue-400">{skill.level}%</span>
                        </div>
                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                          <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                            viewport={{ once: true }}
                          ></motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </FadeUp>
                <FadeLeft>
                  <h3 className="text-xl font-bold mb-6 text-center md:text-left dark:text-white">Backend</h3>
                  <div className="space-y-4">
                    {[
                      { name: "Node.js", level: 90 },
                      { name: "Express", level: 90 },
                      { name: "MongoDB", level: 85 },
                      { name: "REST API", level: 90 },
                      { name: "Socket.io", level: 85 },
                    ].map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="flex flex-col gap-2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-blue-600 dark:text-blue-400">{skill.level}%</span>
                        </div>
                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                          <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                            viewport={{ once: true }}
                          ></motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </FadeLeft>
              </div>

              <div className="mt-20 pt-12 border-t border-gray-200">
                <FadeUp>
                  <div className="text-center mb-8">
                    <Badge className="px-4 py-2 text-sm bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 mb-4">
                      Tools & Technologies
                    </Badge>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                      Development Tools & Frameworks
                    </h3>
                    <p className="text-gray-600 max-w-md mx-auto">
                      Additional tools, libraries, and technologies I use to build efficient and scalable applications.
                    </p>
                  </div>
                </FadeUp>
                <StaggerContainer className="flex flex-wrap justify-center gap-4" childrenDelay={0.05}>
                  {[
                    "GetX",
                    "Redux",
                    "Provider",
                    "Figma",
                    "Adobe XD",
                    "Git",
                    "GitHub",
                    "Docker",
                    "VSCode",
                    "Postman",
                    "Socket.io",
                    "Material Design",
                    "REST API",
                    "GraphQL",
                    "JWT",
                    "NPM",
                    "Yarn",
                    "Webpack",
                    "Jest",
                    "Cypress",
                  ].map((tool) => (
                    <StaggerItem key={tool}>
                      <Badge variant="outline" className="px-4 py-2 text-sm hover:bg-blue-50 hover:border-blue-300 transition-colors cursor-default">
                        {tool}
                      </Badge>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </section>

          {/* Fiverr Reviews Section */}
          <section id="reviews" className="relative py-24 bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30 dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900 overflow-hidden z-10">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
            <div className="container relative z-10">
              <div className="text-center mb-16">
                <FadeUp>
                  <Badge className="px-4 py-2 text-sm bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
                    Client Feedback
                  </Badge>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <h2 className="text-3xl md:text-4xl font-bold mt-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                    What Clients Say
                  </h2>
                </FadeUp>
                <FadeUp delay={0.2}>
                  <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-md mx-auto">
                    Real reviews from satisfied clients on Fiverr.
                  </p>
                </FadeUp>
              </div>

              <FadeUp delay={0.15}>
                <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <span className="text-2xl font-bold dark:text-white">5.0</span>
                  </div>
                  <div className="h-8 w-px bg-gray-300 dark:bg-gray-600" />
                  <p className="text-gray-600 dark:text-gray-300 font-medium">4 Reviews on Fiverr</p>
                  <div className="h-8 w-px bg-gray-300 dark:bg-gray-600" />
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>Communication: <strong className="text-gray-800 dark:text-white">5.0</strong></span>
                    <span>Quality: <strong className="text-gray-800 dark:text-white">5.0</strong></span>
                    <span>Value: <strong className="text-gray-800 dark:text-white">5.0</strong></span>
                  </div>
                </div>
              </FadeUp>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    name: "smativo",
                    country: "Nigeria",
                    rating: 5,
                    review: "good work so far",
                    project: "Cross-Platform Development",
                    price: "$100-$200",
                    duration: "4 weeks",
                    date: "2025",
                  },
                  {
                    name: "fliporphil",
                    country: "United States",
                    rating: 5,
                    review: "I couldn't find anyone to do what Mohamed was able to simply understand. The delivery was alot faster than I expected. I'll be coming back to bring more work to Mohamed for sure!! Highly Recommend!!!",
                    project: "Cross-Platform Development",
                    price: "Up to $50",
                    duration: "1 day",
                    date: "2025",
                  },
                  {
                    name: "reservet",
                    country: "India",
                    rating: 5,
                    review: "Keep up the good work. He is someone who understands his clients very well and is passionate about his work. I would suggest other's also to give him a chance if they need something to be made in quick time.",
                    project: "Cross-Platform Development",
                    isRepeatClient: true,
                    date: "2022",
                  },
                  {
                    name: "reservet",
                    country: "India",
                    rating: 5,
                    review: "He works really fast and has supplied exactly what I wanted without any troubles caused. He understands his customer's need and also provides services at a decent rate. Communication wise also he is great and is reliable for his work ethic",
                    project: "Cross-Platform Development",
                    isRepeatClient: true,
                    date: "2022",
                  },
                ].map((review, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="group h-full border-2 hover:border-green-500/50 transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-green-500/10 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500" />
                      <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg">
                              {review.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <h4 className="font-bold dark:text-white">{review.name}</h4>
                              <div className="flex items-center gap-2">
                                <p className="text-sm text-gray-500 dark:text-gray-400">{review.country}</p>
                                {review.isRepeatClient && (
                                  <Badge className="text-[10px] px-1.5 py-0 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 border-0">
                                    Repeat Client
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <Quote className="h-6 w-6 text-green-500/30 mb-2" />
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 italic">
                          &ldquo;{review.review}&rdquo;
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{review.project}</p>
                          <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                            {review.price && <span>{review.price}</span>}
                            {review.duration && (
                              <>
                                <span className="w-1 h-1 bg-gray-400 rounded-full" />
                                <span>{review.duration}</span>
                              </>
                            )}
                            <span className="w-1 h-1 bg-gray-400 rounded-full" />
                            <span>{review.date}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <FadeUp delay={0.3}>
                <div className="text-center mt-12">
                  <Link
                    href="https://www.fiverr.com/chichou99?public_mode=true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                      <ExternalLink className="h-5 w-5 mr-2" />
                      View All Reviews on Fiverr
                    </Button>
                  </Link>
                </div>
              </FadeUp>
            </div>
          </section>

          {/* Education Section */}
          <section className="relative py-24 bg-gradient-to-br from-gray-50 via-blue-50/20 to-purple-50/20 dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900 overflow-hidden z-10">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
            <div className="container relative z-10">
              <div className="text-center mb-16">
                <FadeUp>
                  <Badge className="px-4 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                    Education & Certifications
                  </Badge>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <h2 className="text-3xl md:text-4xl font-bold mt-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                    Academic Background
                  </h2>
                </FadeUp>
                <FadeUp delay={0.2}>
                  <p className="text-gray-600 mt-4 max-w-md mx-auto">
                    My educational journey and professional certifications.
                  </p>
                </FadeUp>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <FadeRight>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold">Master's Degree in Mobile App Development</h3>
                        <p className="text-blue-600 dark:text-blue-400">ISET Rades, Tunisia</p>
                      <p className="text-gray-500 dark:text-gray-400 mt-2">Sep 2021 – Present</p>
                      <p className="text-gray-500 dark:text-gray-400 mt-4">
                        Relevant Courses: Advanced Mobile Development, Cloud Computing, Software Engineering, Database
                        Systems.
                      </p>
                    </CardContent>
                  </Card>
                </FadeRight>

                <FadeLeft>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold dark:text-white">Degree in Information System Development</h3>
                        <p className="text-blue-600 dark:text-blue-400">ISET Zaghouan, Tunisia</p>
                      <p className="text-gray-500 dark:text-gray-400 mt-2">Sep 2018 – Jun 2021</p>
                      <p className="text-gray-500 dark:text-gray-400 mt-4">
                        Relevant Courses: Web Development, Information Systems Design, Data Management, Agile
                        Methodologies.
                      </p>
                    </CardContent>
                  </Card>
                </FadeLeft>
              </div>

              <div className="mt-12">
                <FadeUp>
                  <h3 className="text-xl font-bold mb-6 text-center dark:text-white">Certifications</h3>
                </FadeUp>
                <StaggerContainer className="grid md:grid-cols-3 gap-6" childrenDelay={0.1}>
                  <StaggerItem>
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="font-bold dark:text-white">Flutter Development Bootcamp with Dart</h4>
                        <p className="text-blue-600 dark:text-blue-400">Udemy</p>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">2023</p>
                      </CardContent>
                    </Card>
                  </StaggerItem>

                  <StaggerItem>
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="font-bold dark:text-white">Full-Stack Web Development with Node.js</h4>
                        <p className="text-blue-600 dark:text-blue-400">Coursera</p>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">2022</p>
                      </CardContent>
                    </Card>
                  </StaggerItem>

                  <StaggerItem>
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="font-bold dark:text-white">React Native: Advanced Concepts</h4>
                        <p className="text-blue-600 dark:text-blue-400">Udemy</p>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">2023</p>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </div>
          </section>

          {/* Languages Section */}
          <section className="py-16">
            <div className="container">
              <div className="text-center mb-12">
                <FadeUp>
                  <h2 className="text-3xl font-bold">Languages</h2>
                </FadeUp>
              </div>
              <div className="flex flex-wrap justify-center gap-8">
                <FadeUp delay={0.1}>
                  <div className="text-center">
                    <motion.div
                      className="relative w-32 h-32"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="8"
                          strokeDasharray="283"
                          strokeDashoffset="0"
                          strokeLinecap="round"
                          initial={{ strokeDashoffset: 283 }}
                          whileInView={{ strokeDashoffset: 0 }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          viewport={{ once: true }}
                        />
                        <text x="50" y="55" textAnchor="middle" fontSize="18" fontWeight="bold">
                          100%
                        </text>
                      </svg>
                    </motion.div>
                    <h3 className="mt-4 font-bold text-lg dark:text-white">Arabic</h3>
                    <p className="text-gray-500 dark:text-gray-400">Native</p>
                  </div>
                </FadeUp>
                <FadeUp delay={0.2}>
                  <div className="text-center">
                    <motion.div
                      className="relative w-32 h-32"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="8"
                          strokeDasharray="283"
                          strokeDashoffset="28"
                          strokeLinecap="round"
                          initial={{ strokeDashoffset: 283 }}
                          whileInView={{ strokeDashoffset: 28 }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          viewport={{ once: true }}
                        />
                        <text x="50" y="55" textAnchor="middle" fontSize="18" fontWeight="bold">
                          90%
                        </text>
                      </svg>
                    </motion.div>
                    <h3 className="mt-4 font-bold text-lg dark:text-white">French</h3>
                    <p className="text-gray-500 dark:text-gray-400">Fluent</p>
                  </div>
                </FadeUp>
                <FadeUp delay={0.3}>
                  <div className="text-center">
                    <motion.div
                      className="relative w-32 h-32"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="8"
                          strokeDasharray="283"
                          strokeDashoffset="28"
                          strokeLinecap="round"
                          initial={{ strokeDashoffset: 283 }}
                          whileInView={{ strokeDashoffset: 28 }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          viewport={{ once: true }}
                        />
                        <text x="50" y="55" textAnchor="middle" fontSize="18" fontWeight="bold">
                          90%
                        </text>
                      </svg>
                    </motion.div>
                    <h3 className="mt-4 font-bold text-lg dark:text-white">English</h3>
                    <p className="text-gray-500 dark:text-gray-400">Fluent</p>
                  </div>
                </FadeUp>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden z-10">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
            <div className="container relative z-10">
              <div className="text-center mb-16">
                <FadeUp>
                  <Badge className="px-4 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                    Get In Touch
                  </Badge>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <h2 className="text-3xl md:text-4xl font-bold mt-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                    Let's Work Together
                  </h2>
                </FadeUp>
                <FadeUp delay={0.2}>
                  <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-md mx-auto">
                    Have a project in mind? I'd love to hear about it. Send me a message and let's chat.
                  </p>
                </FadeUp>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <FadeRight>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Contact Information</h3>
                    <p className="text-gray-500">
                      Feel free to reach out to me through any of the following channels. I'm always open to discussing
                      new projects, creative ideas, or opportunities to be part of your vision.
                    </p>

                    <div className="space-y-4">
                      <motion.div
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="bg-blue-100 p-3 rounded-full">
                          <Mail className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Email</h4>
                          <p className="text-gray-500 dark:text-gray-400">zzsliti1999@gmail.com</p>
                        </div>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="bg-blue-100 p-3 rounded-full">
                          <Phone className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium dark:text-white">Phone</h4>
                          <Link
                            href="tel:+21654740030"
                            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            +216 54740030
                          </Link>
                        </div>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <div className="bg-green-100 p-3 rounded-full">
                          <MessageCircle className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium dark:text-white">WhatsApp</h4>
                          <Link
                            href="https://wa.me/21654740030"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-green-600 transition-colors"
                          >
                            Chat on WhatsApp
                          </Link>
                        </div>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <div className="bg-blue-100 p-3 rounded-full">
                          <MapPin className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium dark:text-white">Location</h4>
                          <p className="text-gray-500 dark:text-gray-400">Tunis, Tunisia</p>
                        </div>
                      </motion.div>
                    </div>

                    <div className="pt-6">
                      <h4 className="font-medium mb-4 dark:text-white">Connect With Me</h4>
                      <div className="flex gap-4">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <Link
                            href="https://github.com/MohamedAzizSliti"
                            className="bg-gray-100 p-3 rounded-full hover:bg-blue-100 transition-colors"
                          >
                            <Github className="h-5 w-5 text-gray-700" />
                            <span className="sr-only">GitHub</span>
                          </Link>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <Link
                            href="https://www.linkedin.com/in/mohamedazizsliti/"
                            className="bg-gray-100 p-3 rounded-full hover:bg-blue-100 transition-colors"
                          >
                            <Linkedin className="h-5 w-5 text-gray-700" />
                            <span className="sr-only">LinkedIn</span>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </FadeRight>

                <FadeLeft>
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                    <ContactForm />
                  </div>
                </FadeLeft>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <FadeUp>
                  <Link href="/" className="font-bold text-2xl">
                    Mohamed<span className="text-blue-500">.</span>
                  </Link>
                  <p className="mt-2 text-gray-400 max-w-md">
                    A passionate Full Stack Developer specializing in creating beautiful and functional mobile and web
                    applications.
                  </p>
                </FadeUp>
              </div>
              <div className="flex flex-col items-center md:items-end">
                <FadeUp delay={0.1}>
                  <div className="flex gap-4 mb-4">
                    <Link href="https://github.com/MohamedAzizSliti" className="text-gray-400 hover:text-blue-500">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/mohamedazizsliti/"
                      className="text-gray-400 hover:text-blue-500"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="mailto:zzsliti1999@gmail.com" className="text-gray-400 hover:text-blue-500">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Link>
                  </div>
                  <p className="text-gray-400 text-sm">© 2025 All Rights Reserved</p>
                </FadeUp>
              </div>
            </div>
          </div>
        </footer>
      </div>
  )
}
