import React, { useContext } from "react";
import { ProjectContext } from "../../contexts/projectContext";
import { ProjectCard } from "../ProjectCard/ProjectCard";

export function Projects() {
	const { projects } = useContext(ProjectContext);

	return (
		<section className="flex card" id="projects">
			<h2 className="text-color">Projects:</h2>
			<div className="flex wrap space-around">
				{projects.map((project, index) => (
					<ProjectCard key={index} project={project} />
				))}
			</div>
		</section>
	);
}
