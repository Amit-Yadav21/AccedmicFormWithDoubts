import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./Form.css";
import validate from '../validation/Validate.jsx'
import HorizontalLine from '../Horizontalline/HorizontalLine.jsx'

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    First_name: "",
    Last_name: "",
    Gender: "",
    Mobile: "",
    Email: "",
    Doubt1: "",
    Doubt2: "",
    Doubt3: "",
    Doubt4: "",
    Doubt5: ""
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    console.log('Updated form data:', formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate(formData); // Validate the form data
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      try {
        console.log('Submitting form data:', formData);
        const proxyUrl = "https://thingproxy.freeboard.io/fetch/";
        const targetUrl = "https://script.google.com/a/macros/navgurukul.org/s/AKfycbyAoLQNKRCptFWsHs9O39XZe1DVFDylJC6zVrcc4hxkXtmDey2jj6nNvan4XF5UWb_zUA/exec";

        const response = await axios.post(`${proxyUrl}${targetUrl}`, formData);
        toast.success("Form submitted successfully");
        console.log('Response:', response.data);
        setFormData({
          First_name: "",
          Last_name: "",
          Gender: "",
          Mobile: "",
          Email: "",
          Doubt1: "",
          Doubt2: "",
          Doubt3: "",
          Doubt4: "",
          Doubt5: ""
        });
        setErrors({});
      } catch (error) {
        console.error("Error details:", error.message);
        // toast.error("Error submitting form");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-50 mt-5 mb-5">
      <div className="card p-3 bg">
        <h1 className="text-center">Academic Form</h1>
        <HorizontalLine />
        <form onSubmit={handleSubmit} className="row mx-auto" noValidate>
          <HorizontalLine />
          <h4 className="text-center mt-3">Personal Info</h4>
          <div className="form-group col-md-6 mb-3">
            <label htmlFor="First_name" className="form-label fw-bold text-dark">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              name="First_name"
              placeholder="Enter your first name"
              onChange={handleInputChange}
              value={formData.First_name}
            />
            {errors.First_name && <div className="text-danger">{errors.First_name}</div>}
          </div>
          <div className="form-group col-md-6 mb-3">
            <label htmlFor="Last_name" className="form-label fw-bold text-dark">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              name="Last_name"
              placeholder="Enter your last name"
              onChange={handleInputChange}
              value={formData.Last_name}
            />
            {errors.Last_name && <div className="text-danger">{errors.Last_name}</div>}
          </div>
          <div className="form-group col-md-6 mb-3">
            <label htmlFor="Gender" className="form-label fw-bold text-dark">
              Gender
            </label>
            <select
              className="form-control"
              name="Gender"
              onChange={handleInputChange}
              value={formData.Gender}
            >
              <option value="" disabled>
                -Select your gender-
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.Gender && <div className="text-danger">{errors.Gender}</div>}
          </div>
          <div className="form-group col-md-6 mb-3">
            <label htmlFor="Mobile" className="form-label fw-bold text-dark">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              name="Mobile"
              placeholder="123-456-7890"
              onChange={handleInputChange}
              value={formData.Mobile}
            />
            {errors.Mobile && <div className="text-danger">{errors.Mobile}</div>}
          </div>
          <div className="form-group col-md-12 mb-3">
            <label htmlFor="Email" className="form-label fw-bold text-dark">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="Email"
              placeholder="Enter your email address"
              onChange={handleInputChange}
              value={formData.Email}
            />
            {errors.Email && <div className="text-danger">{errors.Email}</div>}
          </div>
          <h4 className="text-center">Doubts</h4>
          <div className="form-group col-md-6 mb-3">
            <label htmlFor="Doubt1" className="form-label fw-bold text-dark">
              Doubt 1
            </label>
            <textarea
              className="form-control"
              name="Doubt1"
              placeholder="Enter your first doubt"
              onChange={handleInputChange}
              value={formData.Doubt1}
              rows="2"
            ></textarea>
            {errors.Doubt1 && <div className="text-danger">{errors.Doubt1}</div>}
          </div>
          <div className="form-group col-md-6 mb-3">
            <label htmlFor="Doubt2" className="form-label fw-bold text-dark">
              Doubt 2
            </label>
            <textarea
              className="form-control"
              name="Doubt2"
              placeholder="Enter your second doubt (optional)"
              onChange={handleInputChange}
              value={formData.Doubt2}
              rows="2"
            ></textarea>
            {errors.Doubt2 && <div className="text-danger">{errors.Doubt2}</div>}
          </div>
          <div className="form-group col-md-6 mb-3">
            <label htmlFor="Doubt3" className="form-label fw-bold text-dark">
              Doubt 3
            </label>
            <textarea
              className="form-control"
              name="Doubt3"
              placeholder="Enter your third doubt (optional)"
              onChange={handleInputChange}
              value={formData.Doubt3}
              rows="2"
            ></textarea>
            {errors.Doubt3 && <div className="text-danger">{errors.Doubt3}</div>}
          </div>
          <div className="form-group col-md-6 mb-3">
            <label htmlFor="Doubt4" className="form-label fw-bold text-dark">
              Doubt 4
            </label>
            <textarea
              className="form-control"
              name="Doubt4"
              placeholder="Enter your fourth doubt (optional)"
              onChange={handleInputChange}
              value={formData.Doubt4}
              rows="2"
            ></textarea>
            {errors.Doubt4 && <div className="text-danger">{errors.Doubt4}</div>}
          </div>
          <div className="form-group col-md-12 mb-3">
            <label htmlFor="Doubt5" className="form-label fw-bold text-dark">
              Doubt 5
            </label>
            <textarea
              className="form-control"
              name="Doubt5"
              placeholder="Enter your fifth doubt (optional)"
              onChange={handleInputChange}
              value={formData.Doubt5}
              rows="2"
            ></textarea>
            {errors.Doubt5 && <div className="text-danger">{errors.Doubt5}</div>}
          </div>
          <div className="form-group col-12 mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="terms"
                onChange={handleInputChange}
                checked={formData.terms}
              />
              <label className="form-check-label text-dark" htmlFor="terms">
                Agree to terms and conditions
              </label>
              {errors.terms && <div className="text-danger">{errors.terms}</div>}
            </div>
            <button
              className="btn btn-secondary w-50 mt-4 fw-bold"
              type="submit"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Send"}
            </button>
            <a href="https://docs.google.com/spreadsheets/d/1Rmgy-T-On8WL8X379PtBN5lUu-rstbLhgOaJ3nSw_FI/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
              <button type="button" className="btn btn-primary w-50 mt-4 fw-bold">Open google Sheet ( Admin only )
              </button>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;