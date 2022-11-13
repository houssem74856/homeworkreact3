import "./index.css";

function Todos({dispatch,todos,hala,previous,next}) {
    const todosMod = todos.filter((todo) => todo.hala === hala)
    
    return (
        todosMod.map(todo => {
        return (
            <div className='todo'>
                {todo.tag === 'work' &&<div className='color-work'></div>}
                {todo.tag === 'study' &&<div className='color-study'></div>}
                {todo.tag === 'hobby' &&<div className='color-hobby'></div>}
                <h3 className='todotitle'>{todo.title}</h3> 
                <p className='tododescription'>{todo.description}</p> 
                <div className="dateBtns">
                    <p className="date">{todo.date}</p>   
                    {previous && <button className="previous" onClick={() => dispatch({type:"previous",id:todo.id,halo:todo.hala})}>Previous</button>}
                    {next && <button className="next" onClick={() => dispatch({type:"next",id:todo.id,halo:todo.hala})}>Next</button>}
                </div>  
            </div>
        )
    })
    
    )
}

export default Todos