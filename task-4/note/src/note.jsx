import React from "react";
import './custom.css'
import { NewTask, NotContent } from "./tasks";

export default function Note(){
    
    const [readable, setReadable] = React.useState({})
    const [contentToggle, setContentToggle] = React.useState({})
    const [texts, setTexts] = React.useState({})
    const [currentTask, setCurrentTask] = React.useState("")
    const [text, setText] = React.useState({title: "", description: ""})
    
   
    function handleTextToggle(taskName){
        setTexts(prev=> {
           
            for (const key in prev) {
                if (!(prev[key] !== taskName)) {
                    return {...prev, [taskName] : {}} 
                } 
            }

            return {...prev}
            
        })
        setCurrentTask(taskName)
        setContentToggle({[taskName] : true})
       
        
        
   }
   
   function handleTextInput(event){
    setText(prev=> {
        return {...prev, [event.target.name] : event.target.value} 
    })
    setTexts(prev=> {
        return {...prev, [currentTask] : {...prev[currentTask], [event.target.name] : event.target.value}} 
    })
   }

    function handleRead(enable){
        setReadable({[currentTask] : enable})
    }
   console.log(readable)
   console.log(texts)
   console.log(texts[currentTask]?.title)
    return(
        <>
        <div className="all-cont">
         <div className="sideBar">
            <h1>Task Manager</h1>
            <NewTask texts={texts} handleTextToggle={handleTextToggle} setContentToggle={setContentToggle} setCurrentTask={setCurrentTask} setReadable={setReadable} />
         </div>
         <div className="mainContent">
          { contentToggle[currentTask] ?
           <NotContent readable={readable[currentTask]} handleRead={handleRead}
           texts={texts[currentTask]} handleTextInput={handleTextInput}
           title={texts[currentTask]?.title} description={texts[currentTask]?.description} currentTask={currentTask} /> : <h1 className="hero">Note...</h1>}
         </div>

        </div>
        </>
    )
}