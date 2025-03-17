import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store/stores';
import { addTodo, removeAll, removeTodo } from './store/todoSlice';

function App() {
  const [text, setText] = useState('');
  const dispatch: AppDispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);

  const handleClick = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  const removeClick = (id: number) => {
    dispatch(removeTodo(id));
  }

  const removeAllTasks = () => {
    dispatch(removeAll());
  }

  return (
    <>
    <div>
      <h2>Todo-list</h2>
    </div>
    <input type='text' value={text} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}/>
    <button onClick={handleClick}>+</button>
    <button onClick={removeAllTasks}>Удалить все</button>
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.text}
        <button onClick={() => removeClick(todo.id)}>X</button>
        </div>
      ))}
    </div>
    </>
  )
}

export default App

