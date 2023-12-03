import React, { useState } from "react";
import "./Style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Component = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    address: "",
  });

  // for education
  const [isFormVisisble, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisisble);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const clearAll = () => {
    setFormData({
      fullName: "",
      email: "",
      number: "",
      address: "",
    });
  };

  const { fullName, email, number, address } = formData;

  return (
    <>
      <section>
        <div className="left">
          <div className="div1 containers">
            <FontAwesomeIcon
              icon={faTrash}
              style={{ color: "rgb(205, 24, 24)" }}
            />
            <h5 className="clear" onClick={clearAll}>
              Clear Resume
            </h5>
            <span className="div1span">Load Example</span>
          </div>
          <div className="div2 personal-details containers">
            <form>
              <h1>Personal Details</h1>

              <div className="input-group">
                <label>Full Name</label>
                <input
                  name="fullName"
                  type="text"
                  placeholder="First and Last Name"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="input-group">
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="input-group">
                <label>Phone Number</label>
                <input
                  name="number"
                  type="text"
                  placeholder="Enter phone number"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="input-group">
                <label>Address</label>
                <input
                  name="address"
                  type="text"
                  placeholder="City, Country"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </form>
          </div>

          <div className="div3 containers">
            <button onClick={toggleForm} className="btn">
              <FontAwesomeIcon icon={faGraduationCap} />
              <h1>
                <span>Education</span>
              </h1>
              <FontAwesomeIcon
                icon={isFormVisisble ? faChevronUp : faChevronDown}
              />
            </button>
            {isFormVisisble && (
              <form>
                <div className="input-group">
                  <label>School</label>
                  <input
                    name="school"
                    type="text"
                    placeholder="City, Country"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="input-group">
                  <label>Degree</label>
                  <input
                    name="degree"
                    type="text"
                    placeholder="City, Country"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="input-group">
                  <label>Start Date</label>
                  <input
                    name="startDate"
                    type="number"
                    placeholder="City, Country"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="input-group">
                  <label>End Date</label>
                  <input
                    name="address"
                    type="number"
                    placeholder="City, Country"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="input-group">
                  <label>Location</label>
                  <input
                    name="address"
                    type="text"
                    placeholder="City, Country"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="right">
          {/* PERSONAL INFORMATION */}
          <div className="personal-info">
            <h1 className="resume-name">{fullName}</h1>
            <div className="contact-info">
              {email && (
                <div>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>{email}</span>
                </div>
              )}
              {number && (
                <div>
                  <FontAwesomeIcon icon={faPhone} />
                  <span>{number}</span>
                </div>
              )}
              {address && (
                <div>
                  <FontAwesomeIcon icon={faMapMarker} />
                  <span>{address}</span>
                </div>
              )}
            </div>
          </div>

          {/* EDUCATION */}
          <div className="education-info">
            <h3 className="education-header">Education</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Component;
