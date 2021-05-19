import { CvProvider } from "./contexts/cvContext";
import { Home } from "./pages/Home/Home";
import "./assets/styles/styles.scss";

function App() {
	return (
		<div className="App">
			<CvProvider>
				<Home />
			</CvProvider>
		</div>
	);
}

export default App;
