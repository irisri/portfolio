import React from "react";
import "./Skill.scss";

export function Skill(props) {
	const { skill } = props;
	const header = Object.keys(skill)[0];

	return (
		<div className="card-skill">
			<p>
				<strong className="text-color">{header}</strong>
			</p>
			{skill[header].map((info, index) => (
				<li key={index}>{info}</li>
			))}
		</div>
	);
}
