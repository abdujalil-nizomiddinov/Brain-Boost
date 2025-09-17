import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [toggleBars, setToggleBars] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between px-15 py-5 shadow-md max-[762px]:px-10 max-[375px]:px-4">
        <Link to="/" className="p fb">
          <img src="../../assets/images/logo.svg" alt="Logo" className="p" />
        </Link>
        <ul className="p flex gap-10 max-[825px]:hidden">
          <li className="p">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `p nl oul ${isActive ? "al al-fb" : "fb"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="p">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `p nl oul ${isActive ? "al al-fb" : "fb"}`
              }
            >
              About
            </NavLink>
          </li>
          <li className="p">
            <NavLink
              to="/recipes"
              className={({ isActive }) =>
                `p nl oul ${isActive ? "al al-fb" : "fb"}`
              }
            >
              Recipes
            </NavLink>
          </li>
        </ul>

        <NavLink to="/recipes" className="p max-[825px]:!hidden">
          <button className="p fbb btn w-[167px] h-[52px] max-[825px]:!hidden hover:opacity-95 transition-all duration-200 ease-out active:opacity-85 active:scale-95">
            Browse recipes
          </button>
        </NavLink>

        <button
          onClick={() => {
            setToggleBars(!toggleBars);
            console.log(toggleBars);
          }}
          className="!hidden fbbb p max-[825px]:!flex items-center justify-center w-10 h-10 bg-n300 hover:scale-105 active:scale-95 rounded-[4px]"
        >
          <img
            src="../../assets/images/icon-hamburger-menu.svg"
            alt="img"
            className="w-[18px] p h-4"
          />
        </button>
      </nav>
      <section
        className={`overflow-hidden transition-all duration-500 ease-in-out !hidden max-[825px]:!flex max-[825px]:!flex-col items-center justify-between w-full shadow-lg
              ${
                toggleBars
                  ? "max-h-[500px] h-[200px] py-10 mb-2"
                  : "max-h-0 h-0 py-0 mb-0"
              }
            `}
      >
        <ul className="p flex gap-10">
          <li className="p">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `p nl oul ${isActive ? "al al-fb" : "fb"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="p">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `p nl oul ${isActive ? "al al-fb" : "fb"}`
              }
            >
              About
            </NavLink>
          </li>
          <li className="p">
            <NavLink
              to="/recipes"
              className={({ isActive }) =>
                `p nl oul ${isActive ? "al al-fb" : "fb"}`
              }
            >
              Recipes
            </NavLink>
          </li>
        </ul>

        <Link to="/recipes" className="w-[95%] flex justify-center items-center p">
          <button className="p fbb-2 btn w-[95%] h-[52px] hover:opacity-95 transition-all duration-200 ease-out active:opacity-85 active:scale-95">
            Browse recipes
          </button>
        </Link>
      </section>
    </>
  );
}

export default Navbar;
