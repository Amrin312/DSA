import React from 'react';
import { useState, useEffect } from 'react'

function App() {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

      if(search.trim().length == 0) return;

      setLoading(true);

      const timer = setTimeout(async () => {
        try{
          const resUser = await fetch(`https://jsonplaceholder.typicode.com/users`);
          const data = await resUser.json();

          const filteredUsers = data.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));

          setUsers(filteredUsers);

        }catch(err){
          console.log(err.message);
        }finally{
          setLoading(false);
        }
      }, 1000);

    return () => clearTimeout(timer);

  }, [search]);
  
  return (
    <div>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />

      <div>
          {search && !loading && (
            <ul>
              {
                users?.length > 0 ? (
                  users.map(user => (
                    <li key={user.id}>{user.name}</li>
                  ))
                ) : (
                  <p>No Users found</p>
                )
              }
            </ul>
          )}
      </div>

    </div>
  )
}

export default App
