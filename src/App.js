import React from "react";
import { BrowserRouter } from "react-router-dom";
import topics from "./data/topics";

import Header from "./components/header";
import Footer from "./components/footer";
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
