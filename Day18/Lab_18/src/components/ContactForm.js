import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required.";
    } else if (formData.description.length > 200) {
      newErrors.description = "Description cannot exceed 200 characters.";
    }

    if (!formData.price.trim()) {
      newErrors.price = "Price is required.";
    } else if (isNaN(formData.price) || Number(formData.price) <= 0) {
      newErrors.price = "Price must be a positive number.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    alert(`Submitted: ${JSON.stringify(formData, null, 2)}`);
    // Reset form
    setFormData({ name: "", description: "", price: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? "input-error" : ""}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </label>

      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          maxLength="200"
          className={errors.description ? "input-error" : ""}
        />
        {errors.description && <p className="error">{errors.description}</p>}
      </label>

      <label>
        Price:
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className={errors.price ? "input-error" : ""}
        />
        {errors.price && <p className="error">{errors.price}</p>}
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
