import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/theme.css";
import Blog from "./pages/Blog";
import Teachers from "./pages/Teachers";
import Gallery from "./pages/Gallery";
import SchoolInfo from "./pages/SchoolInfo";
import Contact from "./pages/Contact";
import BlogDetail from "./pages/BlogDetail";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Admin from "./pages/Admin";
import GalleryUpload from "./pages/GalleryUpload.js";
import ClassOverview from "./pages/ClassOverview.js";
import AdminClasses from "./pages/AdminClasses.js";
import Welcome from "./pages/Welcome.js";
import BlogView from "./pages/BlogView.js";
import Impressum from "./pages/Impressum.js";
import Privacy from "./pages/Privacy.js";
import UserCalendar from "./pages/UserCalendar.js";
import AdminCalendar from "./pages/AdminCalendar.js";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/schoolinfo" element={<SchoolInfo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<BlogView />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/create-blog" element={<Blog />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/upload-gallery" element={<GalleryUpload />} />
        <Route path="/classes" element={<ClassOverview />} />
        <Route path="/admin/classes" element={<AdminClasses />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/calendar" element={<UserCalendar />} />
        <Route path="/admin-calendar" element={<AdminCalendar />} />
      </Routes>
    </Router>
  );
}

export default App;
