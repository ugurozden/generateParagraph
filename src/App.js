import React, { useState } from 'react';
import text from './data';
import TRYI from './TRYI'
function App() {
  const [count, setCount] = useState(0);
  const [yazi, setYazi] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setYazi(text.slice(0, [amount]))
  }

  return (<div>
    <form type="submit" onSubmit={handleSubmit}>
      <input type="number" value={count} onChange={(e) => setCount(e.target.value)} ></input>
      <button>generate</button>
    </form>

    <div>
      {yazi.map((a, index) => <TRYI key={index} a={a} />)}
    </div>
  </div>
  )
}

export default App;
