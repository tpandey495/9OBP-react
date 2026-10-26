
import {useState} from 'react';

// state variable -> state  is variable store and rembered by react component 
// and component is rerendered when ever state  changes.

// hooks -> useState() -> using useState() can create a  state variable.

// Primitive play



function Counter(){
    let [count,setCount]=useState(0);


    function decrement(){
        setCount(count-1);
    }

    function increment(){
        setCount(++count);    
    }

  return(
     <div style={{display:"flex",gap:"10px"}}>
        <button onClick={decrement}>Decrement</button>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>

     </div>

  )

}

// store name inside a state varibale and create button change name 
// on button change the name to somethingelse.




export default Counter;


