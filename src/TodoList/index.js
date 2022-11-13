import Todos from '../Todos';
import './index.css';

function TodoList({dispatch,listTitle,todos,hala,next,previous}) {
    
    return (
        <div className="todolist">
            <h2>{listTitle}</h2>
            <Todos dispatch={dispatch} todos={todos} hala={hala} next={next} previous={previous}/>
        </div>
    )
}

export default TodoList;