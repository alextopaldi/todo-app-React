import React, { useEffect, useState } from 'react';
import { AddTodoButton } from './components/AddTodoButton';
import { TodoCreateModal } from './components/todoCreateModal';
import { TodoItem } from './components/todoItem';
import { ITodoItem } from './models/todoItem';
import { CSSTransition } from 'react-transition-group';
import  './App.css'



function App() {

  const [todoModalVision, setTodoModalVision] = useState(false)

  const [todos, setTodos] = useState<ITodoItem[]>([])


  useEffect(() => {
    const raw : any = localStorage.getItem('todos') || []
    setTodos(JSON.parse(raw))
  }, [])
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const SubmitHandlerAdd = (todo: ITodoItem) => {
    setTodos([
      ...todos, todo
     ])
     setTodoModalVision(false)
  }

  const DeleteTodo = (id : number) => {
    setTodos(todos.filter(todo => {
      return todo.id !== id
    }))
  }

  const toggleTodo = (id : number) => {
    setTodos(todos.map(todo => {
      if (todo.id == id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }
  

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      <h1 className='text-center font-bold'>Todo app!</h1>
      {todos.map(todo => <TodoItem onToggle={toggleTodo} onX={DeleteTodo} todoItem={todo} key={todo.id}/>)}
      <CSSTransition in={todoModalVision} timeout={2000} classNames="my-node" unmountOnExit mountOnEnter>
        <div className='my-node'>
          {todoModalVision && <TodoCreateModal onSubmit={SubmitHandlerAdd}/>}
        </div>
      </CSSTransition>
      <AddTodoButton onOpen={() => setTodoModalVision(true)}/>
    </div>
  );
}

export default App;
