import React from 'react';
import CustomNavbar from '../components/CustomNavbar';  // Import your Navbar component
import BlogOverview from '../components/BlogOverview';  // Import the BlogOverview component
import Footer from '../components/Footer';  // Import your Footer component

const BlogView = () => {
  return (
    <div>
      <CustomNavbar />
      <BlogOverview />  {/* Add the BlogOverview component */}
      <Footer />  {/* Add your Footer component */} 
    </div>
  );
};

export default BlogView;
