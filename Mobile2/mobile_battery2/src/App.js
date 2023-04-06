import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  return (
    <div className="App">
   <Mobile></Mobile>
    </div>
  );
}
function Mobile(){
  const[count,setCount]=useState(100);
  const downbattery=()=>{
  let newcount=count-10;
  setCount(newcount);

  if(count===0){
    setCount(count);

  }
   
  }
  return(
    <div>
<p>Mobile Charge: {count}%</p>
<button onClick={downbattery}>Battery Down</button>


    </div>

  )

}
export default App;
