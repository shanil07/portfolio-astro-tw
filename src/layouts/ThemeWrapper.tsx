import type { ReactNode } from "react";
import { useStore } from "@nanostores/react";
import { theme } from "../store/theme";

type Props = {
  children: ReactNode;
};

const ThemeWrapper = ({ children }: Props) => {
  const $theme = useStore(theme);
  return <div className={`${$theme} font-bold`}>{children}</div>;
};

export { ThemeWrapper };
