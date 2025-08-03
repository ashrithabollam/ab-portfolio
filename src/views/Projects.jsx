import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          What I Built
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <Card
            title="Poster Evaluation for Accessibility"
            desc="Developed a web-based application to evaluate posters for accessibility, 
                  ensuring inclusivity for individuals with visual impairments. 
                  Implemented features like automated scoring, color contrast checks, and text-to-speech compatibility."
            image="https://images.wallpaperscraft.com/image/single/system_scheme_blue_blueprint_10428_300x168.jpg"
            link="#"
          />

          <Card
            title="Real-Time Attendance Monitoring System"
            desc="Built a real-time attendance system using LBPH for precise attendee identification and logging. 
                  Automated attendance tracking and report generation for accuracy and efficiency."
            image="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
            link="#"
            />

          <Card
            title="E-Checkup System"
            desc="Created an E-Checkup system using Java to analyze symptoms via data mining techniques. 
                  Streamlined patient-doctor communication for timely health consultations with an intuitive interface."
            image="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
            link="#"
          />

        </div>
        <a
          href="hello"
          class=" w-32 flex items-center py-4 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto mt-4"
        >
          Show More
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Projects;
