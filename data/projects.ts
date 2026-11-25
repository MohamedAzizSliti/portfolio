import { useCaseHasImages } from "@/data/use-cases"

export type Project = {
  slug: string
  name: string
  category: string
  timeframe: string
  status: string
  summary: string
  description: string
  contribution: string
  problem: string
  role: string
  challenge: string
  solution: string
  technologies: string[]
  features: string[]
  architecture: string[]
  statusDetail: string
  group: "selected" | "earlier"
}

export const projects: Project[] = [
  {
    slug: "expresskilo",
    name: "ExpressKilo",
    category: "Delivery & transport",
    timeframe: "Dec 2025 — Present",
    status: "Current",
    summary:
      "A marketplace that connects parcel senders with travelers and professional carriers, across mobile, web, and a shared API.",
    description:
      "ExpressKilo is the product I lead. Senders post what needs to move. Travelers and carriers respond. The product covers listings, offers, shipments, messaging, and payments, with a Flutter application on the REST API for maps, missions, and in-app chat.",
    contribution:
      "Project manager across web, backend, and design, and the developer of the Flutter client. I keep the three releases pointing at the same product.",
    problem:
      "Moving a parcel with a person who is already traveling is a coordination problem: who is going, what is being carried, and whether both sides can trust the handoff.",
    role: "Project manager and Flutter developer. December 2025 to the present.",
    challenge:
      "Mobile, web, and backend move at different speeds. A mission screen that drifts from the API becomes a second product.",
    solution:
      "One Flutter client bound to the shared REST API, with maps, missions, and chat kept in the same release conversation as web and backend.",
    technologies: ["Flutter", "Dart", "REST API", "Maps"],
    features: [
      "Authentication",
      "Listings and offers",
      "Shipments",
      "In-app messaging",
      "Payments",
      "Maps and missions",
    ],
    architecture: [
      "Flutter client for the day-to-day carrier and sender flows",
      "REST API shared with the web product",
      "Maps, missions, and chat as first-class client features",
      "A cross-functional release rhythm for web, backend, and design",
    ],
    statusDetail:
      "Active role. This page does not publish revenue, download counts, or a public demo URL.",
    group: "selected",
  },
  {
    slug: "vibelinx",
    name: "Vibelinx",
    category: "Live sessions",
    timeframe: "Dec 2024 — Jan 2026",
    status: "Engagement complete",
    summary:
      "A DJ and live-session product for performers and patrons: requests, tips, and the tools around a night that is actually happening.",
    description:
      "Vibelinx is built for two people in the same room who are not looking at the same screen. DJs run the session. Patrons request music and tip. I worked on it full-stack from December 2024 to January 2026. The mobile scope is React Native and Expo, with Stripe for payments and GPS where a session is tied to a place. The web platform recorded alongside it is React, Node.js, and MongoDB, with real-time interaction.",
    contribution:
      "Full-stack development across the engagement: the session product and the web platform that sits with it.",
    problem:
      "A live session falls apart when the request, the payment, and the person on stage are three different tools.",
    role: "Full-stack developer. December 2024 to January 2026.",
    challenge:
      "The room is live. A request that arrives late, or a tip that is unclear, is not a minor bug. It is the product failing in public.",
    solution:
      "A React Native and Expo client for DJs and patrons, Stripe for tips and payments, GPS for place-aware sessions, and a React / Node.js / MongoDB web platform for the real-time side of the product.",
    technologies: ["React Native", "Expo", "Stripe", "GPS", "React", "Node.js", "MongoDB"],
    features: [
      "DJ and patron experiences",
      "Live session management",
      "Music requests",
      "Tips and payments",
      "DJ dashboards",
      "Real-time web interaction",
    ],
    architecture: [
      "React Native and Expo for the session client",
      "Stripe for tips and payments",
      "GPS where a session needs a location",
      "React, Node.js, and MongoDB for the web platform",
    ],
    statusDetail:
      "Professional engagement, finished January 2026. No public demo or repository is linked from this site.",
    group: "selected",
  },
  {
    slug: "wave-clinique",
    name: "Wave Clinique",
    category: "Telemedicine",
    timeframe: "In progress",
    status: "In progress",
    summary:
      "A Flutter and Supabase telemedicine app for patients, doctors, and nurses, with AI used only for wellness triage.",
    description:
      "Wave Clinique is a telemedicine product for the Tunisian market. Three roles share it: patients, doctors, and nurses. The scope includes AI-assisted wellness triage through the OpenAI API, medical records protected with row-level security, appointment booking, live provider maps, and an emergency SOS. The interface is localized in Arabic, French, and English.",
    contribution:
      "Product engineering across the Flutter client, Supabase access rules, and the triage flow. OpenAI is limited to wellness triage.",
    problem:
      "Care does not fit a single account type, and a model suggestion must never be confused with a diagnosis or with another patient's file.",
    role: "Flutter and backend-minded product engineering. Still in progress.",
    challenge:
      "Three roles, sensitive records, and a model in the loop. The unsafe default is one shared view and an unbounded prompt.",
    solution:
      "flutter_bloc on the client, Supabase with row-level security on the records, OpenStreetMap for provider location, and the model constrained to wellness triage. Localization is part of the product, not a later pass.",
    technologies: ["Flutter", "Supabase", "OpenAI API", "flutter_bloc", "OpenStreetMap"],
    features: [
      "Patient, doctor, and nurse roles",
      "AI-assisted wellness triage",
      "Records with row-level security",
      "Appointment booking",
      "Provider maps",
      "Emergency SOS",
      "Arabic, French, and English",
    ],
    architecture: [
      "Flutter client structured with flutter_bloc",
      "Supabase for data, auth, and row-level security",
      "OpenAI API limited to wellness triage",
      "OpenStreetMap for live provider maps",
    ],
    statusDetail:
      "In progress. No launch metrics or public demo are published here.",
    group: "selected",
  },
  {
    slug: "baqala-tunisie",
    name: "Baqala Tunisie",
    category: "Stock & suppliers",
    timeframe: "Concept / MVP",
    status: "Concept",
    summary:
      "A concept for shops that need stock, suppliers, a catalogue, and invoices in one working surface.",
    description:
      "Baqala Tunisie is a stock and supplier management concept. The MVP shape covers inventory, supplier relationships, a product catalogue, invoice workflows, and stock monitoring. It is presented as a concept, not as a company with customers.",
    contribution:
      "Scoping and building the MVP direction: a Flutter workflow, a Next.js operational view, and Supabase for the data.",
    problem:
      "Small retail operations track stock in one place, suppliers in another, and invoices in a third. The errors show up as missing products, not as software bugs.",
    role: "Product and engineering on the concept. Not a claimed production rollout.",
    challenge:
      "An inventory tool becomes shelfware if it asks a shop to adopt five modules before it can count what is on the shelf.",
    solution:
      "A narrow MVP: Flutter for the daily count and supplier check, Next.js for the operational view, Supabase for the shared data. Invoices and stock sit on that same model.",
    technologies: ["Flutter", "Next.js", "Supabase"],
    features: [
      "Inventory management",
      "Supplier relationships",
      "Product catalogue",
      "Invoice workflows",
      "Stock monitoring",
    ],
    architecture: [
      "Flutter for the on-the-floor workflow",
      "Next.js for catalogue, invoices, and oversight",
      "Supabase as the shared data layer",
    ],
    statusDetail:
      "Concept and MVP. This is not presented as a launched business, and there is no public demo linked.",
    group: "selected",
  },
  {
    slug: "playball",
    name: "Playball",
    category: "Sports",
    timeframe: "Not dated publicly",
    status: "Scope documented",
    summary:
      "A sports application in Flutter: sign-in, one-time codes, events, and an API the screens can trust.",
    description:
      "Playball is a sports-related Flutter application. The work I can describe is authentication, OTP, event management, and the API integration under those screens. I am not publishing a store listing or a user count.",
    contribution:
      "Flutter application structure for auth, OTP, and events, with a defined boundary to the API.",
    problem:
      "Sports products collect people around a time and a place. If sign-in or the event list is unreliable, nothing downstream matters.",
    role: "Flutter development on authentication, OTP, events, and API integration.",
    challenge:
      "OTP and event data come from outside the phone. The UI still has to feel immediate, and the API still has to be strict.",
    solution:
      "A Flutter client organized around authentication, OTP verification, and event management, with API integration kept as its own layer rather than calls scattered through widgets.",
    technologies: ["Flutter", "Dart"],
    features: [
      "Authentication",
      "OTP verification",
      "Event management",
      "API integration",
      "Application architecture",
    ],
    architecture: [
      "Flutter client",
      "Authentication and OTP as a dedicated flow",
      "Event management on top of the API",
      "A separate integration layer for requests and responses",
    ],
    statusDetail:
      "No public demo, repository, or completion date is linked. Nothing beyond this scope is claimed.",
    group: "selected",
  },
  {
    slug: "plenty-miles",
    name: "Plenty Miles",
    category: "Activity and forest",
    timeframe: "Not dated publicly",
    status: "Local build",
    summary:
      "A Flutter app that turns walks and runs into a forest you grow, with a NestJS API keeping each player's state in Supabase.",
    description:
      "Plenty Miles is the local pair of projects plenty_miles_app and plenty_miles_backend. Activity becomes Restoration Energy. That energy is invested in a meadow, one cell at a time, until a square can expand. The phone app covers home, invest, forest, achievements, shop, settings, and a streak view. Sign-in is an email code through Supabase. Health Connect, Apple Health, and Strava can feed activities. The API checks the Supabase token and writes the player's rows. The app does not touch the tables.",
    contribution:
      "The Flutter client and the NestJS API in those two local folders. The mechanics note in the app is credited to M. Amine Testouri, so the product rules are not claimed as mine.",
    problem:
      "A fitness log and a game want the same effort to count. If the phone invents the score and the server stores a different one, the forest is fiction.",
    role: "Flutter client and NestJS API. No public start or end date is recorded.",
    challenge:
      "Growth is timed, spendable energy is not the same as experience, and an activity can arrive from the phone's health store or from Strava. Those have to stay separate.",
    solution:
      "Riverpod on the client, go_router for Home, Forest, Achievements, Shop, and Settings, plus full-screen invest and edit routes. NestJS exposes the player state, shop catalog, and Strava import. Supabase holds auth and Postgres.",
    technologies: ["Flutter", "Dart", "Riverpod", "NestJS", "Supabase", "PostgreSQL"],
    features: [
      "Email-code sign-in",
      "Home meadow and growing monitor",
      "Invest mode",
      "Forest squares",
      "Achievements",
      "Shop and inventory",
      "Health Connect, Apple Health, and Strava import",
    ],
    architecture: [
      "Flutter client with Riverpod and go_router",
      "NestJS API. The app never writes the tables itself",
      "Supabase auth and Postgres for player state",
      "Design references stored with the app and shown here as references",
    ],
    statusDetail:
      "No store listing or public demo is linked. The pictures are the design references from the app folder, including the sample player on those boards. They are not customer screenshots.",
    group: "selected",
  },
  {
    slug: "fitness-coach",
    name: "Fitness Coach",
    category: "Fitness",
    timeframe: "Not dated publicly",
    status: "Local build",
    summary:
      "A React Native coaching app for workouts, challenges, nutrition, and a profile, signed in with email.",
    description:
      "Fitness Coach is the local Expo app in rork-zofia--fitness-couch-main. The phone opens on a welcome, then a dashboard, workouts, challenges, nutrition, and a profile. Nutrition can search foods, scan a barcode, or open a meal plan. The profile can pick an avatar or a camera photo. Supabase is the auth and data layer in the setup guide. Spoonacular is the nutrition API named there. The numbers on these screens are what the build showed, not a published result.",
    contribution:
      "The Expo client in that folder. No separate client name or contract date is recorded beyond the project files.",
    problem:
      "A workout, a challenge, and a meal plan fall apart when each one lives in a different app and the profile does not know which one you finished.",
    role: "React Native and Expo. No public start or end date is recorded.",
    challenge:
      "The same account has to carry the dashboard, the class list, the challenge, and the food log without mixing their progress.",
    solution:
      "One Expo Router app with tabs for Dashboard, Workouts, Challenges, Nutrition, and Profile. Supabase for the account and the data. Email, Apple, and Facebook are on the welcome screen.",
    technologies: ["React Native", "Expo", "Supabase"],
    features: [
      "Email sign-in",
      "Dashboard",
      "Workouts and classes",
      "Challenges",
      "Nutrition search, barcode, and meal plan",
      "Profile and avatar",
    ],
    architecture: [
      "Expo Router tabs",
      "Supabase for auth and data",
      "A nutrition API for search, called out in the project setup",
    ],
    statusDetail:
      "No store listing or public demo is linked. The pictures are screens from this build. Debug and test captures were left out.",
    group: "selected",
  },
  {
    slug: "studenty",
    name: "Studenty",
    category: "Student life",
    timeframe: "Not dated publicly",
    status: "Scope documented",
    summary:
      "A student-oriented mobile app with a Flutter client, a Node.js and MongoDB service, and Socket.io for the live layer.",
    description:
      "Studenty is a mobile product aimed at students. The stack is Flutter, Node.js, MongoDB, and Socket.io. A separate internship at Pikoro, March to May 2024, was a student-club app on Flutter, Socket.io, and GetX. That internship stays on the timeline. It is not folded into this case study.",
    contribution:
      "The mobile client and the real-time path: Flutter in front, Node.js and MongoDB behind, Socket.io between them.",
    problem:
      "Student tools go quiet at the moment they should be live — a club update, a message, a change of plan.",
    role: "Mobile and backend development for the student product.",
    challenge:
      "The live channel and the stored data diverge if sockets are bolted on after the screens are finished.",
    solution:
      "Socket.io as a first-class channel, MongoDB for the records, Node.js between them, and Flutter as the client that renders both the stored state and the live events.",
    technologies: ["Flutter", "Node.js", "MongoDB", "Socket.io"],
    features: [
      "Student-oriented mobile flows",
      "Real-time updates",
      "Persistent data in MongoDB",
      "A Node.js API",
    ],
    architecture: [
      "Flutter client",
      "Node.js API",
      "MongoDB for stored data",
      "Socket.io for live events",
    ],
    statusDetail:
      "No public demo or completion date is published. The pictures are the clear screens from the set, plus the architecture diagram. Repeated shots, cropped frames, and the desktop inbox capture were left out.",
    group: "selected",
  },
  {
    slug: "voice-to-work",
    name: "Voice to Work",
    category: "Voice workflows",
    timeframe: "Not dated publicly",
    status: "Scope documented",
    summary:
      "Spoken input turned into a workflow: a transcript, an agent, an integration, and a report.",
    description:
      "Voice to Work is a voice-powered workflow application. A person speaks. Speech-to-text produces a transcript. An AI agent decides the next step. API integrations carry that step into other systems. The output is an automated report. No accuracy figure is published, because none is claimed here.",
    contribution:
      "The workflow from voice input to a report: transcription, agent steps, and the integrations between them.",
    problem:
      "A lot of operational updates still start as someone talking. Typing them up is where the information thins out.",
    role: "Application work across speech-to-text, agents, integrations, and reporting.",
    challenge:
      "A transcript is not an instruction. The system has to know what was asked, which API is allowed to run, and what the report is permitted to say.",
    solution:
      "A pipeline with explicit stages: speech-to-text, an agent constrained to the workflow, API integrations for the side effects, and a report as the output. The model does not skip the stage boundaries.",
    technologies: ["Speech-to-text", "AI agents", "API integrations", "Automated reports"],
    features: [
      "Speech-to-text",
      "Voice-based workflows",
      "AI agents",
      "API integrations",
      "Automated reports",
    ],
    architecture: [
      "Speech-to-text at the edge of the workflow",
      "An agent that operates on the transcript",
      "API integrations for external actions",
      "A report as the closing artifact",
    ],
    statusDetail:
      "No public demo, repository, or measured accuracy is linked. Not labeled as a launched product.",
    group: "selected",
  },
  {
    slug: "al-mindhar",
    name: "Al Mindhar",
    category: "Stay booking",
    timeframe: "Jan 2025 — Dec 2025",
    status: "Engagement complete",
    summary:
      "A Flutter booking application for listings, profiles, and reservations, in the lineage of a stay marketplace.",
    description:
      "Al Mindhar is a stay-booking application I developed from January 2025 to December 2025. Guests browse listings and book. Hosts present a property and a profile. The client is Flutter. Node.js is part of the stack recorded for the project. The picture previously stored for this project was a generated mockup, so it is not used as a screenshot.",
    contribution: "Flutter development of listings, profiles, and the booking flow.",
    problem:
      "A booking app is a promise about a place and a date. The interface has to make both obvious before anyone pays.",
    role: "Developer. January 2025 to December 2025.",
    challenge:
      "Listings, profiles, and booking are easy to design as three disconnected screens. The user experiences them as one decision.",
    solution:
      "A Flutter client that keeps listing, profile, and booking in one flow, with Node.js in the stack behind it.",
    technologies: ["Flutter", "Node.js"],
    features: ["Property listings", "User profiles", "Booking"],
    architecture: [
      "Flutter client for browse, profile, and booking",
      "Node.js as the recorded backend",
    ],
    statusDetail: "Engagement complete, December 2025. No public demo is linked.",
    group: "earlier",
  },
  {
    slug: "zaghouan-delivery",
    name: "Zaghouan Delivery",
    category: "Local delivery",
    timeframe: "Not dated publicly",
    status: "Documented product",
    summary:
      "A delivery app with separate jobs for clients, couriers, scanning agents, and an admin view.",
    description:
      "Zaghouan Delivery is a Flutter and Firebase application with more than one kind of user. Clients place orders. Delivery personnel carry them. Agents scan QR codes and generate PDF invoices. An admin view surfaces operational statistics. I am not publishing the numbers that view contains.",
    contribution:
      "Flutter client work across those roles, with Firebase behind the app.",
    problem:
      "A local delivery operation is several jobs sharing one order. A single customer app does not cover the person scanning the parcel.",
    role: "Flutter developer on a multi-role delivery product.",
    challenge:
      "Each role needs a short path. Sharing one navigation tree across client, courier, agent, and admin makes every path longer.",
    solution:
      "Role-specific Flutter flows on Firebase: ordering, delivery, QR scan to a PDF invoice, and an admin view for statistics.",
    technologies: ["Flutter", "Firebase"],
    features: [
      "Client ordering",
      "Courier flow",
      "QR scanning",
      "PDF invoices",
      "Admin statistics",
    ],
    architecture: [
      "Flutter clients separated by role",
      "Firebase for auth and data",
      "QR scan leading to a generated invoice PDF",
      "An admin view over operational data",
    ],
    statusDetail:
      "Documented product. Dates were not recorded on the previous site, so none are invented here. No public demo is linked.",
    group: "earlier",
  },
  {
    slug: "domotika",
    name: "Domotika",
    category: "Smart home",
    timeframe: "Jan 2024 — Feb 2024",
    status: "Internship",
    summary:
      "Flutter screens for a smart-home alarm: arm, disarm, night mode, and alarm, wired to the backend APIs.",
    description:
      "Domotika is the smart-home app I worked on as a Flutter intern from January to February 2024. The local project is the alarm interface: a quick panel for arm, disarm, night mode, and alarm, plus rooms, devices, and sign-in. The internship covered those Flutter screens and their connection to the backend APIs. The name on the panel is the account open in that build.",
    contribution:
      "Flutter interface for the alarm panel, navigation, and the screens around it, integrated with the backend APIs.",
    problem:
      "A house alarm is a mode, not a menu. The person at the door needs the current state and the next one in the same glance.",
    role: "Flutter developer intern. January to February 2024.",
    challenge:
      "Arm, disarm, night, and alarm are easy to bury under settings. The panel has to make the active mode obvious.",
    solution:
      "A Flutter quick panel that keeps the four modes on one screen, with the selected mode marked, and the rest of the app — rooms, devices, sign-in — around it.",
    technologies: ["Flutter"],
    features: ["Alarm panel", "Arm and disarm", "Night mode", "Rooms and devices"],
    architecture: ["Flutter client", "Backend APIs for the smart-home data"],
    statusDetail:
      "Internship, January to February 2024. The pictures are the panel armed and the same panel disarmed. No public demo is linked.",
    group: "earlier",
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getNextProject(slug: string) {
  const index = topProjects.findIndex((project) => project.slug === slug)
  if (index < 0) return undefined
  return topProjects[(index + 1) % topProjects.length]
}

export const topProjects = projects.filter((project) => useCaseHasImages(project.slug))

export const selectedProjects = projects.filter((project) => project.group === "selected")
export const earlierProjects = projects.filter((project) => project.group === "earlier")
