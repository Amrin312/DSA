import React from 'react';
import { useState, useEffect } from 'react'

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');
  const [states, setStates] = useState([]);
  const [state, setState] = useState('');

  useEffect(() => {
    async function fetchCountry(){
      const res = await fetch(`https://api.countrystatecity.in/v1/countries`, {
        headers: { 'X-CSCAPI-KEY': '786a363196655fcf82fbaa9bce3670f3abc70ab20d948e1292fbfdfcb65184e3' }
      });

      const data = await res.json();

      setCountries(data);
    }

    fetchCountry();
  }, []);

  useEffect(() => {
    async function fetchState(){
      if(country.length == 0) return 

      const res = await fetch(`https://api.countrystatecity.in/v1/countries/${country}/states`, {
        headers: { 'X-CSCAPI-KEY': '786a363196655fcf82fbaa9bce3670f3abc70ab20d948e1292fbfdfcb65184e3'}
      });

      const data = await res.json();
      setStates(data);
    }

    fetchState();
  },[country]);

  const handleCountry = (e) => {
    setCountry(e.target.value);
    setStates([]);
    setState('');
  }

  return (
    <div>
    <select onChange={handleCountry}>
        <option>Select Country</option>
      {
        countries?.map(item => (
          <option key={item.id} value={item.iso2}>{item.name}</option>
        ))
      }
    </select>

    <select onChange={(e) => setState(e.target.value)}>
        <option>Select State</option>
      {
        states?.map(item => (
          <option key={item.id} value={item.iso2}>{item.name}</option>
        ))
      }
    </select>
    </div>
  )
}

export default App
