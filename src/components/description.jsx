import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faPaintBrush,
  faCut,
  faBreadSlice,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import "./description.css";

const Description = () => {
  const [expanded, setExpanded] = useState(null);

  const handleClick = (title) => {
    if (expanded === title) {
      setExpanded(null);
    } else {
      setExpanded(title);
    }
  };

  const courses = [
    {
      title: "Programming",
      description:
        "Learn to code and create websites, apps, and software! This program equips you with the skills to build the future.",
    },
    {
      title: "Design",
      description:
        "Unleash your creativity! Develop your graphic design, web design, or user experience (UX) skills in this exciting program.",
    },
    {
      title: "Salon",
      description:
        "Master the art of hair, makeup, and nails! Our Salon program provides the training and tools for a successful career in the beauty industry.",
    },
    {
      title: "Bakery",
      description:
        "Become a baking wizard! Learn the secrets of bread making, pastry arts, and cake decorating in our hands-on Bakery program.",
    },
    {
      title: "Catering",
      description:
        "Turn your passion for food into a career! Our Catering program teaches you the skills to plan, prepare, and execute exceptional culinary experiences.",
    },
  ];

  const iconMapping = {
    Programming: faBookOpen,
    Design: faPaintBrush,
    Salon: faCut,
    Bakery: faBreadSlice,
    Catering: faUtensils,
  };

  const scrollToForm = () => {
    const formElement = document.getElementById("form-section");
    formElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container">
      <h1>Our Courses/Services</h1>
      <p>We offer the following in our center</p>
      <hr className="shorter" />
      <div className="row">
        {courses.map((course, index) => (
          <div key={index} className="col-12 col-md-6">
            <div
              className="card text-primary mb-3"
              onClick={() => handleClick(course.title)}
            >
              <div
                className={`card-header ${
                  expanded === course.title ? "gradient" : ""
                }`}
              >
                <FontAwesomeIcon icon={iconMapping[course.title]} />{" "}
                {course.title}
              </div>
              {expanded === course.title && (
                <div className="card-body">
                  <p className="card-text">{course.description}</p>
                  <button onClick={scrollToForm} className="btn">
                    Register Now
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Description;
