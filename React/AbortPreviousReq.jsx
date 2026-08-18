// browser's AbortController API cancels an API request that has already been initiated.
// AbortController to cancel an older request when a newer one is triggered. 


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
    const controller = new AbortController();

    async function fetchState(){
      if(country.length == 0) return 

      try{
        const res = await fetch(`https://api.countrystatecity.in/v1/countries/${country}/states`, {
          headers: { 'X-CSCAPI-KEY': '786a363196655fcf82fbaa9bce3670f3abc70ab20d948e1292fbfdfcb65184e3'},
          signal: controller.signal
        });

        const data = await res.json();
        console.log(1);
        setStates(data);

      }catch(err){                                    
        if(err.name === "AbortError"){
          console.log('Previous req cancelled!');
        }else{
          console.error(err);
        }
      }
    }

    fetchState();

    return () => {
      controller.abort();
    }
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
