import { CvProvider } from "./contexts/cvContext";
import { ProjectProvider } from "./contexts/projectContext";
import { Home } from "./pages/Home/Home";
import "./assets/styles/styles.scss";

function App() {
	return (
		<div className="App">
			<CvProvider>
				<ProjectProvider>
					<Home />
				</ProjectProvider>
			</CvProvider>
		</div>
	);
}

export default App;
