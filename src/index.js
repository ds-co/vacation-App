// index.js or your main rendering file
import React from "react";
import { createRoot } from "react-dom/client"; // Update the import statement
import Home from "./Home";

const root = document.getElementById("root");
const rootInstance = createRoot(root);
rootInstance.render(<Home />);