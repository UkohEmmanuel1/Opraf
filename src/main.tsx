import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Import favicon
import favicon from "@/assets/favicon.png";

// Set favicon dynamically
const link =
  document.querySelector("link[rel~='icon']") ||
  document.createElement("link");

link.setAttribute("rel", "icon");
link.setAttribute("type", "image/png");
link.setAttribute("href", favicon);

document.head.appendChild(link);

createRoot(document.getElementById("root")!).render(<App />);