import { AppProvider } from "@shopify/polaris";
import i18n from "@shopify/polaris/locales/en.json";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

async function enableMocking() {
  // if (process.env.NODE_ENV !== "development") {
  //   return;
  // }
  const { worker } = await import("./mocks/browser");
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <AppProvider i18n={i18n}>
        <App />
      </AppProvider>
    </React.StrictMode>,
  );
});
