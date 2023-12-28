import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {Outlet} from "react-router-dom"
//this is used for structuring the layout of the application
//The header and footer will remain same but only the outlet will change

function App() {
  return (
    <>
    <Header/>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
