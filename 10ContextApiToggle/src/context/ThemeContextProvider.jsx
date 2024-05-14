import { useState, useEffect } from "react"
import ThemeContext from "./ThemeContext"

const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState('light')

    const themeLight = () => {
        setTheme('light')
    }

    const themeDark = () => {
        setTheme('dark')
    }

    useEffect(() => {
        document.querySelector('html').classList.remove('light', 'dark')
        document.querySelector('html').classList.add(theme)
    }, [theme])
    

    return(
        <ThemeContext.Provider value = {{theme, themeLight, themeDark }}>
        {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider