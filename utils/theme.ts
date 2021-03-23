import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    fontColor: PaletteColor;
  }

  interface PaletteOptions {
    fontColor: PaletteColorOptions;
  }
}

export default createMuiTheme({
  typography: {
    fontSize: 16,
  },
  spacing: 4,
  palette: {
    primary: { main: "#7986cb" },
    fontColor: {
      main: "red",
      light: "#fff"
    }
  }
});