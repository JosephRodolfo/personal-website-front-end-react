import React from "react";
import HomePage from "../components/HomePage";
import BlogPostPage from "../components/BlogPostPage";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

const AppRouter = () => {




  return (
    <HashRouter>
        <Routes>
         <Route exact path="/" element={<HomePage />} />
         <Route path="/post" element={<BlogPostPage />} />

        </Routes>
    </HashRouter>
  );
};

export default AppRouter;
