import React from 'react';
import CustomNavbar from '../components/CustomNavbar';  // Import your Navbar component
import BlogOverview from '../components/BlogOverview';  // Import the BlogOverview component

const BlogView = () => {
  return (
    <div>
      <CustomNavbar />
      <BlogOverview />  {/* Add the BlogOverview component */}
    </div>
  );
};

export default BlogView;
