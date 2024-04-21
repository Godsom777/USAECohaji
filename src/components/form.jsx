import React, { useState } from "react";

const skills = ["Programming", "Design", "Salon", "Bakery", "Catering"];
const genders = ["Male", "Female"];
const educationLevels = [
  "High School",
  "Undergraduate",
  "Graduate",
  "Post Graduate",
];

function Form() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    educationLevel: "",
    fieldOfStudy: "",
    skill: "",
  });

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <h1 className="header hero-text">Enrollment Form</h1>
      <p>*Fill the form accordingly and accurately</p>
      <hr className="shorter" />

      <div className="form-container container form-session">
        <div className="progress-bar-container progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${(currentStep / 6) * 100}%` }}
            aria-value={currentStep}
            aria-valuemin="0"
            aria-valuemax="5"
          >
            {currentStep} / 6
          </div>
        </div>
        <form>
          {currentStep === 1 && (
            <>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Age</label>
                <input
                  type="number"
                  className="form-control"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <select
                  className="form-control"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                >
                  {genders.map((gender, index) => (
                    <option key={index} value={gender}>
                      {gender}
                    </option>
                  ))}
                </select>
              </div>
            </>
          )}
          {currentStep === 2 && (
            <>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </>
          )}
          {currentStep === 3 && (
            <>
              <div className="form-group">
                <label>Country</label>
                <input
                  type="text"
                  className="form-control"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>State</label>
                <input
                  type="text"
                  className="form-control"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>
            </>
          )}
          {currentStep === 4 && (
            <>
              <div className="form-group">
                <label>Highest Level of Education</label>
                <select
                  className="form-control"
                  name="educationLevel"
                  value={formData.educationLevel}
                  onChange={handleInputChange}
                >
                  {educationLevels.map((level, index) => (
                    <option key={index} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Field of Study</label>
                <input
                  type="text"
                  className="form-control"
                  name="fieldOfStudy"
                  value={formData.fieldOfStudy}
                  onChange={handleInputChange}
                />
              </div>
            </>
          )}
          {currentStep === 5 && (
            <div className="form-group">
              <label>Skill to Learn</label>
              <select
                className="form-control"
                name="skill"
                value={formData.skill}
                onChange={handleInputChange}
              >
                {skills.map((skill, index) => (
                  <option key={index} value={skill}>
                    {skill}
                  </option>
                ))}
              </select>
            </div>
          )}

          {currentStep === 6 && (
            <>
              <div className="form-group">
                <label>Guarantor's Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="sponsor"
                  value={formData.sponsor}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Guarantor's Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="GAddress"
                  value={formData.GuaratorsAddress}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Guarantor's Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="gNumber"
                  value={formData.gNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Guarantor's Occupation</label>
                <input
                  type="text"
                  className="form-control"
                  name="gOccupation"
                  value={formData.gOccupation}
                  onChange={handleInputChange}
                />
              </div>
            </>
          )}
        </form>
        {currentStep > 1 && (
          <button className="btn btn-secondary m-2" onClick={handlePrev}>
            Previous
          </button>
        )}
        {currentStep < 6 && (
          <button className="btn btn-primary m-2" onClick={handleNext}>
            Next
          </button>
        )}
        {currentStep === 6 && (
          <button className="btn btn-success m-2" disabled>
            Finish
          </button>
        )}
      </div>
    </>
  );
}

export default Form;
