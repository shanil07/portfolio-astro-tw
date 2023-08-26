import { atom } from "nanostores";

type ThemeOptions = "dark" | "light";


export const theme = atom<ThemeOptions>('light')