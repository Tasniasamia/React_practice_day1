import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[count,setCount]=useState(100);
  const downbattery=()=>{
  let newcount=count-10;
  setCount(newcount);}

  if(count===0){
    setCount(count);

  }
  return (
    <div className="App">
   <Mobile counter={count}sendFunction={downbattery}></Mobile>
    </div>
  );
}
function Mobile(props){
  // const[count,setCount]=useState(100);
  // const downbattery=()=>{
  // let newcount=count-10;
  // setCount(newcount);

  // if(count===0){
  //   setCount(count);

  // }
   
  // }
  return(
    <div>
<p>Mobile Charge: {props.counter}%</p>
<button onClick={props.sendFunction}>Battery Down</button>


    </div>

  )

}
export default App;
