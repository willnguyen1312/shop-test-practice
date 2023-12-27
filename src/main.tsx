import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import i18n from "@shopify/polaris/locales/en.json";
import React from "react";
import ReactDOM from "react-dom/client";

import { AppThree } from "./App.tsx";
import { worker } from "./mocks/browser";

worker.start().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <AppProvider i18n={i18n}>
        <AppThree />
      </AppProvider>
    </React.StrictMode>,
  );
});
