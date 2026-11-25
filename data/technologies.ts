export type Technology = {
  name: string
  note: string
}

export type TechnologyGroup = {
  id: string
  label: string
  items: Technology[]
}

export const technologyGroups: TechnologyGroup[] = [
  {
    id: "mobile",
    label: "Mobile",
    items: [
      {
        name: "Flutter",
        note: "Primary mobile stack across ExpressKilo, Wave Clinique, and earlier client apps.",
      },
      {
        name: "Dart",
        note: "The language underneath the Flutter applications.",
      },
      {
        name: "React Native",
        note: "Used for the Vibelinx client, alongside native-feeling session flows.",
      },
      {
        name: "Expo",
        note: "React Native workflow for the Vibelinx mobile experience.",
      },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    items: [
      {
        name: "React",
        note: "Web interfaces, including the Vibelinx web platform.",
      },
      {
        name: "Next.js",
        note: "This portfolio, and the operational surface of the Baqala Tunisie concept.",
      },
      {
        name: "TypeScript",
        note: "Typed frontend work, including this site.",
      },
      {
        name: "JavaScript",
        note: "The shared language across the web clients and Node services.",
      },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      {
        name: "Node.js",
        note: "API and service layer for the student and web products.",
      },
      {
        name: "Express.js",
        note: "HTTP APIs where a direct Node server is the right shape.",
      },
      {
        name: "NestJS",
        note: "The Plenty Miles API: player state, shop, and Strava import, with Supabase behind it.",
      },
      {
        name: "REST APIs",
        note: "The contract behind ExpressKilo's maps, missions, and chat.",
      },
      {
        name: "Socket.io",
        note: "Live updates for Studenty and the Pikoro student-club internship.",
      },
    ],
  },
  {
    id: "data",
    label: "Data",
    items: [
      {
        name: "Supabase",
        note: "Auth and data for Wave Clinique, Plenty Miles, and the Baqala Tunisie concept.",
      },
      {
        name: "PostgreSQL",
        note: "Relational data. Supabase projects sit on Postgres.",
      },
      {
        name: "Firebase",
        note: "Auth and data for Zaghouan Delivery.",
      },
      {
        name: "MongoDB",
        note: "Document data for the Vibelinx web platform and Studenty.",
      },
    ],
  },
  {
    id: "ai",
    label: "AI & automation",
    items: [
      {
        name: "n8n",
        note: "Workflow automation when a product needs systems to talk without a custom queue.",
      },
      {
        name: "AI agents",
        note: "Task-running agents, including the voice workflow in Voice to Work.",
      },
      {
        name: "RAG",
        note: "Retrieval over a project's own knowledge, when a prompt alone is not enough.",
      },
      {
        name: "OpenAI API",
        note: "Wellness triage inside Wave Clinique. Used where it solves a product problem.",
      },
      {
        name: "Workflows",
        note: "Voice to Work: speech in, an agent step, an integration, a report out.",
      },
    ],
  },
]
