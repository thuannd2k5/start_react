import { useState } from "react";

const TodoList = (props) => {

    const { todoList, deleteTodo } = props;

    const handleOnClickDelete = (todoId) => {
        deleteTodo(todoId);
    }
    return (
        <div className='todo-list'>

            {todoList.map((item, index) => {
                console.log('check map : ', item, index)
                return (
                    <div className="todo-item" key={item.id}>
                        <div>{item.name}</div>
                        <button onClick={() => handleOnClickDelete(item.id)}>delete</button>
                    </div>
                )
            })}

        </div>
    )
}

export default TodoList;