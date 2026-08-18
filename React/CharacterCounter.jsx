import React from 'react';
import { useState, useEffect, useRef } from 'react'

function App() {
  const [textInput, setTextInput] = useState('');

  const charCount = textInput.length;

  return (
    <div>
        <h1>Character Counter</h1>

        <textarea value={textInput} onChange={(e) => setTextInput(e.target.value)} maxLength={200} /> <br/>
        <span>{charCount} / 200</span> <br/>

        {(200 - charCount) < 20  && <span>Fewer than 20 characters remaining!</span>}
        
    </div>
  )
}

export default App
