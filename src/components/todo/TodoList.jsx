const TodoList = (props) => {

    const { name, data, age } = props;
    console.log('check props>>> ', props);
    return (
        <div className='todo-list'>
            <div>My name is {name}</div>
            <div>Có địa chỉ là {data.address} </div>
            <div>Tuoi : {age}</div>
            <div>watching youtobe</div>
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}

export default TodoList;