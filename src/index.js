import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./scss/styles.scss";

import { App } from "./App";

import { Home, Error } from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);
