import './App.css';
import AddNewTaskBtn from './AddNewTaskBtn';
import TodoList from './TodoList';
import { useEffect, useReducer, useState } from 'react';
import useFetch from './useFetch';

function reducer(todos,action) {
  let td = null
  switch(action.type) {
    case "first" : return action.hou
    case "add-todo" : return [...todos,action.blog]
    case "next" :
      todos.map(todo => {if(todo.id === action.id) {td = todo}})
      switch(action.halo) {
        case "todo" : 
        td.hala = "currently"
        return [...todos]
        case "currently" : 
        td.hala = "completed"
        return [...todos]
      }
    case "previous" : 
    todos.map(todo => {if(todo.id === action.id) {td = todo}})
    switch(action.halo) {
      case "currently" : 
      td.hala = "todo"
      return [...todos]
      case "completed" : 
      td.hala = "currently"
      return [...todos]
    }
  }
}

function App() {
  const hou = useFetch("http://localhost:8001/todos")
    const [todos,dispatch] = useReducer(reducer,undefined)
    useEffect(() => {
      dispatch({type:"first",hou:hou})
    },[hou])

  return (
    <div className="App">
      {todos && <AddNewTaskBtn dispatch={dispatch}/>}
      <div className='TodoLists'>
        {todos && <TodoList dispatch={dispatch} listTitle='To Do' todos={todos} hala={"todo"} next={true} previous={false}/>}
        {todos && <TodoList dispatch={dispatch} listTitle='Currently Doing' todos={todos} hala={"currently"} next={true} previous={true}/>}
        {todos && <TodoList dispatch={dispatch} listTitle='Completed' todos={todos} hala={"completed"} next={false} previous={true}/>}
      </div>
    </div>
  );
}

export default App;
