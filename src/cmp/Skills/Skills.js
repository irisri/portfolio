import React, { useContext } from "react";
import { CvContext } from "../../contexts/cvContext";
import { Skill } from "../Skill/Skill";
import { SocialIcon } from "react-social-icons";
import "./Skills.scss";

export function Skills() {
	const { skills } = useContext(CvContext);

	return (
		<section className="skills flex">
			{/* <div className="social-icons">
				<SocialIcon
					bgColor="black"
					url="https://www.linkedin.com/in/iris-rifold/"></SocialIcon>
				<SocialIcon
					bgColor="black"
					url="https://github.com/irisri"></SocialIcon>
			</div> */}

			<h2 className="text-color">Skills:</h2>
			<div className="flex">
				{skills.map((skill, index) => (
					<Skill key={index} skill={skill} />
				))}
			</div>
		</section>
	);
}
