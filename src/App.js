import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import News from "./pages/News";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

import Navigation from "./components/Navigation";
import Logo from "./components/Logo";

const App = () => {
  return (
    <Router>
      <Logo />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/News" element={<News />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
