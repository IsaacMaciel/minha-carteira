import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

import { useTheme } from "./hooks/themes";

import Routes from "./routes";

// import dark from "./styles/themes/dark";

function App() {
    const { theme } = useTheme();
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Routes />
        </ThemeProvider>
    );
}

export default App;
