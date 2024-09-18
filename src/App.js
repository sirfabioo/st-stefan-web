import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/theme.css";
import Blog from "./pages/Blog";
import Teachers from "./pages/Teachers";
import Gallery from "./pages/Gallery";
import SchoolInfo from "./pages/SchoolInfo";
import Contact from "./pages/Contact";
import BlogOverview from "./pages/BlogOverview";
import BlogDetail from "./pages/BlogDetail";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Admin from "./pages/Admin";
import GalleryUpload from "./pages/GalleryUpload.js";
import ClassOverview from "./pages/ClassOverview.js";
import AdminClasses from "./pages/AdminClasses.js";
import Welcome from "./pages/Welcome.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/school-info" element={<SchoolInfo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<BlogOverview />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/create-blog" element={<Blog />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/upload-gallery" element={<GalleryUpload />} />
        <Route path="/classes" element={<ClassOverview />} />
        <Route path="/admin/classes" element={<AdminClasses />} />
      </Routes>
    </Router>
  );
}

export default App;
