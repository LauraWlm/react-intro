import React from 'react';

const Input = () => {
    return (
        <div>
        <form method="post">
        <input type="text" name="newTodo" id="newTodo" placeholder="Type a new todo"/><br/>
        <button type="submit">Add Todo</button>
        </form>
        </div>
    );
};

export default Input;