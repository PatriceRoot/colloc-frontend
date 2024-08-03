import React, { useState } from "react";

const Form = ({ title, buttonText, fields, onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <input
            key={index}
            type={field.type}
            name={field.name}
            value={formData[field.name] || ""}
            onChange={handleChange}
            placeholder={field.placeholder}
            required={field.required}
          />
        ))}
        <div className="remember-me">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Restez connecté</label>
        </div>
        <button type="submit">{buttonText}</button>
      </form>
    </div>
  );
};

export default Form;
