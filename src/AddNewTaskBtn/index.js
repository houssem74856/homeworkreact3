import './index.css';
import { useEffect, useReducer, useState } from "react";

function AddNewTaskBtn({dispatch}) {
    const [showModal,setShowModal] = useState(false)
    
    const [title,setTitle] = useState()
    const [description,setDescription] = useState()
    const [date,setDate] = useState()
    const [tag,setTag] = useState()

    function newTodo(blog) {
        dispatch({type:"add-todo" , blog:blog})
    }

    function modal() {
      setShowModal(!showModal)
    }

    return (
        <>
        <div className="newTaskBtn">
            <button id='open-modal' onClick={modal}>Add new task !</button>
        </div>
        {showModal &&
            <div className="modal">
                <div className="overlay" onClick={modal}></div>
                <div className="modal-content">
                    <div className='modal-header'>
                        <p>ADD A NEW TASK</p>
                        <button id='close-modal' onClick={modal}>x</button>
                    </div>
                    <div className='modal-body'>
                        <input id='title' placeholder='Task Title' value={title} onChange={e => setTitle(e.target.value)} type="text" />  
                        <input id='description' placeholder='Task Description' value={description} onChange={e => setDescription(e.target.value)} type="text" />  
                        <input id='date' value={date} onChange={e => setDate(e.target.value)} type="date" /> 
                        <select id='tag' value={tag} onChange={e => setTag(e.target.value)}>
                            <option>work</option> 
                            <option>study</option>
                            <option>hobby</option>  
                        </select> 
                    </div> 
                    <div className="modal-footer">
                        <button id='cancel' onClick={modal}>Cancel</button>
                        <button id='ok' onClick={() => {newTodo({title:title,description:description,date:date,hala:"todo",tag:tag})
                                                        modal()}}>OK</button>     
                    </div> 
                </div>
            </div>
        }
        </>
    )
}

export default AddNewTaskBtn