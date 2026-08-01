import React from 'react';
import { useState, useEffect } from 'react'

function App() {

  const [search, setSearch] = useState('');
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  const debouncedSearch = async (val) => {

      try{
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/users/search?q=${val}&limit=20`);
        
        if(!res.ok){
          throw new Error('Failed to fetch users');
        }

        const data = await res.json();
        setUserList(data.users);
      }catch(err){
        console.log(err.message);
      }finally{
        setLoading(false);
      }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      debouncedSearch(search);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [search]);


  return (
    <div>
      <input value={search} onChange={(e) => setSearch(e.target.value)}  />

      <div>
          
        {loading ? (<p>Loading</p>) :
        
            userList.length > 0 ? (
              <ul>
              {
                userList?.map(user => (
                  <li key={user.id}>{user.firstName}</li>
                ))
              }
            </ul>
            )
           : (<p>User Not Found</p>)
          }
    
      </div>
      

    </div>
  )
}

export default App
