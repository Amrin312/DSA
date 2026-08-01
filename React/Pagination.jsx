import React from 'react';
import { useState, useRef, useEffect } from 'react'

function App() {

  const items = Array.from({length: 100}, (_,index) => `Item ${index + 1}`);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (page -1) * itemsPerPage;
  const currentPage = items.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    if(page < totalPages) setPage(prev => prev + 1);
  }

  const handlePrevPage = () => {
    if(page > 1) setPage(prev => prev - 1);
  }

  

  return (
    <div>
      <h1>Pagination</h1>
     
      <ul>
        {currentPage?.map((item, index) => (
          <li key={index}>{item} </li>
        ))}
      </ul>

      <div>
        <button onClick={handlePrevPage} disabled={page == 1}>Prev</button>

        {Array.from({length: totalPages}, (_, index) => {
          return (
            <button key={index} onClick={() => setPage(index + 1)}>{index + 1}</button>
          )
        })}
        <button onClick={handleNextPage} disabled={page == totalPages}>Next</button>

      </div>
    </div>
  )
}

export default App
