import React, { useContext } from "react";
import { CvContext } from "../../contexts/cvContext";
import { Skill } from "../Skill/Skill";
import "./Skills.scss";

export function Skills() {
	const { skills } = useContext(CvContext);

	return (
		<section className="skills flex">
			<h2 className="text-color">Skills:</h2>
			<div className="flex">
				{skills.map((skill, index) => (
					<Skill key={index} skill={skill} />
				))}
			</div>
		</section>
	);
}
