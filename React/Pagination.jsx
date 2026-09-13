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


// ---------------------------------------
// with api
// ---------------------------------------


import React from 'react';
import { useState, useEffect } from 'react'

function App() {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState({
    productList: [],
    total: 0
  });
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState('');
  const limit = 10;
  const totalPages = Math.ceil(products.total / limit);

  const skip = (page - 1) * limit;


  console.log(products);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    async function getProducts(){
      console.log(limit, skip);
      try{
        const res = await fetch(
          `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price`,
           { signal: controller.signal });

        const data = await res.json();
        // console.log(data);
        setProducts({productList: data.products, total: data.total});
      }catch(err){
        console.log(err.message);
        setError(err.message);
      }finally{
        setLoading(false);
      }
    }

    getProducts();
  }, [page]);

  const handlePage = (no) => {
    setPage(no);
  }

  return (
    <div>
      <div>
        {error && <div>{error}</div>}
        {loading ? (
          <div>Loading... </div>
        ) : (
          <div>
          {products.productList.length > 0 ? (
            <ul>
              {products.productList.map(item => (
                <li key={item.id}>{item.title} --- ${item.price}</li>
              ))}
            </ul>
            ) : (
              <div>No products to list</div>
            )  
          }

          <div>
            {totalPages > 0 && (
              <div>
                <button onClick={() => setPage(prev => prev - 1)} disabled={page == 1}>Prev</button>
                {Array.from({length: totalPages}).map((_, index) => (
                    <button onClick={() => handlePage(index+1)} style={{ border: page === index + 1 ? '2px solid black' : '' }} key={index +1}>{index + 1}</button>
                ))}
                <button onClick={() => setPage(prev => prev + 1)} disabled={page == totalPages}>Next</button>
              </div>
            )
            }
          </div>
        </div>
        )
        }
      </div>

    </div>
  )
}

export default App
 