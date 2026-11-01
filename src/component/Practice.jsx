// Consider the following component:

import { useState } from "react";

function Practice() {
  const [names,setNames]= useState(["Nilay", "Atharva", "Chetan"]);
  console.log("hello");
  return (
    <>
      <button onClick={()=>setNames(["Sumit",...names])}>Add</button>
      {
        names.map((name) => <input key={name} placeholder={name} />)
      }
    </>
  )
}


export default Practice;



