import React from "react";
import "./WorkExperienceCmp.scss";

export function WorkExperienceCmp(props) {
	const { employed, company, role, link, companyDescription, workDescription } =
		props.position;

	return (
		<div className="experience-info">
			<div className="flex space-between">
				<p>
					<strong className="text-color">{role}, </strong>
					{company}
				</p>
				<p>{employed}</p>
			</div>
			{companyDescription && <p>{companyDescription}</p>}
			<ul>
				{workDescription.map((description, index) => (
					<li key={index}>{description}</li>
				))}
			</ul>
			{link && (
				<a href={link}>
					<strong>Read More!</strong>
				</a>
			)}
		</div>
	);
}
