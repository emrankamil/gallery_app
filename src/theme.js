import { createTheme, responsiveFontSizes } from "@mui/material";

export const tokens = (mode) => ({
  ...(mode === "light"
    ? {
        gray: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#fcfbfa",
          200: "#f8f7f5",
          300: "#f5f3f1",
          400: "#f1efec",
          500: "#eeebe7",
          600: "#bebcb9",
          700: "#8f8d8b",
          800: "#5f5e5c",
          900: "#302f2e",
        },
        secondary: {
          100: "#ffeebc",
          200: "#ffe59c",
          300: "#ffd96e",
          400: "#ffd252",
          500: "#ffc727",
          600: "#e8b523",
          700: "#b58d1c",
          800: "#8c6d15",
          900: "#6b5410",
        },
        error: {
          100: "#f8c3b6",
          200: "#f4a692",
          300: "#ef7d61",
          400: "#ec6442",
          500: "#e73d13",
          600: "#d23811",
          700: "#a42b0d",
          800: "#7f220a",
          900: "#611a08",
        },
      }
    : {
        gray: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        primary: {
          100: "#243838",
          200: "#2f4a4a",
          300: "#3c5f5f",
          400: "#4d7a7a",
          500: "#558686",
          600: "#779e9e",
          700: "#8daeae",
          800: "#b1c7c7",
          900: "#cad9d9",
        },
        secondary: {
          100: "#6b5410",
          200: "#8c6d15",
          300: "#b58d1c",
          400: "#e8b523",
          500: "#ffc727",
          600: "#ffd252",
          700: "#ffd96e",
          800: "#ffe59c",
          900: "#ffeebc",
        },
        error: {
          100: "#611a08",
          200: "#7f220a",
          300: "#a42b0d",
          400: "#d23811",
          500: "#e73d13",
          600: "#ec6442",
          700: "#ef7d61",
          800: "#f4a692",
          900: "#f8c3b6",
        },
        green: {
          100: "#115c1a",
          200: "#177822",
          300: "#1d9b2c",
          400: "#25c738",
          500: "#29db3e",
          600: "#54e265",
          700: "#70e77e",
          800: "#9deea6",
          900: "#bdf4c3",
        },
      }),
});

//material ui theme settings

export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      primary: {
        main: "#EDEAE3",
      },
      secondary: {
        main: colors.secondary[500],
      },
      neutral: {
        dark: colors.gray[700],
        main: colors.gray[500],
        light: colors.gray[100],
      },
      background: {
        default: colors.primary[500],
      },
    },
    typography: {
      fontFamily: "Poppins, sans-serif",
      fontSize: 12,
      h1: {
        fontFamily: "Poppins, sans-serif",
        fontSize: 30,
      },
      h2: {
        fontFamily: "Poppins, sans-serif",
        fontSize: 24,
      },
      h3: {
        fontFamily: "Poppins, sans-serif",
        fontSize: 20,
      },
      h4: {
        fontFamily: "Poppins, sans-serif",
        fontSize: 14,
      },
    },
  };
};

export const theme = responsiveFontSizes(createTheme(themeSettings("light")));


// //context for color mode
// export const ColorModeContext = createContext({
//   toggleColorMode: () => {},
// });

// export const useMode = () => {
//   const [mode, setMode] = useState("dark");

//   const colorMode = useMemo(
//     () => ({
//       toggleColorMode: () =>
//         setMode((prev) => (prev === "light" ? "dark" : "light")),
//     }),
//     []
//   );

//   const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
//   return [theme, colorMode];
// };
