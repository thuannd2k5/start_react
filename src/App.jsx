import './components/todo/todo.css'
import TodoList from './components/todo/TodoList'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'


const App = () => {

  const hoidanit = 'Hoidanit - ReactJS';
  const data = {
    address: 'Hanoi',
    country: 'Vietnam',
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoList
        name={hoidanit}
        data={data}
      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
