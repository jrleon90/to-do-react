import Typography from "@material-ui/core/Typography";
import React, {useState} from 'react';
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);

    function addToDo(todo) {
        setTodos([todo, ...todos]);
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    function toggleComplete(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            })
        );
    }

  return (
    <div className="App">
      <Typography style={{ padding: 16 }} variant="h1">
        React To Do List App
      </Typography>
        <TodoForm addToDo={addToDo} />
        <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleComplete={toggleComplete}
        >
        </TodoList>
    </div>
  );
}

export default App;
