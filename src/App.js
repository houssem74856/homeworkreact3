import './App.css';
import AddNewTaskBtn from './AddNewTaskBtn';
import TodoList from './TodoList';
import { useEffect, useReducer} from 'react';
import useFetch from './useFetch';

function reducer(todos,action) {
  switch(action.type) {
    case "first" : return action.data
    case "add-todo" : return [...todos,action.blog]
    case "next" :
      return todos.map(todo => {
        if(todo.id === action.id) {return {...todo,hala : next(todo.hala)}}
        return todo})
    case "previous" : 
      return todos.map(todo => {
        if(todo.id === action.id) {return {...todo,hala : previous(todo.hala)}}
        return todo
    })
  }
}

function next(hala) {
  if(hala==="todo") return "currently"
  return "completed"
}

function previous(hala) {
  if(hala==="completed") return "currently"
  return "todo"
}

function App() {
  const data = useFetch("http://localhost:8001/todos")
    const [todos,dispatch] = useReducer(reducer,undefined)
    useEffect(() => {
      dispatch({type:"first",data:data})
    },[data])

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
