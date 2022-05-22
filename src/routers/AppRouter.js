import React from "react";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter = () => {




  return (
    <BrowserRouter>
        <Header/>
        <Routes>
         <Route path="/" element={<HomePage />} />
        </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
