import { useState } from "react";
import { IoAddSharp } from "react-icons/io5";
import { RiSubtractLine } from "react-icons/ri";
import { RiResetRightFill } from "react-icons/ri";

export default function Counter() {
const[count,setCount]=useState(0)

const handleIncrement = () => {
    setCount(count+1)
}
 
const handleDecrement =() => {
    if(count > 1){
   setCount(count - 1)
}
}

const reset = () => {
    setCount(0)
}


    return(
        <div className="flex flex-col items-center" >
      <h1 className= "text-4xl font-bold mb-4" >
     {count}
      </h1>
      <div className = "flex gap-4 items-center justify-center">
      <button onClick={handleDecrement} className = "bg-red-500 text-white px-4 py-2 rounded-lg"><RiSubtractLine/></button>

     <button onClick={handleIncrement} className = "bg-green-500 text-white px-4 py-2 rounded-lg"><IoAddSharp/></button>

      <button onClick={reset} className = "bg-blue-500 text-white px-4 py-2 rounded-lg"><RiResetRightFill/></button>

      </div>
        </div>
    )
}