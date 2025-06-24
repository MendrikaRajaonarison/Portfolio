import { GetServerSideProps } from "next";
import { Project } from "@prisma/client";

type Props = {
    projects: Project[];
}

export default function ProjectsPage({ projects }: Props) {
    return (
        <div className="container">
            <h1 className="my-4">Mes Projets</h1>
            <div className="row">
                {projects.map((project) => (
                    <div key={project.id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img src={project.imageUrl} className="card-img-top" alt={project.title} style={{ objectFit: 'cover', height: '200px'}}/>
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                            </div>
                            <div className="card-footer">
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-100">
                                    Voir sur GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch("http://localhost:3000/api/projects");
    const projects: Project[] = await res.json();

    return {
        props: { projects }
    };
};