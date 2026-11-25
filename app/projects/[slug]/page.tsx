import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CaseStudy } from "@/components/projects/case-study"
import { getNextProject, getProject, topProjects } from "@/data/projects"
import { useCaseHasImages } from "@/data/use-cases"
import { getCanonicalUrl } from "@/lib/site"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return topProjects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project || !useCaseHasImages(slug)) return { title: "Project" }
  const canonical = getCanonicalUrl(`/projects/${project.slug}`)
  const description = `${project.name}: ${project.summary}`
  return {
    title: project.name,
    description,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title: `${project.name} — Mohamed Aziz Sliti`,
      description,
      url: canonical,
    },
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project || !useCaseHasImages(slug)) notFound()

  return (
    <main id="main">
      <CaseStudy project={project} next={getNextProject(project.slug)} />
    </main>
  )
}
