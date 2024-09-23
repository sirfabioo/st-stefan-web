import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import '../styles/Welcome.css'; // Import the custom CSS for the Welcome page
import welcome_pic from '../images/welcome_pic.png'; // Import the image for the Welcome page
import SchoolProgramShort from "../components/SchoolProgramShort";
import BlogOverview from "../components/BlogOverview";
import SocialMedia from "../components/SocialMedia";
import CarouselComponent from "../components/CarouselComponent";

const Welcome = () => {
  return (
    <div>
      {/* Add the Navbar at the top */}
      <CustomNavbar />

      {/* Welcome content in a flex container */}
      <div className="welcome-content">
        <div className="welcome-text">
          <h1 className="welcome-quote">Bildung, die bewegt –</h1>
          <h2 className="welcome-heading">
            Die Sportmittelschule St. Stefan Christine Lavant heißt Sie herzlich willkommen!
          </h2>
          <p className="welcome-subheading">
            Unsere Schule steht für eine zukunftsorientierte und praxisnahe Ausbildung. 
            Mit modern ausgestatteten Klassenräumen und einem engagierten Lehrerteam bieten 
            wir beste Voraussetzungen für die persönliche und schulische Entwicklung unserer Schüler. 
            Seien Sie Teil unserer Schulgemeinschaft und erfahren Sie mehr über unsere Werte und Ziele.
          </p>
        </div>

        {/* Welcome image on the right */}
        <div className="welcome-image">
          <img src={welcome_pic} alt="Willkommen Bild" className="welcome-pic" />
        </div>
      </div>

      <SchoolProgramShort />

      <BlogOverview />

      <CarouselComponent />

      <SocialMedia />

      
    </div>
  );
};

export default Welcome;
