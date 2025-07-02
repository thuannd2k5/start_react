import './components/todo/todo.css'
import TodoList from './components/todo/TodoList'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'


const App = () => {

  const [todoList, setTodoList] = useState([
    // { id: 1, name: 'Learn ReactJS' },
    // { id: 2, name: 'watching movie' }
  ]);


  const addNewTodo = (value) => {
    const newTodo = {
      id: randomIntFromInterval(1, 100000),
      name: value
    }

    setTodoList([...todoList, newTodo]);
  }
  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoList
        todoList={todoList}
      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
