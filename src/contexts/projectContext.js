import React, { useState, createContext } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = (props) => {
	const projectsInfo = [
		{
			name: "Chess",
			link: "https://irisri.github.io/chess/",
			img: "https://res.cloudinary.com/des4awkkx/image/upload/v1621780058/portfolio/ruhazwoo6viuaofabngi.png",
			description: "",
			technologies: ["JavaScript", "CSS"],
		},
		{
			name: "MineSweeper",
			link: "https://irisri.github.io/mine-sweeper/",
			img: "https://res.cloudinary.com/des4awkkx/image/upload/v1621780057/portfolio/wpydpp01o281s5mbjhms.png",
			description: "",
			technologies: ["JavaScript", "CSS"],
		},
		{
			name: "Touch Nums",
			link: "https://irisri.github.io/touch-nums/",
			img: "https://res.cloudinary.com/des4awkkx/image/upload/v1621780058/portfolio/qzygal8rbyy7eep2enwc.png",
			description: "",
			technologies: ["JavaScript", "CSS"],
		},
		{
			name: "Collect Balls",
			link: "https://irisri.github.io/ball-board/",
			img: "https://res.cloudinary.com/des4awkkx/image/upload/v1621780057/portfolio/uyigebfvmke8q8fmzigk.png",
			description: "",
			technologies: ["JavaScript", "CSS"],
		},
		{
			name: "APSUS",
			link: "https://irisri.github.io/appsus/#/",
			img: "https://res.cloudinary.com/des4awkkx/image/upload/v1621781157/portfolio/ygrqxxmhrtarle5ervvm.png",
			description: "Three apps in 1!",
			technologies: ["Vue", "JavaScrip", "CSS", "MongoDB", "socket.io"],
		},
		{
			name: "Endorphin rush",
			link: "https://endorphin-rush.herokuapp.com/#/",
			img: "https://res.cloudinary.com/des4awkkx/image/upload/v1621780065/portfolio/mvqjqlud05nbvjsr0lcx.png",
			description: "",
			technologies: ["Vue", "JavaScrip", "CSS", "SASS", "Node.Js"],
		},
		{
			name: "network-leads",
			link: "https://irisri.github.io/network-leads",
			img: "https://res.cloudinary.com/des4awkkx/image/upload/v1621781341/portfolio/ugwrkf4xtghfu1tdvjsq.png",
			description: "",
			technologies: ["React", "JavaScrip", "CSS", "Context", "Hooks"],
		},
	];

	// ['chess', 'Get smarter', 'https://irisri.github.io/chess/', ['Matrixes', 'Game']],
	//         ['book-shop', 'look at all the books!', 'https://irisri.github.io/book-shop/', ['Inventory', 'MVC']],
	//         ['in-picture', 'Cute animals!', 'https://irisri.github.io/in-picture/', ['Q&A', 'Cute']],
	//         ['mine-sweeper', 'This is a mine sweeper game', 'https://irisri.github.io/mine-sweeper/', ['Matrixes', 'Game']],
	//         ['todo', 'I need to enter some tasks!', 'https://irisri.github.io/todo/', ['Array', 'ToDo']],
	//         ['ball board', 'Collect thouse balls!', 'https://irisri.github.io/ball-board/', ['Game', 'Matrixes']],
	//         ['touch-nums', 'What\'s next?!', 'https://irisri.github.io/touch-nums/', ['Game', 'Matrixes']]

	// { name: "", link: "", img: "", description: "", technologies: [] },

	// eslint-disable-next-line no-unused-vars
	const [projects, setProjects] = useState(projectsInfo);

	return (
		<ProjectContext.Provider value={{ projects }}>
			{props.children}
		</ProjectContext.Provider>
	);
};
