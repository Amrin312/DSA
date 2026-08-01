import React from 'react';
import { useState, useEffect } from 'react'

function App() {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
  ];
  const [search, setSearch] = useState('');
  const [userList, setUserList] = useState(users);

  const debouncedSearch = (val) => {
    const result = users.filter(user => user.name.toLowerCase().includes(val.toLowerCase()));

    setUserList(result);
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
        <ul>
          {userList?.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
      

    </div>
  )
}

export default App
