import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Expertise from "./Pages/Expertise";
import Projects from "./Pages/Projects";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import BlogMain from "./Pages/BlogMain";
import Layout from "./Pages/Admin/Layout";
import Dashboard from "./Pages/Admin/Dashboard";
import AddBlog from "./Pages/Admin/AddBlog";
import Comment from "./Pages/Admin/Comment";
import ListBlog from "./Pages/Admin/ListBlog";
import Login from "./components/Admin/Login";
import "quill/dist/quill.snow.css";
import { Toaster } from "react-hot-toast";
import { useAppContext } from "./context/AppContext";
import ProjectLayout from "./Pages/Project Admin/ProjectLayout";
import AddProject from "./Pages/Project Admin/AddProject";
import ListProject from "./Pages/Project Admin/ListProject";
import ScrollToTop from "./components/ScrollToTop";
import ClickEffect from "./components/ClickEffect";

const App = () => {
  const { token } = useAppContext();
  return (
    <>
      <div>
        <Toaster />
        <ScrollToTop />
        <ClickEffect />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogmain" element={<BlogMain />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={token ? <Layout /> : <Login />}>
            <Route index element={<Dashboard />} />
            <Route path="addBlog" element={<AddBlog />} />
            <Route path="listBlog" element={<ListBlog />} />
            <Route path="comments" element={<Comment />} />
          </Route>

          <Route
            path="/project-admin"
            element={token ? <ProjectLayout /> : <Login />}
          >
            <Route index element={<AddProject />} />
            <Route path="listProject" element={<ListProject />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
