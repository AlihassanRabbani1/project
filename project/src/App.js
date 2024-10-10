import React from 'react'
import Nav from './comp/nav'
import { useState } from 'react'
function App() {
    
  const [name , setName] =  useState("Ali Hassan")
  const [num , setNum] = useState(0)
     
  function change() {
            
   setName ("Rabbani")
    }
    function inc() {
         
      setNum (num + 1)
    }

    function reset() {
        
      setNum (num*0)
    }
    

      function dec() {
        setNum(num-1)
      }

  return (
    <div>

      <h1>{name}
        <button onClick={change}>change</button>
      </h1>
      <h1>{num}
         
      </h1>
      <button onClick={inc}>inc</button>
      <button onClick={dec}>dec</button>
      <button onClick={reset}>reset</button>
      

        <Nav name = " Ali Hassan" Rollnum = {88}/>




    </div>
  )
}

export default App