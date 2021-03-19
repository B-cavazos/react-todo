import React from 'react';
import Todo from './toDoItems';


//component to render to do list
const ListComponent = ({Todo}) =>{
    return(
        <div className='row'>                
        <div className="col-6 offset-2">
            <ul>

                {Todo.map(todo=>
                    <div>
                        <li>{todo.task}</li>
                        <button className="btn btn-danger col-1 offset-1">X</button>   
                    </div>
                
                    // <Todo key={todo.indexOf()+1} Todo={todo}/>
                )}   


            </ul>  
        </div>
        <div className="col-2 offset-5">
            <hr/>
        </div>
</div>
    );
};

console.log(Todo);
export default ListComponent;

