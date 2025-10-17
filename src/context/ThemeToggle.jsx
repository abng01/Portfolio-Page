import { createContext, useContext, useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./Theme";

const ThemeToggleContext = createContext()

export function useThemeToggle() {
    return useContext(ThemeToggleContext)
}

export function ThemeToggleProvider({ children }) {
    const [darkMode, setDarkMode] = useState(true)
    const toggleTheme = () => setDarkMode(!darkMode)

    const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode])

    return (
        <ThemeToggleContext.Provider value={{ darkMode, toggleTheme }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeToggleContext.Provider>
    )
}