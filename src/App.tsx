import "./App.css";
import { Outlet } from "react-router-dom";
import Hamburger from "./hamburger";
import TopBun from "./top-bun";
import BottomBun from "./bottom-bun";
import Cheese from "./cheese";
import Patty from "./patty";
import Lettuce from "./lettuce";
import useEvent from "./useEvent";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

  const initialState = {
    topBun: false,
    cheese: false,
    patty: false,
    lettuce: false,
    bottomBun: false,
  };

  const invert = {
    topBun: true,
    cheese: true,
    patty: true,
    lettuce: true,
    bottomBun: true,
  };

  const handleFlashlight = () => {
    setToggleFlashlight(true);
    setBurgerBuild(invert);
    setOverlayActive(true);
  };

  const [burgerBuild, setBurgerBuild] = useState(initialState);

  const handleTopBunClick = () =>
    setBurgerBuild((b) => ({ ...b, topBun: false }));
  const handleCheeseClick = () =>
    setBurgerBuild((b) => ({ ...b, cheese: false }));
  const handlePattyClick = () =>
    setBurgerBuild((b) => ({ ...b, patty: false }));
  const handleLettuceClick = () =>
    setBurgerBuild((b) => ({ ...b, lettuce: false }));
  const handleBottomBunClick = () =>
    setBurgerBuild((b) => ({ ...b, bottomBun: false }));

  // flashlight listener
  useEffect(() => {
    if (toggleFlashlight) {
      document.documentElement.style.setProperty("--display", "block");
      document.documentElement.style.setProperty("--cursor", "none");
    } else {
      document.documentElement.style.setProperty("--display", "none");
      document.documentElement.style.setProperty("--cursor", "initial");
    }
  }, [toggleFlashlight]);

  // listener to when all burger items found
  useEffect(() => {
    if (Object.values(burgerBuild).every((item) => !item) && toggleFlashlight) {
      setToggleFlashlight(false);
      setOverlayActive(false);
      setShowNav(true);
    }
  }, [toggleFlashlight, burgerBuild]);

  const navigate = useNavigate();

  const handleRouteChange = (to: string) => {
    setBurgerBuild(initialState);
    setShowNav(false);
    setOverlayActive(false);
    navigate(to, { replace: true });
  };

  return (
    <div className="app">
      <nav id="nav-app" className="navbar bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleFlashlight}
          >
            <Hamburger {...burgerBuild} />
          </button>
          <div
            className={`nav-list ${showNav ? "active" : ""}`}
            id="hamburgerToggle"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <span onClick={() => handleRouteChange("/")}>Home</span>
              </li>
              <li className="nav-item">
                <span onClick={() => handleRouteChange("/objective")}>
                  Objective
                </span>
              </li>
              <li className="nav-item">
                <span onClick={() => handleRouteChange("/teams")}>Teams</span>
              </li>
              <li className="nav-item">
                <span onClick={() => handleRouteChange("/thanks")}>
                  Thank You
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="app-content">
        <Outlet />
      </div>
      <div className={`overlay ${overlayActive ? "active" : ""}`}>
        <button
          className={`find-me top-bun ${burgerBuild.topBun ? "" : "hide"}`}
          onClick={handleTopBunClick}
        >
          <TopBun />
        </button>
        <button
          className={`find-me patty ${burgerBuild.patty ? "" : "hide"}`}
          onClick={handlePattyClick}
        >
          <Patty />
        </button>
        <button
          className={`find-me cheese ${burgerBuild.cheese ? "" : "hide"}`}
          onClick={handleCheeseClick}
        >
          <Cheese />
        </button>
        <button
          className={`find-me lettuce ${burgerBuild.lettuce ? "" : "hide"}`}
          onClick={handleLettuceClick}
        >
          <Lettuce />
        </button>
        <button
          className={`find-me bottom-bun ${
            burgerBuild.bottomBun ? "" : "hide"
          }`}
          onClick={handleBottomBunClick}
        >
          <BottomBun />
        </button>
      </div>
    </div>
  );
}

export default App;
