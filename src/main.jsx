import { Provider } from "@/components/ui/provider";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalProvider } from "./context/ContextProvider";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./Authentication/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <GlobalProvider>
      <Provider>
          <App />
        </Provider>
    </GlobalProvider>
    </AuthProvider>
  </StrictMode>
);
