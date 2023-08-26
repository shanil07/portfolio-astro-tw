import { useStore } from "@nanostores/react";
import { theme } from "../store/theme";
import { MoonIcon } from "../assets/logos/MoonIcon";
import { SunIcon } from "../assets/logos/SunIcon";

const DarkModeSwitch = () => {
  const $theme = useStore(theme);
  const handleDarkModeClick = () => {
    theme.set($theme === "dark" ? "light" : "dark");
  };

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
