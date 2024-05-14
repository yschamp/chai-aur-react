import { createContext } from "react";

const ThemeContext = createContext({
    theme: "light",
    themeLight: () => {},
    themeDark: () => {}
})

export default ThemeContext