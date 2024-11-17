import React from 'react';
import HeroSection from '../components/HeroSection';
import SchoolValues from '../components/SchoolValues';
import AcademicOverview from '../components/AcademicOverview';
import TeacherSpotlight from '../components/TeacherSpotlight';
import CTASection from '../components/CTASection';
import CustomNavbar from '../components/CustomNavbar';
import SchoolHistory from '../components/SchoolHistory';
import Footer from '../components/Footer';
import '../styles/SchoolInfo.css';

const SchoolInfo = () => {
  return (
    <div>
        <CustomNavbar />
        <HeroSection />
        <SchoolHistory />
        <SchoolValues />
        <AcademicOverview />
        <TeacherSpotlight />
        <CTASection />
        <Footer />
    </div>
  );
};

export default SchoolInfo;
