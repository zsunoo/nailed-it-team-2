import "./App.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import useEvent from "./useEvent";

function App() {
	const update = (e: any) => {
		var x = e.clientX || e.touches[0].clientX;
		var y = e.clientY || e.touches[0].clientY;

		document.documentElement.style.setProperty("--cursorX", x + "px");
		document.documentElement.style.setProperty("--cursorY", y + "px");
	};
	useEvent("mousemove", update);
	useEvent("touchmove", update);
	return (
		<div className="app">
			<nav className="app-nav">
				<Link to="/">Home</Link>
				<Link to="objective">Objective</Link>
				<Link to="teams">Teams</Link>
				<Link to="thanks">Thank You</Link>
			</nav>
			<div className="app-content">
				<Outlet />
			</div>
			<footer>
				<p>Credera ♥️ XD</p>
			</footer>
		</div>
	);
}

export default App;
