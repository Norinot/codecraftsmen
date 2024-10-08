import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { ThemeProvider } from "./theme-provider/theme-provider.context.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
