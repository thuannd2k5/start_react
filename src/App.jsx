import './components/todo/todo.css'
import TodoList from './components/todo/TodoList'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'


const App = () => {

  const [todoList, setTodoList] = useState([
    { id: 1, name: 'Learn ReactJS' },
    { id: 2, name: 'watching movie' }
  ]);

  const hoidanit = 'Hoidanit - ReactJS';
  const data = {
    address: 'Hanoi',
    country: 'Vietnam',
  }
  const age = 19;

  const addNewTodo = () => {
    alert('Add new todo');
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoList
        name={hoidanit}
        data={data}
        age={age}
        todoList={todoList}
      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
