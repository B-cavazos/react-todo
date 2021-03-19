import {useState} from 'react';

//component to input values - todo form
const InputComponent = ({addTodo}) =>{

    // define a STATE here to keep track of input from the user
    const [todo,setTodos] = useState({
        id:'',
        task:'',
        completed: false,
    }); 

    console.log(todo);

    // define FUNCTION that will UTILIZE STATE to handle user inputs
    const handleInputChange = (event) =>{
        setTodos({...todo, task: event.target.value}); //updates state: copy current state, add new values in task property via value input event
    };

    // handleSubmit functions
    const handleSubmit = (e) =>{ //param is an event
        e.preventDefault(); //prevent automatic page reload
        addTodo({...todo,id:''}); // add object, then add object - incomplete
        addTodo(...todo,' '); //reset form - incomplete

    };

    return(
        <div className="row">
            <div className="col-8 offset-2">

                <form action='submit' id='toDoForm' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="toDoInput">I need to...</label>
                        <input 
                        type="text" 
                        id="toDoInput" 
                        className="col"
                        value={todo.task} // where the imputs are going
                        onChange={handleInputChange} //what happens during input events
                        />           
                    </div>
                    <div className='form-group'>
                        <button type='submit'className='btn btn-primary col-2' onClick={addTodo}>Add</button> 
                    </div>
                </form>

            </div>
        </div>
    );
};

export default InputComponent;