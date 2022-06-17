import "./App.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Hamburger from "./hamburger";
import TopBun from "./top-bun";
import BottomBun from "./bottom-bun";
import Cheese from "./cheese";
import Patty from "./patty";
import Lettuce from "./lettuce";
import useEvent from "./useEvent";
import { useState, useEffect } from "react";

function App() {
	const [toggleFlashlight, setToggleFlashlight] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);

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
    document.documentElement.style.setProperty(
      "--display",
      toggleFlashlight ? "none" : "block"
    );
    document.documentElement.style.setProperty(
      "--cursor",
      toggleFlashlight ? "initial" : "none"
    );

    const invert= {
      topBun: true,
      cheese: true,
      patty: true,
      lettuce: true,
      bottomBun:true 
    }
    setBurgerBuild(invert);
    setOverlayActive(true);
  };

	const initialState = {
		topBun: false,
		cheese: false,
		patty: false,
		lettuce: false,
		bottomBun: false,
	};

	const [burgerBuild, setBurgerBuild] = useState({
		...initialState,
	});

	const handleTopBunClick = () => setBurgerBuild((b) => ({ ...b, topBun: false }));
	const handleCheeseClick = () => setBurgerBuild((b) => ({ ...b, cheese: false }));
	const handlePattyClick = () => setBurgerBuild((b) => ({ ...b, patty: false }));
	const handleLettuceClick = () => setBurgerBuild((b) => ({ ...b, lettuce: false }));
	const handleBottomBunClick = () => setBurgerBuild((b) => ({ ...b, bottomBun: false }));

  useEffect(() => {
    if(Object.values(burgerBuild).every(item => item)) {
      console.log('complete!');
      setToggleFlashlight(false);
    }
  }, [burgerBuild, overlayActive])

  return (
    <div className="app">
      <nav id="nav-app" className="navbar bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleFlashlight}
          >
            <Hamburger {...burgerBuild}/>
          </button>
          <div className={`nav-list ${showNav ? 'active':''}`} id="hamburgerToggle">
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
      <div className={`overlay ${overlayActive ? 'active':''}`}>
        <button className={`find-me top-bun ${burgerBuild.topBun ? '':'hide'}`} onClick={handleTopBunClick}>
          <TopBun />
        </button>
        <button className={`find-me patty ${burgerBuild.patty ? '': 'hide'}`} onClick={handlePattyClick}>
          <Patty />
        </button>
        <button className={`find-me cheese ${burgerBuild.cheese ? '': 'hide'}`} onClick={handleCheeseClick}>
          <Cheese />
        </button>
        <button className={`find-me lettuce ${burgerBuild.lettuce ? '': 'hide'}`} onClick={handleLettuceClick}>
          <Lettuce />
        </button>
        <button className={`find-me bottom-bun ${burgerBuild.bottomBun ? '': 'hide'}`} onClick={handleBottomBunClick}>
          <BottomBun />
        </button>
      </div>
    </div>
  );
}

export default App;
