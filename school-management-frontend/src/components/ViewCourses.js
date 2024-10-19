import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    async function fetchCourses() {
      const response = await axios.get('http://localhost:5000/api/courses/my-courses', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCourses(response.data);
    }
    fetchCourses();
  }, []);

  return (
    <div>
      <h1>My Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewCourses;
