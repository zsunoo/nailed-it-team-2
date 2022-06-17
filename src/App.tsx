import "./App.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import useEvent from "./useEvent";
import { useState } from "react";

function App() {
	const [toggleFlashlight, setToggleFlashlight] = useState(false);

	const update = (e: any) => {
		var x = e.clientX || e.touches[0].clientX;
		var y = e.clientY || e.touches[0].clientY;

		document.documentElement.style.setProperty("--cursorX", x + "px");
		document.documentElement.style.setProperty("--cursorY", y + "px");
	};
	useEvent("mousemove", update);
	useEvent("touchmove", update);

	const handleFlashlight = () => {
		setToggleFlashlight(!toggleFlashlight);
		document.documentElement.style.setProperty("--display", toggleFlashlight ? "none" : "block");
	};

	return (
		<div className="app">
			<nav className="navbar bg-light">
				<div className="container-fluid">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#hamburgerToggle"
						aria-controls="hamburgerToggle"
						aria-expanded="false"
						aria-label="Toggle navigation"
						onClick={handleFlashlight}
					>
						Hamburger
					</button>
					<div className="collapse navbar-collapse" id={"hamburgerToggle"}>
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link to="/">Home</Link>
							</li>
							<li className="nav-item">
								<Link to="objective">Objective</Link>
							</li>
							<li className="nav-item">
								<Link to="teams">Teams</Link>
							</li>
							<li className="nav-item">
								<Link to="thanks">Thank You</Link>
							</li>
						</ul>
					</div>
				</div>
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
