import React, { useState, createContext } from "react";

export const CvContext = createContext();

export const CvProvider = (props) => {
	const cv = {
		workExperience: [
			{
				company: "Latete Pe",
				employed: "2021 – present",
				role: "Web developer",
				companyDescription:
					"A game app that helps parents and children to communicate better to increase the child’s protection.",
				workDescription: [
					"Building front-end architecture, React with context and hooks, Material Ui.",
					"Node.Js and GrapQL.",
					"Implementing firebase authentication",
					"Research and implement variance technologies (Docker containers, ESLint).",
					"Code review peer.",
				],
				link: "https://www.codaproject.co.il/project/1857/",
			},
			{
				company: "Experitest",
				employed: "2019 – 2020",
				role: "Human Resources Recruiter",
				workDescription: [
					"Responsibility for the recruitment and screening processes of the company.",
					"Sourcing candidates on LinkedIn and social media.",
					"Working in a small startup, attention to detail, organized.",
				],
			},
			{
				company: "Amdocs",
				employed: "2016 – 2017",
				role: "Administrative assistant",
				workDescription: [
					"Day-to-day contact with the management board.",
					"Working in a fast-paced environment with the management support team, organized, thinking ahead.",
					"Answering calls, organizing multiple calendars.",
				],
			},
			{
				company: "8200",
				employed: "2006 – 2008",
				role: "Optic Fiber Administrator",
				workDescription: [
					"Managing an optic fiber network: troubleshooting, monitoring.",
					"Install, configure, and test devices.",
				],
			},
		],
		skills: [
			{ languages: ["HTML", "CSS", "SASS", "JavaScript", "Python"] },
			{ frameworks: ["Vue", "React", "Angular", "Django"] },
			{ database: ["Firebase", "MongoDB", "MySQL"] },
		],
	};

	// { company: "", employed: "", companyDescription: "", workDescription: [], role: "",

	const [workExperience, setWorkExperience] = useState(cv.workExperience);
	const [skills, setSkills] = useState(cv.skills);

	return (
		<CvContext.Provider value={{ workExperience, skills }}>
			{props.children}
		</CvContext.Provider>
	);
};
