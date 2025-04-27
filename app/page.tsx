"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Mail, Linkedin, ArrowRight, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { PageTransition } from "@/components/page-transition"
import { FadeUp, FadeDown, FadeLeft, FadeRight, ScaleIn } from "@/components/animate-in"
import { StaggerContainer, StaggerItem } from "@/components/stagger-container"
import { CVDownloadButton } from "@/components/cv-download-button"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur">
          <div className="container flex h-16 items-center justify-between">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Link href="/" className="font-bold text-xl">
                Mohamed<span className="text-blue-600">.</span>
              </Link>
            </motion.div>
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:flex gap-6"
            >
              <Link href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="#experience" className="text-sm font-medium hover:text-blue-600 transition-colors">
                Experience
              </Link>
              <Link href="#projects" className="text-sm font-medium hover:text-blue-600 transition-colors">
                Projects
              </Link>
              <Link href="#skills" className="text-sm font-medium hover:text-blue-600 transition-colors">
                Skills
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </motion.nav>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
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

        <main>
          {/* Hero Section */}
          <section className="container py-24 md:py-32 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-6">
              <FadeDown>
                <Badge className="px-3 py-1 text-sm bg-blue-100 text-blue-700 hover:bg-blue-100">
                  Web & Mobile Developer
                </Badge>
              </FadeDown>
              <FadeUp delay={0.1}>
                <h1 className="text-4xl md:text-6xl font-bold">
                  Hi, I'm <span className="text-blue-600">Mohamed Aziz Sliti</span>
                  <br />
                  Flutter Developer
                </h1>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-gray-500 md:text-lg max-w-md">
                  I build cross-platform mobile applications with Flutter and develop efficient backend services with
                  Node.js and Firebase.
                </p>
              </FadeUp>
              <FadeUp delay={0.3}>
                <div className="flex gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">Contact Me</Button>
                </div>
              </FadeUp>
              <FadeUp delay={0.4}>
                <div className="flex items-center gap-4 pt-4">
                  <Link href="https://github.com/MohamedAzizSliti" className="text-gray-500 hover:text-blue-600">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/mohamedazizsliti/"
                    className="text-gray-500 hover:text-blue-600"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="mailto:zzsliti1999@gmail.com" className="text-gray-500 hover:text-blue-600">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </FadeUp>
            </div>
            <div className="flex-1 flex justify-center">
              <ScaleIn delay={0.2}>
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-600">
                  <Image src="/profile-image.png" alt="Mohamed Aziz Sliti" fill className="object-cover" priority />
                </div>
              </ScaleIn>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="bg-gray-50 py-24">
            <div className="container">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <FadeRight className="flex-1">
                  <Image
                    src="/about-image.png"
                    alt="About me"
                    width={500}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                </FadeRight>
                <div className="flex-1 space-y-6">
                  <FadeLeft>
                    <Badge className="px-3 py-1 text-sm bg-blue-100 text-blue-700 hover:bg-blue-100">About Me</Badge>
                  </FadeLeft>
                  <FadeLeft delay={0.1}>
                    <h2 className="text-3xl md:text-4xl font-bold">Passionate Mobile Developer</h2>
                  </FadeLeft>
                  <FadeLeft delay={0.2}>
                    <p className="text-gray-500">
                      I'm a motivated Web and Mobile Developer with experience in building cross-platform applications
                      using Flutter and Dart. I'm proficient in developing efficient backend services with Node.js and
                      Firebase, focusing on user-friendly interfaces and robust application architecture.
                    </p>
                  </FadeLeft>
                  <FadeLeft delay={0.3}>
                    <p className="text-gray-500">
                      I'm committed to delivering high-quality solutions from design to deployment, emphasizing
                      performance and scalability. Currently pursuing a Master's Degree in Mobile App Development at
                      ISET Rades.
                    </p>
                  </FadeLeft>
                  <FadeLeft delay={0.4}>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-blue-600" />
                        <p className="text-gray-500">Tunis, Tunisia</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-5 w-5 text-blue-600" />
                        <p className="text-gray-500">zzsliti1999@gmail.com</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-5 w-5 text-blue-600" />
                        <p className="text-gray-500">+216 54740030</p>
                      </div>
                      <div className="flex items-center gap-2">
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
                          className="h-5 w-5 text-blue-600"
                        >
                          <path d="M12 8v4l3 3" />
                          <circle cx="12" cy="12" r="10" />
                        </svg>
                        <p className="text-gray-500">2+ Years Experience</p>
                      </div>
                    </div>
                  </FadeLeft>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-24">
            <div className="container">
              <div className="text-center mb-16">
                <FadeUp>
                  <Badge className="px-3 py-1 text-sm bg-blue-100 text-blue-700 hover:bg-blue-100">
                    Professional Journey
                  </Badge>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <h2 className="text-3xl md:text-4xl font-bold mt-2">Work Experience</h2>
                </FadeUp>
                <FadeUp delay={0.2}>
                  <p className="text-gray-500 mt-4 max-w-md mx-auto">
                    My professional journey as a mobile and web developer.
                  </p>
                </FadeUp>
              </div>

              <StaggerContainer className="space-y-12" childrenDelay={0.15}>
                <StaggerItem>
                  <div className="relative border-l border-gray-200 pl-8 pb-2">
                    <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 border-4 border-white"></div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold">Developer</h3>
                        <p className="text-blue-600">Al Mindhar</p>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        Current
                      </Badge>
                    </div>
                    <p className="text-gray-500 mt-2">
                      Developing an Airbnb-like application with Flutter. The app includes features similar to Airbnb's
                      platform, focusing on property listings, user profiles, and booking functionality.
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="relative border-l border-gray-200 pl-8 pb-2">
                    <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 border-4 border-white"></div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold">Flutter Developer</h3>
                        <p className="text-blue-600">Chatchout App (Personal Project)</p>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        06/2024 - 08/2024
                      </Badge>
                    </div>
                    <p className="text-gray-500 mt-2">
                      Developed a chat app with real-time messaging using Firebase and Flutter, ensuring a smooth and
                      responsive UI with optimal performance. Implemented user authentication, push notifications, and
                      message delivery status, utilizing Firebase Cloud Messaging.
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="relative border-l border-gray-200 pl-8 pb-2">
                    <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 border-4 border-white"></div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold">Flutter Developer Intern</h3>
                        <p className="text-blue-600">Pikoro</p>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        03/2024 - 05/2024
                      </Badge>
                    </div>
                    <p className="text-gray-500 mt-2">
                      Developed a mobile app for student club activities, utilizing Flutter and Dart for cross-platform
                      functionality. Implemented real-time communication using Socket.io and managed state with GetX,
                      ensuring seamless user interactions.
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="relative border-l border-gray-200 pl-8 pb-2">
                    <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 border-4 border-white"></div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold">Flutter Developer Intern</h3>
                        <p className="text-blue-600">Domotika Inc.</p>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        01/2024 - 02/2024
                      </Badge>
                    </div>
                    <p className="text-gray-500 mt-2">
                      Designed and developed the UI for a smart home app, ensuring intuitive navigation and
                      functionality. Integrated Flutter front-end with backend APIs and utilized Git for version control
                      and collaboration.
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="relative border-l border-gray-200 pl-8">
                    <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 border-4 border-white"></div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold">Freelance Flutter Developer</h3>
                        <p className="text-blue-600">Coach Finder App</p>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        09/2023 - 01/2024
                      </Badge>
                    </div>
                    <p className="text-gray-500 mt-2">
                      Developed a coaching app with profile management, event scheduling, and user authentication
                      features. Integrated backend services using Node.js, ensuring secure API communication and data
                      handling.
                    </p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-24 bg-gray-50">
            <div className="container">
              <div className="text-center mb-16">
                <FadeUp>
                  <Badge className="px-3 py-1 text-sm bg-blue-100 text-blue-700 hover:bg-blue-100">My Work</Badge>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <h2 className="text-3xl md:text-4xl font-bold mt-2">Featured Projects</h2>
                </FadeUp>
                <FadeUp delay={0.2}>
                  <p className="text-gray-500 mt-4 max-w-md mx-auto">
                    A showcase of my mobile and web development projects.
                  </p>
                </FadeUp>
              </div>

              <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" childrenDelay={0.1}>
                <StaggerItem>
                  <Card className="overflow-hidden group h-full">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src="/project-zaghouan.png"
                        alt="Zaghouan Delivery App"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-xl">Zaghouan Delivery App</h3>
                          <p className="text-gray-500 text-sm">Mobile Application</p>
                        </div>
                        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Flutter</Badge>
                      </div>
                      <p className="text-gray-500 mb-4">
                        A delivery app with multiple user roles: clients, delivery personnel, agents who scan QR codes
                        and generate PDFs for invoices, and admin dashboard with statistics.
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                          <Badge variant="outline">Flutter</Badge>
                          <Badge variant="outline">Firebase</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>

                <StaggerItem>
                  <Card className="overflow-hidden group h-full">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src="/project-chatchout.png"
                        alt="Chatchout App"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-xl">Chatchout App</h3>
                          <p className="text-gray-500 text-sm">Chat Application</p>
                        </div>
                        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Flutter</Badge>
                      </div>
                      <p className="text-gray-500 mb-4">
                        A real-time messaging app with user authentication, push notifications, and message delivery
                        status using Firebase Cloud Messaging.
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                          <Badge variant="outline">Flutter</Badge>
                          <Badge variant="outline">Firebase</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>

                <StaggerItem>
                  <Card className="overflow-hidden group h-full">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src="/project-almindhar.png"
                        alt="Al Mindhar App"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-xl">Al Mindhar App</h3>
                          <p className="text-gray-500 text-sm">Accommodation Booking</p>
                        </div>
                        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Flutter</Badge>
                      </div>
                      <p className="text-gray-500 mb-4">
                        An Airbnb-like application for property listings, user profiles, and booking functionality with
                        a focus on user experience.
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                          <Badge variant="outline">Flutter</Badge>
                          <Badge variant="outline">Node.js</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>

                <StaggerItem>
                  <Card className="overflow-hidden group h-full">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src="/project-coach.png"
                        alt="Coach Finder App"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-xl">Coach Finder App</h3>
                          <p className="text-gray-500 text-sm">Coaching Platform</p>
                        </div>
                        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Flutter</Badge>
                      </div>
                      <p className="text-gray-500 mb-4">
                        A coaching app with profile management, event scheduling, and user authentication features
                        integrated with Node.js backend.
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                          <Badge variant="outline">Flutter</Badge>
                          <Badge variant="outline">Node.js</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>

                <StaggerItem>
                  <Card className="overflow-hidden group h-full">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src="/project-student.png"
                        alt="Student Club Activities App"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-xl">Student Club App</h3>
                          <p className="text-gray-500 text-sm">Activity Management</p>
                        </div>
                        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Flutter</Badge>
                      </div>
                      <p className="text-gray-500 mb-4">
                        A mobile app for student club activities with real-time communication using Socket.io and state
                        management with GetX.
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                          <Badge variant="outline">Flutter</Badge>
                          <Badge variant="outline">Socket.io</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>

                <StaggerItem>
                  <Card className="overflow-hidden group h-full">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src="/project-smarthome.png"
                        alt="Smart Home App"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-xl">Smart Home App</h3>
                          <p className="text-gray-500 text-sm">IoT Control</p>
                        </div>
                        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Flutter</Badge>
                      </div>
                      <p className="text-gray-500 mb-4">
                        A smart home control app with intuitive UI design and seamless integration with backend APIs for
                        device control.
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                          <Badge variant="outline">Flutter</Badge>
                          <Badge variant="outline">API Integration</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-24">
            <div className="container">
              <div className="text-center mb-16">
                <FadeUp>
                  <Badge className="px-3 py-1 text-sm bg-blue-100 text-blue-700 hover:bg-blue-100">My Skills</Badge>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <h2 className="text-3xl md:text-4xl font-bold mt-2">Technical Expertise</h2>
                </FadeUp>
                <FadeUp delay={0.2}>
                  <p className="text-gray-500 mt-4 max-w-md mx-auto">
                    The technologies and tools I work with to build amazing applications.
                  </p>
                </FadeUp>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <FadeRight>
                  <h3 className="text-xl font-bold mb-6">Mobile Development</h3>
                  <div className="space-y-4">
                    {["Flutter", "Dart", "React Native", "Firebase", "Expo"].map((skill, index) => (
                      <motion.div
                        key={skill}
                        className="flex flex-col gap-2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between">
                          <span className="font-medium">{skill}</span>
                          <span className="text-blue-600">90%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-blue-600 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: "90%" }}
                            transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                            viewport={{ once: true }}
                          ></motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </FadeRight>
                <FadeLeft>
                  <h3 className="text-xl font-bold mb-6">Web Development</h3>
                  <div className="space-y-4">
                    {["Node.js", "Express", "React.js", "HTML/CSS", "MongoDB"].map((skill, index) => (
                      <motion.div
                        key={skill}
                        className="flex flex-col gap-2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between">
                          <span className="font-medium">{skill}</span>
                          <span className="text-blue-600">85%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-blue-600 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: "85%" }}
                            transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                            viewport={{ once: true }}
                          ></motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </FadeLeft>
              </div>

              <div className="mt-16">
                <FadeUp>
                  <h3 className="text-xl font-bold mb-6 text-center">Tools & Technologies</h3>
                </FadeUp>
                <StaggerContainer className="flex flex-wrap justify-center gap-4" childrenDelay={0.05}>
                  {[
                    "GetX",
                    "Redux",
                    "Provider",
                    "Figma",
                    "Adobe XD",
                    "Git",
                    "Docker",
                    "VSCode",
                    "Postman",
                    "Socket.io",
                    "Material Design",
                    "REST API",
                  ].map((tool) => (
                    <StaggerItem key={tool}>
                      <Badge variant="outline" className="px-4 py-2 text-sm">
                        {tool}
                      </Badge>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="py-24 bg-gray-50">
            <div className="container">
              <div className="text-center mb-16">
                <FadeUp>
                  <Badge className="px-3 py-1 text-sm bg-blue-100 text-blue-700 hover:bg-blue-100">
                    Education & Certifications
                  </Badge>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <h2 className="text-3xl md:text-4xl font-bold mt-2">Academic Background</h2>
                </FadeUp>
                <FadeUp delay={0.2}>
                  <p className="text-gray-500 mt-4 max-w-md mx-auto">
                    My educational journey and professional certifications.
                  </p>
                </FadeUp>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <FadeRight>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold">Master's Degree in Mobile App Development</h3>
                      <p className="text-blue-600">ISET Rades, Tunisia</p>
                      <p className="text-gray-500 mt-2">Sep 2021 – Present</p>
                      <p className="text-gray-500 mt-4">
                        Relevant Courses: Advanced Mobile Development, Cloud Computing, Software Engineering, Database
                        Systems.
                      </p>
                    </CardContent>
                  </Card>
                </FadeRight>

                <FadeLeft>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold">Degree in Information System Development</h3>
                      <p className="text-blue-600">ISET Zaghouan, Tunisia</p>
                      <p className="text-gray-500 mt-2">Sep 2018 – Jun 2021</p>
                      <p className="text-gray-500 mt-4">
                        Relevant Courses: Web Development, Information Systems Design, Data Management, Agile
                        Methodologies.
                      </p>
                    </CardContent>
                  </Card>
                </FadeLeft>
              </div>

              <div className="mt-12">
                <FadeUp>
                  <h3 className="text-xl font-bold mb-6 text-center">Certifications</h3>
                </FadeUp>
                <StaggerContainer className="grid md:grid-cols-3 gap-6" childrenDelay={0.1}>
                  <StaggerItem>
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="font-bold">Flutter Development Bootcamp with Dart</h4>
                        <p className="text-blue-600">Udemy</p>
                        <p className="text-gray-500 mt-2">2023</p>
                      </CardContent>
                    </Card>
                  </StaggerItem>

                  <StaggerItem>
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="font-bold">Full-Stack Web Development with Node.js</h4>
                        <p className="text-blue-600">Coursera</p>
                        <p className="text-gray-500 mt-2">2022</p>
                      </CardContent>
                    </Card>
                  </StaggerItem>

                  <StaggerItem>
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="font-bold">React Native: Advanced Concepts</h4>
                        <p className="text-blue-600">Udemy</p>
                        <p className="text-gray-500 mt-2">2023</p>
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
                    <h3 className="mt-4 font-bold text-lg">Arabic</h3>
                    <p className="text-gray-500">Native</p>
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
                    <h3 className="mt-4 font-bold text-lg">French</h3>
                    <p className="text-gray-500">Fluent</p>
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
                    <h3 className="mt-4 font-bold text-lg">English</h3>
                    <p className="text-gray-500">Fluent</p>
                  </div>
                </FadeUp>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-24 bg-gray-50">
            <div className="container">
              <div className="text-center mb-16">
                <FadeUp>
                  <Badge className="px-3 py-1 text-sm bg-blue-100 text-blue-700 hover:bg-blue-100">Get In Touch</Badge>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <h2 className="text-3xl md:text-4xl font-bold mt-2">Let's Work Together</h2>
                </FadeUp>
                <FadeUp delay={0.2}>
                  <p className="text-gray-500 mt-4 max-w-md mx-auto">
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
                          <p className="text-gray-500">zzsliti1999@gmail.com</p>
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
                          <h4 className="font-medium">Phone</h4>
                          <p className="text-gray-500">+216 54740030</p>
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
                          <h4 className="font-medium">Location</h4>
                          <p className="text-gray-500">Tunis, Tunisia</p>
                        </div>
                      </motion.div>
                    </div>

                    <div className="pt-6">
                      <h4 className="font-medium mb-4">Connect With Me</h4>
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
                  <div className="bg-white p-8 rounded-lg shadow-lg">
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
                    A passionate Flutter and Mobile Developer specializing in creating beautiful and functional mobile
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
    </PageTransition>
  )
}
