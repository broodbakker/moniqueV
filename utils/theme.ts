import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

declare module "@material-ui/core/styles/createPalette" {
  interface ThemeOptions {
    fontColor: PaletteColor;
    BgColor: string
    textShadow: string
  }

  interface PaletteOptions {
    fontColor: PaletteColorOptions;
    BgColor: string
    textShadow: string
  }

  interface Palette {
    BgColor: string
    textShadow: string
  }
}

declare module "@material-ui/core/styles/createMuiTheme" {
  interface ThemeOptions {
    customVariables: customVariablesInterface;
  }
  interface Theme {
    customVariables: customVariablesInterface;
  }
}

interface customVariablesInterface {
  navbarSmall?: number;
  navbarBig?: number
}

const typography = {
  fontSize: 16,
}
const spacing = 4

const customVariables = {
  navbarSmall: 96,
  navbarBig: 120
}
const palette = {
  primary: { main: "#7986cb" },
  BgColor: "#F6F6F6",
  textShadow: "-1px -1px 0 #1E1E1E,1px -1px 0 #1E1E1E,-1px 1px 0 #1E1E1E,1px 1px 0 #1E1E1E;",
  fontColor: {
    main: "red",
    light: "#fff"
  }
}

export default createMuiTheme({ typography, spacing, palette, customVariables })