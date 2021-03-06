import React from "react";
import { SocialIcon } from "react-social-icons";
import "./Header.scss";

export function Header() {
	return (
		<section className="intro">
			<div className="color-intro">
				<header>
					<h1>Iris Rifold - web developer</h1>
					<h3>I hope you'll enjoy my projects!</h3>
					<p>
						After completing a full-stack programming bootcamp I’m looking
						forward to start my new journey as a developer. I’m looking for a
						company that I can learn and grow and expand my horizons. I'm super
						enthusiastic about developing and learning to become the
						professional developer I know I can be!
					</p>
					<div className="social-icon">
						<SocialIcon
							className="icon"
							bgColor="black"
							target="_blank"
							url="https://www.linkedin.com/in/iris-rifold/"
						/>
						<SocialIcon
							className="icon"
							bgColor="black"
							target="_blank"
							url="https://github.com/irisri"
						/>
						<SocialIcon
							className="icon"
							bgColor="black"
							target="_blank"
							url="mailto:irisrifold@gmail.com"
						/>
					</div>
				</header>
			</div>
		</section>
	);
}
