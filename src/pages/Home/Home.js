import React from "react";
import { Header } from "../../cmp/Header/Header";
import { Skills } from "../../cmp/Skills/Skills";
import { Experience } from "../../cmp/Experience/Experience";
import { Projects } from "../../cmp/Projects/Projects";
import "./Home.scss";

export function Home() {
	return (
		<>
			<Header />
			<main>
				<Skills />
				<Experience />
				<Projects />
			</main>
		</>
	);
}
