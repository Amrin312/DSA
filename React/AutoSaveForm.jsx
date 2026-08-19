import React from 'react';
import { useState, useEffect, useRef } from 'react'

function App() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: ""
  });

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormData(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = () => {
      console.log(`Form Submitted ${formData}`);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSubmit();
    }, 1000);

    return () => clearTimeout(timer);
  }, [formData]);
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} /> <br />
        <input name="age" value={formData.age} onChange={handleChange} /> <br />
        <input name="email" value={formData.email} onChange={handleChange} /> <br />
        <button >Submit</button>
      </form>
    </div>
  )
}

export default App
