import React, { useState, useContext } from "react";
import { HouseContext } from "../context/house.context";
import axios from "axios";

const HouseForm = () => {
  const { addHouse } = useContext(HouseContext);
  const initialFormData = {
    title: "",
    category: "",
    description: "",
    price: "",
    location: "",
    bedroom: "",
    bathroom: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const parsedValue =
      name === "price" || name === "bedroom" || name === "bathroom"
        ? Math.max(0, parseInt(value, 10) || 0)
        : value;
    setFormData({ ...formData, [name]: parsedValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "http://localhost:3000/api/houses",
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      addHouse({ ...formData, id: response.data.id });
      setFormData(initialFormData);
    } catch (error) {
      console.error("Failed to create house", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="house-form">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
      />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="">Select Category</option>
        <option value="Vente">Vente</option>
        <option value="Location">Location</option>
      </select>
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
      />
      <input
        type="number"
        name="bedroom"
        placeholder="Bedrooms"
        value={formData.bedroom}
        onChange={handleChange}
      />
      <input
        type="number"
        name="bathroom"
        placeholder="Bathrooms"
        value={formData.bathroom}
        onChange={handleChange}
      />
      <button type="submit">Create House</button>
    </form>
  );
};

export default HouseForm;
