import React from "react";
import { BrowserRouter } from "react-router-dom";
import topics from "./data/topics";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Header links={topics} />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
