import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";



// Set favicon dynamically
const link =
  document.querySelector("link[rel~='icon']") ||
  document.createElement("link");

link.setAttribute("rel", "icon");
link.setAttribute("type", "image/png");


document.head.appendChild(link);

createRoot(document.getElementById("root")!).render(<App />);