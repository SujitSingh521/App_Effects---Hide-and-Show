import './App.css';
import { useState } from 'react';

function App() {
  const [status,setStatus] =useState(false); 

  return (
    <div className="App">
      {status ? <h1>Welcome To My World!</h1> : null}

      <button style={{marginRight:'5px'}} onClick={()=>setStatus(true)}>Show</button>
      <button style={{marginRight:'5px'}} onClick={()=>setStatus(false)}>Hide</button>
      <button style={{marginRight:'5px'}} onClick={()=>setStatus(!status)}>Toggle</button>
    </div>
  );
}

export default App;
