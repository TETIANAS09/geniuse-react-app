import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Game from "./components/Game";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<Game />);
