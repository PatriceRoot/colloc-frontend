import React, { useState } from "react";

const Form = ({ title, buttonText, fields, onSubmit }) => {
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleRememberMeChange = (e) => {
    setShowPassword(e.target.checked);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <input
            key={index}
            type={
              field.name === "password" && showPassword ? "text" : field.type
            }
            name={field.name}
            value={formData[field.name] || ""}
            onChange={handleChange}
            placeholder={field.placeholder}
            required={field.required}
          />
        ))}
        <div className="remember-me">
          <input
            type="checkbox"
            id="remember"
            onChange={handleRememberMeChange}
          />
          <label htmlFor="remember">Afficher le mot de passe</label>
        </div>
        <button type="submit">{buttonText}</button>
      </form>
    </div>
  );
};

export default Form;
