import React, { useState } from 'react';
import axios from 'axios';

function AddMaterial({ courseId }) {
  const [formData, setFormData] = useState({ title: '', contentUrl: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post('http://localhost:5000/api/materials/add', { ...formData, courseId }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Material added successfully!');
    } catch (error) {
      alert('Failed to add material');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Material Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="contentUrl"
        placeholder="Material URL"
        value={formData.contentUrl}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Material</button>
    </form>
  );
}

export default AddMaterial;
