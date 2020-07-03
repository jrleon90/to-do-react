import { List } from '@material-ui/core';
import React from 'react';
import Todo from './todo';

function TodoList({todos, removeTodo, toggleComplete}) {
    return(
        <List>
            {
                todos.map(todo =>
                    <Todo
                        key={todo.id}
                        todo={todo}
                        removeTodo={removeTodo}
                        toggleComplete={toggleComplete}
                    >

                    </Todo>
                )
            }
        </List>
    )
}

export default TodoList;
