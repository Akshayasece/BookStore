import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Shop from "./Shop";
import Details from "./Details";
import TrendingNow from "./TrendingNow";
import PaymentPage from "./PaymentPage";

const container = document.getElementById("root")
const root = createRoot(container)

root.render(
  <Router>
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/SignUp" Component={SignUp} />
      <Route path="/SignIn" Component={SignIn} />
      <Route  path="/" Component={Shop} />
     <Route path="/Details/:id" Component={Details} />
     <Route path="/Shop" Component={Shop} />
      < Route path="/TrendingNow" Component={TrendingNow} />
      <Route path="/PaymentPage/:id" Component={PaymentPage} />
      <Route path="/PaymentPage" Component={PaymentPage} />
    </Routes>
  </Router>
);
