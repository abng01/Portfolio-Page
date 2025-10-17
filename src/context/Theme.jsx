import { createTheme } from "@mui/material"

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#99cadcff'},
        background: { default: '#ffffffff', paper: '#242222ff' },
    },
    components: {
        MuiIconButton: {
            defaultProps: {
                color: 'primary',
                size: 'large'
            },
            styleOverrides: {
                root: {
                    "&:focus": { outline: "none" },
                    "&:focus-visible": { outline: "none" }
                }
            }
        }
    }
})

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: { main: '#d4dee1ff'},
        background: { default: '#ffffffff', paper: '#56858fff' },
    },
    components: {
        MuiIconButton: {
            defaultProps: {
                color: 'primary',
                size: 'large'
            },
            styleOverrides: {
                root: {
                    "&:focus": { outline: "none" },
                    "&:focus-visible": { outline: "none" }
                }
            }
        }
    }
})
