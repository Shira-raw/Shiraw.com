import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectDetails from "@/components/ProjectDetails";
import { use } from "react";

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id.toString(),
    }));
}

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const projectId = parseInt(id);
    const project = projects.find(p => p.id === projectId);

    if (!project) {
        notFound();
    }

    return <ProjectDetails project={project} />;
}
