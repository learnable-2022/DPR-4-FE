import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ServiceProvider } from "./ServiceProvider";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./stateProvider/stateprovider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ServiceProvider initialState={initialState} reducer={reducer}>
      <StateProvider>
        <App />
      </StateProvider>
    </ServiceProvider>
  </React.StrictMode>
);
