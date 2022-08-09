import React from "react";
import topics from "./data/topics";

import Header from "./components/header";
import Footer from "./components/footer";
import Content from "./components/content";

const App = () => {
  return (
    <>
      <Header links={topics} />
      <Content topics={topics} />
      <Footer />
    </>
  );
};

export default App;
