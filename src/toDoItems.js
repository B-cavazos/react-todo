import react from 'react';

//Component to render todo items in list
const Todo = ({todo})=>{
    return(
        <div>
            <li>{todo.task}</li>
            <button className="btn btn-danger col-1 offset-1">X</button>   
        </div>
    );
};

export default Todo;