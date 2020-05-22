import React from "react";
import "./App.css";
import { ScreenClassProvider, Container, Row, Col } from "react-grid-system";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

function App() {
  return (
    <ScreenClassProvider className="App">
      <Header />
      <MainContent />
      <Footer />
    </ScreenClassProvider>
  );
}

export default App;
