export type TimelineEntry = {
  role: string
  org: string
  timeframe: string
  summary: string
  current?: boolean
}

export const experience: TimelineEntry[] = [
  {
    role: "Project Manager",
    org: "ExpressKilo",
    timeframe: "Dec 2025 — Present",
    current: true,
    summary:
      "Leading a sender–carrier marketplace across mobile, web, and backend. I manage a cross-functional team through auth, listings, offers, shipments, messaging, and payments, and I built the Flutter client against the REST API — maps, missions, and in-app chat.",
  },
  {
    role: "Full-Stack Developer",
    org: "Vibelinx",
    timeframe: "Dec 2024 — Jan 2026",
    summary:
      "Full-stack work on a DJ and live-session product: sessions, requests, tips, and dashboards, with a React Native / Expo client and a React, Node.js, and MongoDB web platform.",
  },
  {
    role: "Developer",
    org: "Al Mindhar Booking",
    timeframe: "Jan 2025 — Dec 2025",
    summary:
      "Flutter application in the shape of a stay-booking product: property listings, profiles, and booking. Node.js is part of the stack recorded for this work.",
  },
  {
    role: "Flutter Developer Intern",
    org: "Pikoro",
    timeframe: "Mar 2024 — May 2024",
    summary:
      "Mobile app for student club activities. Flutter and Dart, real-time communication with Socket.io, state with GetX.",
  },
  {
    role: "Flutter Developer Intern",
    org: "Domotika Inc.",
    timeframe: "Jan 2024 — Feb 2024",
    summary:
      "Interface for a smart-home app: navigation, Flutter screens, and integration with the backend APIs. Version control with Git.",
  },
]

export const education = [
  {
    title: "Professional Master's in Mobile Application Development",
    school: "ISET Radès, Tunisia",
    timeframe: "Sep 2021 — Dec 2024",
    detail:
      "Advanced mobile development, cloud computing, software engineering, and database systems.",
  },
  {
    title: "Licence in Information Systems Development",
    school: "ISET Zaghouan, Tunisia",
    timeframe: "Sep 2018 — Jun 2021",
    detail:
      "Web development, information systems design, data management, and agile methods.",
  },
] as const

export const certifications = [
  { title: "Flutter Development Bootcamp with Dart", by: "Udemy", year: "2023" },
  { title: "React Native: Advanced Concepts", by: "Udemy", year: "2023" },
  { title: "Full-Stack Web Development with Node.js", by: "Coursera", year: "2022" },
] as const

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "Fluent" },
  { name: "English", level: "Fluent" },
] as const
