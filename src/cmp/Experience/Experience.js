import React, { useContext } from "react";
import { CvContext } from "../../contexts/cvContext";
import { WorkExperienceCmp } from "../WorkExperience/WorkExperienceCmp";
import "./Experience.scss";
import pdf from "../../assets/documents/CV.pdf";

export function Experience() {
	const { workExperience } = useContext(CvContext);

	return (
		<section className="flex card experience">
			<h2 className="text-color">Experience:</h2>
			<div>
				{workExperience.map((position, index) => (
					<WorkExperienceCmp key={index} position={position} />
				))}
				<a href={pdf} rel="noreferrer" target="_blank">
					<strong>Check out my CV</strong>
				</a>
			</div>
		</section>
	);
}
