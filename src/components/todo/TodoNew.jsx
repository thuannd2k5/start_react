
const TodoNew = (props) => {
    console.log('check props>>> ', props);

    const { addNewTodo } = props;
    return (
        <div>
            <input type="text" placeholder='Enter your task' />
            <button onClick={addNewTodo}>Add</button>
        </div>
    )
}

export default TodoNew;
