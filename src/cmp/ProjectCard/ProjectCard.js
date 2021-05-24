import React from "react";
import "./ProjectCard.scss";

export function ProjectCard({ project }) {
	const { name, link, img, description, technologies } = project;
	return (
		<div className="project-card">
			<div className="img">
				<img src={img} alt={name} />
			</div>
			<div>
				<h3>
					<a href={link}>{name}</a>
				</h3>
				{description ? (
					<p>
						<strong>Description:</strong> {description}
					</p>
				) : null}
				<p>Technologies:</p>
				<div className="flex wrap">
					{technologies.map((technology, index) => (
						<p className="technology" key={index}>
							{technology}
						</p>
					))}
				</div>
			</div>
		</div>
	);
}
