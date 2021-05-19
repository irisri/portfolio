import React, { useContext } from "react";
import { CvContext } from "../../contexts/cvContext";
import { Skill } from "../Skill/Skill";
import { SocialIcon } from "react-social-icons";
import "./Skills.scss";

export function Skills() {
	const { skills } = useContext(CvContext);

	return (
		<section className="skills">
			<div className="social-icons">
				<SocialIcon
					class="social-icon"
					url="https://www.linkedin.com/in/iris-rifold/"></SocialIcon>
				<SocialIcon url="https://github.com/irisri"></SocialIcon>
			</div>
			<div className="flex">
				{skills.map((skill, index) => (
					<Skill key={index} skill={skill} />
				))}
			</div>
		</section>
	);
}
