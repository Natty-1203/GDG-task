import React from "react";
import './custom.css'

export default function Counting(){
   const [count, setCount] = React.useState(0)

   function handleOperator(event){
    console.log(event)
    setCount(prev =>{
        if (event.target.textContent === "+")return prev + 1;
        else if(event.target.textContent === "reset") return 0;
        else if(prev > 0) return prev - 1;
        else return 0;
    })
   }

    return(
        <>
        <div className="count-cont">
            <div className="first-row">
            <button className="minus" onClick={handleOperator}>-</button>
            <div className="displayer">{count}</div>
            <button className="plus" onClick={handleOperator}>+</button>
            </div>
            <button className="reset" onClick={handleOperator}>reset</button>
        </div>
        </>
    )
}