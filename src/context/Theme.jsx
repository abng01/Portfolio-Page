import { createTheme } from "@mui/material"
import { CssBaseline } from '@mui/material'

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#99cadcff'},
        background: { default: '#282727ff', paper: '#1f1e1eff' },
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
        primary: { main: '#84badcff'},
        background: { default: '#eaedf0ff', paper: '#000000ff' },
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
