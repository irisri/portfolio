import React, { useState, createContext } from "react";

import chess from "../assets/img/chess.png";
import mineSweeper from "../assets/img/Mine-sweeper.png";
import collectBalls from "../assets/img/chess.png";
import touchNums from "../assets/img/Touch Nums.png";
import endorphinRush from "../assets/img/Endorphin rush";

export const ProjectContext = createContext();

export const ProjectProvider = (props) => {
	const projectsInfo = [
		{
			name: "Chess",
			link: "https://irisri.github.io/chess/",
			img: { chess },
			description: "",
			technologies: ["JavaScript", "CSS"],
		},
		{
			name: "MineSweeper",
			link: "https://irisri.github.io/mine-sweeper/",
			img: { mineSweeper },
			description: "",
			technologies: ["JavaScript", "CSS"],
		},
		{
			name: "Touch Nums",
			link: "https://irisri.github.io/touch-nums/",
			img: { touchNums },
			description: "",
			technologies: ["JavaScript", "CSS"],
		},
		{
			name: "Collect Balls",
			link: "https://irisri.github.io/ball-board/",
			img: { collectBalls },
			description: "",
			technologies: ["JavaScript", "CSS"],
		},
		{
			name: "APSUS",
			link: "https://irisri.github.io/appsus/#/",
			img: "",
			description: "Three apps in 1!",
			technologies: ["Vue", "JavaScrip", "CSS", "MongoDB", "socket.io"],
		},
		{
			name: "Endorphin rush",
			link: "https://endorphin-rush.herokuapp.com/#/",
			img: { endorphinRush },
			description: "",
			technologies: ["Vue", "JavaScrip", "CSS", "SASS", "Node.Js"],
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

	const [projects, setProjects] = useState(projectsInfo);

	return (
		<ProjectProvider.Provider value={{ projects }}>
			{props.children}
		</ProjectProvider.Provider>
	);
};
