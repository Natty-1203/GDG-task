import React from "react";
import './custom.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPenFancy, faTrash} from '@fortawesome/free-solid-svg-icons'

function NewTask(props){
    const [newTask, setNewTask] = React.useState([])
    const [countTask, setCountTask] = React.useState(0)

    function handleAddTask(){
       
        setNewTask(prev => [...prev, `New Task-${countTask + 1}`])
        setCountTask(prev=> prev + 1)
    }

    function handleDelete(id, taskName) {
        setNewTask(prev => prev.filter((item, index) => index !== id));
        setCountTask(prev=> prev--)
        props.setContentToggle(prev=>({...prev,[taskName] : false}))
        
        
    }
    
    
return(
    <>
     <div className="newTask">
        <p>New Task</p>
        <button onClick={handleAddTask}>+</button>
    </div>
    
        {newTask.map((each, index) =>(
        <SingleTask key ={index} id={index} taskName= {each} handleDelete={handleDelete} handleTextToggle={props.handleTextToggle} /> ))}
           
    
    </>
)
}


function SingleTask(props){


    return(
     <div className="newTask" onClick={()=>props.handleTextToggle(props.taskName)}>
        <p>{props.taskName}</p>
        <button onClick={()=>props.handleDelete(props.id, props.taskName)}><FontAwesomeIcon icon={faTrash} style={{color: "#db3d45"}} /></button>
     </div>
    )
}

function NotContent(props){

    return(
        <>
        <div className="header">
            <h2>Edit</h2>
            <div>
                <button className="saving"  onClick={()=>props.handleRead(false)}>save</button>
                <button className="pen-cont" onClick={()=>props.handleRead(true)}><FontAwesomeIcon icon={faPenFancy} className="pen" /></button>
            
            </div>
         
            </div>
         
                <div className="content">
                    <p>{props.currentTask}</p>
                   { props.readable ? <div className="input-cont">
                    <input type="text" name="title" className="title" placeholder="Title ..."
                    value={props.title} onChange={props.handleTextInput}  />
                    <input type="text" name="description" className="description" placeholder="Description ..."
                    value={props.descripton} onChange={props.handleTextInput} />
                    </div> : <div className="reading">
                    <p>{props.title}</p>
                    </div>}
                
            </div>
        </>
    )
}

export {NewTask, NotContent}