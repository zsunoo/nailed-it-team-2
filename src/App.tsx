import "./App.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Hamburger from "./hamburger";
import useEvent from "./useEvent";
import { useState } from "react";

function App() {
	const [toggleFlashlight, setToggleFlashlight] = useState(false);
	const [bounds, setBounds] = useState({
		x: document.documentElement.scrollWidth,
		y: document.documentElement.scrollHeight,
	});
	const [isEmpty, setIsEmtpy] = useState(false);

	const updateBounds = (e: any) => {
		let y = document.documentElement.scrollHeight;
		let x = document.documentElement.scrollWidth;
		setBounds({ x, y });
		console.log(bounds);
	};
	useEvent("resize", updateBounds);

	const updateCursor = (e: any) => {
		var x = e.clientX || e.touches[0].clientX;
		var y = e.clientY || e.touches[0].clientY;

		document.documentElement.style.setProperty("--cursorX", x + "px");
		document.documentElement.style.setProperty("--cursorY", y + "px");
	};
	useEvent("mousemove", updateCursor);
	useEvent("touchmove", updateCursor);

	const handleFlashlight = () => {
		setToggleFlashlight(!toggleFlashlight);
		setIsEmtpy(!isEmpty);
		document.documentElement.style.setProperty("--display", toggleFlashlight ? "none" : "block");
		document.documentElement.style.setProperty("--cursor", toggleFlashlight ? "initial" : "none");
	};

	return (
		<div className="app">
			<nav id="nav-app" className="navbar bg-light">
				<div className="container">
					<button
						className={`navbar-toggler ${isEmpty ? "empty" : ""}`}
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#hamburgerToggle"
						aria-controls="hamburgerToggle"
						aria-expanded="false"
						aria-label="Toggle navigation"
						onClick={handleFlashlight}
					>
						<Hamburger />
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
