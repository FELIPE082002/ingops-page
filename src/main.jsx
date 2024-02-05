import React from "react";
import ReactDOM from "react-dom/client";
import { PrimeReactProvider } from 'primereact/api';
import "./index.css";
import {
  RouterProvider,
} from "react-router-dom";
import routes from "./router"

import { ThemeProvider } from "@material-tailwind/react";

const router = routes

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </PrimeReactProvider>
  </React.StrictMode>
);