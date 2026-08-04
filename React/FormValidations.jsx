import React from 'react';
import { useState, useRef, useEffect  } from 'react'


function App() {
  const [formData, setFormData] = useState({
    email:'',
    password: ''
  });

  const [errors, setErrors] = useState({
    email:'',
    password: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({...prev, [name]: value}));
  }

  const validateForm = () => {

    const newErrors = {}

    if(!formData.email.trim()){
      newErrors.email = "Email is Required!";
    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)){
      newErrors.email = "Invalid Email!";
    }

    if(!formData.password.trim()){
      newErrors.password = "Password is Required!";
    }else if((!formData.password.length) < 8){
      newErrors.password = "Password must be atleast 8 digit!";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(!validateForm()) return

    console.log(formData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span>{errors.email}</span>}
        <br/>
        <input name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <span>{errors.password}</span>}
        <br/>
        <button type="submit">Focus Input</button>
      </form>
    </div>
  )
}

export default App

-------------------------------------------------------