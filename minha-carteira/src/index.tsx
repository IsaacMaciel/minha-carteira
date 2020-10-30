import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "./hooks/themes";
import { AuthProvider } from "./hooks/auth";
import App from "./App";
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <AuthProvider>
                <App />
            </AuthProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
