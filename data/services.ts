export type Service = {
  index: string
  title: string
  problem: string
  value: string
  capabilities: string[]
  cta: string
}

export const services: Service[] = [
  {
    index: "01",
    title: "Mobile application development",
    problem:
      "A product idea that only exists as a deck still has to survive real phones, flaky networks, and a first-time user who will not read a manual.",
    value:
      "I design and build Flutter and React Native applications that can be put in someone's hand — auth, navigation, and the flows the business actually runs on.",
    capabilities: [
      "Flutter and Dart applications",
      "React Native and Expo",
      "Authentication, OTP, and role-based flows",
      "Maps, payments, and device integrations",
    ],
    cta: "Discuss a mobile product",
  },
  {
    index: "02",
    title: "Web application development",
    problem:
      "Operational tools and marketing sites get treated as the same job. They are not. One has to be fast to understand. The other has to be fast to work in.",
    value:
      "I build Next.js and React platforms with a clear information hierarchy, so a founder, a recruiter, or an operator can tell what the product does.",
    capabilities: [
      "Next.js and React",
      "TypeScript interfaces",
      "Dashboards and operational views",
      "Responsive, accessible layouts",
    ],
    cta: "Discuss a web platform",
  },
  {
    index: "03",
    title: "Backend and API development",
    problem:
      "Mobile apps stall when the API is an afterthought: unclear resources, no real-time path, and a database that cannot enforce who sees what.",
    value:
      "I build the service layer the client depends on — Node.js, NestJS, REST, sockets, and a database chosen for the data, not for the tutorial.",
    capabilities: [
      "Node.js, Express, and NestJS",
      "REST APIs and Socket.io",
      "Supabase, PostgreSQL, MongoDB, Firebase",
      "Auth and row-level access",
    ],
    cta: "Discuss an API",
  },
  {
    index: "04",
    title: "AI automation",
    problem:
      "Adding a chat box is not a product. Teams need a model to do a job: triage a request, move a workflow, or draft a report from something a person said.",
    value:
      "I connect models to real systems — agents, retrieval, n8n, and API integrations — and I keep the model inside the task it is allowed to perform.",
    capabilities: [
      "AI agents and RAG",
      "OpenAI API integration",
      "n8n and workflow automation",
      "Speech-to-text pipelines",
    ],
    cta: "Discuss an automation",
  },
  {
    index: "05",
    title: "MVP development",
    problem:
      "Early products die in planning, or they ship a prototype that cannot take a second user without a rewrite.",
    value:
      "I turn a narrow idea into a functional MVP: one client, one honest data model, and the few flows that prove the product is real. Baqala Tunisie is scoped this way — a concept, not a claimed rollout.",
    capabilities: [
      "Scope cut to a first usable version",
      "Flutter or Next.js, plus a managed backend",
      "A path from concept to something you can click",
      "Clear status, without invented traction",
    ],
    cta: "Discuss an MVP",
  },
]
