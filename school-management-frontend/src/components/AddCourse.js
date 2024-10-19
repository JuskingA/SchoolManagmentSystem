import React, { useState } from 'react';
import axios from 'axios';

function AddCourse() {
  const [formData, setFormData] = useState({ title: '', description: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post('http://localhost:5000/api/courses/create', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Course added successfully!');
    } catch (error) {
      alert('Failed to add course');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Course Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Course Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Course</button>
    </form>
  );
}

export default AddCourse;
