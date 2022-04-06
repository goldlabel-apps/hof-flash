import * as React from "react";
// @ts-ignore
import * as shared from "@listingslab/shared";
// @ts-ignore
import { createTheme, ThemeProvider, Box } from "@mui/material";
// @ts-ignore
import { Provider } from "react-redux";
import { Stage } from "./";

export default function Flash() {
  const { getDesignTokens } = shared;
  const darkLight = "light";
  const theme = createTheme(getDesignTokens(darkLight));

  return (
    <Provider store={shared.store}>
      <ThemeProvider theme={theme}>
        <Stage />
      </ThemeProvider>
    </Provider>
  );
}
