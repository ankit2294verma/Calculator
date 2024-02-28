import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import User from './User';
import APIdata from './APIdata';


function App() {
  const [counter,setCounter] = useState(0)
  const handleIncrement = () => {
    setCounter(counter+1)
  }
  const handleDecrement = () => {
    setCounter(counter-1)
  }
  return (
    <div className="App">
      {/* <button onClick={() => ''}>Increment</button>
      <button onClick={() => ''}>Decrement</button>
      <input type='text' value={data} placeholder='Enter FullName' title='Please Enter Fullname' name='fullname' id='fullname'
        onChange={(e)=>setData(e.target.value+"text")}
      />
      <h2>{text}</h2>
       <button onClick={()=>setText('Button Clicked')}>Update Text</button> */}
       {/* <User counter={counter} Increment={() => handleIncrement()} Decrement={()=>handleDecrement()}/> */}
       <APIdata />
    </div>
  );
}

export default App;
