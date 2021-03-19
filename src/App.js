import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import HeadingComponent from './HeadingComponent';
import InputComponent from './InputComponent';
import ListComponent from './ListComponent';
import toDoItems from './toDoItems';


const App = () =>{
 
  //useState
  const [todos, setTodos] = useState([toDoItems]);

//function to add object to todo array - add button
  const addTodo = (todo) =>{
    setTodos=([todo, ...todos]);
  };
  
//function to remove object from array
/* const removeTask = () =>{

}; */

  

  return (
  // rendering components
    <div className="container">
      <HeadingComponent />
      <InputComponent addTodo={addTodo}/>
      <ListComponent />
    </div>
  );
}

export default App;