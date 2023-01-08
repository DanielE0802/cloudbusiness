import {
    createContext,
    useState,
    useMemo
} from "react";
import {
    createTheme
} from "@mui/material/styles";

// color design 

export const tokens = (mode) => ({
    ...(mode === "dark" ? {
        primary: {
            100: "#f5f5f5",
            200: "#e8e8e8",
            300: "#d6d6d6",
            400: "#bfbfbf",
            500: "#9e9e9e",
            600: "#757575",
            700: "#616161",
            800: "#424242",
            900: "#212121",
        },
    } : {
        primary: {
            900: "#f5f5f5",
            800: "#e8e8e8",
            700: "#d6d6d6",
            600: "#bfbfbf",
            500: "#9e9e9e",
            400: "#757575",
            300: "#616161",
            200: "#424242",
            100: "#212121",
        },
    })
})


// MUI theme settings 

export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === "dark" ? {
                primary: {
                    main: colors.primary[500],
                },
                background: {
                    default: "#000",
                }
            } : {
                primary: {
                    main: colors.primary[100],
                },
            })
        },
        typography: {
            fontFamily: ["Rubik, Roboto"].join(","),
            fontSize: 12,

            // Settings for h1, h2, h3, h4, h5, h6

            h1: {
                fontFamily: ["Rubik, Roboto"].join(","),
                fontSize: 30,
                fontWeight: 700,
                lineHeight: 1.2,
            },
        }
    }
}


// Theme context

export const ThemeContext = createContext({
    toggleColorMode: () => {},
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
        }
    }), [])

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme, colorMode];

}