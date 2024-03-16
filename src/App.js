import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  /**
   * - this line is used to update the state of the current item . 
   * - todos : is the current state value .
   * - setTodos : function to update the current state (todos) .
   */

  const inputRef = useRef();
  /**
   * - this line is to create a reference object using the 'useRef' hook .
   * - it's to access the DOM node of the input field .
   * - i use the inputRef to access the input fields value directly without using 'onChange()' . 
   */

  const handleAddTodo = () => {
    const text = inputRef.current.value;
    // Retreves the current value of the input field .
    const newItem = { completed: false, text };
    /**
     * - this line is to create new item object when the user adds a new one .
     * - (completed: false) : it's to say that the new item it's not completed .
     * - text : it's to get the new value that the user adds .
     * 
     */
    setTodos([...todos, newItem]);
    // Update the todos state by adding the newItem to existing list .
    inputRef.current.value = "";
    // clear the input field after the user adds a new item .
  };

  const handleItemDone = (index) => {
    const newTodos = [...todos];
    // it's to create a new empty array for the todos . 
    newTodos[index].completed = !newTodos[index].completed;
    /**
     * this line is to access an item with a specified index and change it from :
     *  - not completed (!.completed) to : 
     *    - completed (.completed) .
     */
    setTodos(newTodos);
    // Update the state of todos using the newTodos the empty array .
  };

  const handleDeleteItem = (index) => {
    const newTodos = [...todos];
    // it's to create a new empty array for the todos . (...) : Spread .
    newTodos.splice(index, 1)
    // Removing an item in a specified index in the todos array .
    setTodos(newTodos)
    // Update the state of todos using the newTodos the empty array .
  }

  return (
    <div className="App">
      <h2>To Do List</h2>
      <div className="to-do-container">
        <ul>
          {todos.map(({ text, completed }, index) => {
            // the map method it's used to do the same thing on each item that the user add .
            return (
              <div className="item">
                <li
                  className={completed ? "done" : ""}
                  key={index}
                  // to be a unique item .
                  onClick={() => handleItemDone(index)}
                >
                  {text}
                </li>
                <span onClick={() => handleDeleteItem(index)} className="trash">❌</span>
              </div>
            );
          })}
        </ul>
        <input ref={inputRef} placeholder="Enter item..." />
        <button onClick={handleAddTodo}>Add</button>
      </div>
    </div>
  );
}

export default App;


