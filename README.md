# Sportmittelschule St. Stefan - School Website

Welcome to the official repository for the **Sportmittelschule St. Stefan** website! This project is designed to provide a modern, user-friendly, and responsive platform for showcasing school information, events, and updates to students, parents, and the community.

---

## Features

- **Dynamic Homepage**: A welcoming homepage with an overview of the school’s mission and highlights.
- **Teacher Profiles**: Detailed information about the school’s dedicated teaching staff.
- **Blog and News Section**: Stay updated with the latest school news and events.
- **Photo Gallery**: A collection of memorable moments from school life.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Admin Panel**: A secure section for authorized personnel to manage blog posts and gallery content.
- **Multilingual Support** *(if applicable)*.

---

## Technologies Used

- **Frontend**: React.js, React Bootstrap
- **Backend**: Firebase Firestore (for database) and Firebase Storage (for image and video uploads)
- **Authentication**: Firebase Authentication
- **Hosting**: Firebase Hosting
- **Styling**: Custom CSS with CSS variables

---

## Project Structure

```plaintext
src/
├── components/
│   ├── CustomNavbar.js          # Navigation bar
│   ├── Footer.js                # Footer component
│   ├── BlogOverview.js          # Blog post preview section
│   ├── TeacherSpotlight.js      # Teacher profiles spotlight
│   ├── VideoPlayer.js           # Video playback component
│   ├── SchoolValues.js          # School values overview
│   └── ...
├── pages/
│   ├── Welcome.js               # Homepage
│   ├── Blog.js                  # Blog creation and editing
│   ├── Gallery.js               # Photo gallery
│   ├── Login.js                 # Admin login page
│   └── ...
├── styles/
│   ├── CustomNavbar.css
│   ├── Footer.css
│   ├── BlogOverview.css
│   └── ...
├── firebase.js                  # Firebase configuration
└── App.js                       # Main application file
