import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Spinner from "./components/spinner/Spinner";
const App = React.lazy(() => import("./App"));
import "./index.css";

import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
