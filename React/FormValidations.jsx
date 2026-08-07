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

// registration form 


import React from 'react';
import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormData(prev => ({...prev, [name] : value}));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  }

  const validateForm = () => {

    const formErrors = {};

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if(formData.email.trim() === ''){
      formErrors.email = "Email is Required!";
    }else if(!emailRegex.test(formData.email)){
      formErrors.email = "Enter valid email address.";
    }

    if(formData.password.trim() === ''){
      formErrors.password = "Password is Required!";
    }else if(formData.password.length < 8){
      formErrors.password = "Password must contain 8 letters!";
    }

    if(formData.confirmPassword.trim() === ''){
      formErrors.confirmPassword = "Confirm Password is Required!";
    }else if(formData.password !== formData.confirmPassword){
      formErrors.confirmPassword = "Password not matching!";
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!validateForm()) return

    console.log(formData);
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="email" value={formData.email} onChange={handleChange} /> <br />
        {errors.email && <span>{errors.email}</span>}  <br />

        <input name="password" value={formData.password} onChange={handleChange} /> <br />
        {errors.password && <span>{errors.password}</span>}  <br />

        <input name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} /> <br />
        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}  <br />
        <button type="submit">Sign up</button>
      </form>
    </div>
  )
}

export default App


-----------------------------------------------------------