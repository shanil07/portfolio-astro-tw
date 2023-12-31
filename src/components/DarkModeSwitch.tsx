import { useStore } from "@nanostores/react";
import { theme } from "../store/theme";
import { MoonIcon } from "../assets/icons/MoonIcon";
import { SunIcon } from "../assets/icons/SunIcon";
import { useEffect } from "react";

const DarkModeSwitch = () => {
  const $theme = useStore(theme);
  const handleDarkModeClick = () => {
    const newTheme = $theme === "dark" ? "light" : "dark";
    theme.set(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    // Local storage preference overrides system preference
    if (localStorage.getItem("theme") === "dark") {
      theme.set("dark");
      return;
    }
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      theme.set("dark");
    }
  }, []);

  return (
    <label htmlFor="dark-mode">
      <a className="cursor-pointer">
        {$theme === "dark" ? (
          <SunIcon className="h-[25px] w-[25px] text-default" />
        ) : (
          <MoonIcon className="h-[25px] w-[25px] text-default" />
        )}
      </a>
      <input
        id="dark-mode"
        name="dark-mode"
        type="checkbox"
        hidden
        checked={$theme === "dark"}
        onChange={() => handleDarkModeClick()}
      />
    </label>
  );
};

export { DarkModeSwitch };
