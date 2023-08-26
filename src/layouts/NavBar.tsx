import { ChangeEvent, MouseEvent, useState } from "react";
import { HamburgerMenu } from "../components/HamburgerMenu";
import { useStore } from "@nanostores/react";
import { theme } from "../store/theme";
import { DarkModeSwitch } from "../components/DarkModeSwitch";

const NavBar = ({}) => {
  const [navOpen, setNavOpen] = useState(false);
  const $theme = useStore(theme);

  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };

  const scrollToSection = (
    e: MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", `#${sectionId}`);
  };

  return (
    <div className={`${navOpen ? "bg-secondary" : "bg-default"}`}>
      {/* Desktop nav bar  */}
      <nav className="hidden md:flex w-full">
        <ul className="flex w-full">
          <li>
            <a
              className="focus:text-primary font-heading p-4 ml-2 block hover:text-primary transition-colors cursor-pointer"
              href="#main"
              onClick={(e) => scrollToSection(e, "main")}
            >
              Shanil
            </a>
          </li>

          {[
            ["About", "about"],
            ["Technologies", "tech"],
            ["Projects", "projects"],
          ].map(([title, url], index) => (
            <li key={url} className={`${index === 0 ? "ml-auto" : ""}`}>
              <a
                className="focus:text-primary focus:font-bold p-4 block hover:text-primary hover:font-bold transition-colors cursor-pointer"
                href={`#${url}`}
                onClick={(e) => scrollToSection(e, url)}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
        <div className="p-4">
          <DarkModeSwitch />
        </div>
      </nav>
      {/* Mobile nav bar */}
      <div className={`flex md:hidden justify-between p-4 z-10`}>
        <div className="font-heading bold">
          <a onClick={(e) => scrollToSection(e, "main")}>Shanil De Silva</a>
        </div>
        <div className="flex gap-5">
          <DarkModeSwitch />
          <label
            htmlFor="nav"
            id="hamburger-menu"
            className="group"
            onClick={toggleNav}
          >
            <button>
              <HamburgerMenu />
            </button>
          </label>
        </div>
        <nav
          className={`absolute top-0 left-0 h-0 flex bg-secondary w-full group-checked:h-screen transition-[height] duration-300 justify-center items-center -z-10 overflow-hidden ${
            navOpen ? "h-screen" : "h-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-y-6">
            <li onClick={toggleNav}>
              <a className="p-4 text-4xl bold hover:brightness-90" href="#main">
                Shanil De Silva
              </a>
            </li>
            <li onClick={toggleNav}>
              <a
                className="p-4 text-4xl bold hover:brightness-90"
                href="#about"
              >
                About
              </a>
            </li>
            <li onClick={toggleNav}>
              <a className="p-4 text-4xl bold hover:brightness-90" href="#tech">
                Technologies
              </a>
            </li>
            <li onClick={toggleNav}>
              <a
                className="p-4 text-4xl bold hover:brightness-90"
                href="#projects"
              >
                Projects
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export { NavBar };
