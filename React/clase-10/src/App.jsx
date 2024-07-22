import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem,removeItem } from './listSlice'
import { login, logout } from './AuthSlice'
import './App.css'

function App() {

  const [inputValue,setInputValue] = useState("");

  const dispatch = useDispatch();

  const list = useSelector(state=>state.list);
  const auth = useSelector(state=>state.auth);

  const handleClick = () => {
    if (inputValue) {
      dispatch(addItem(inputValue));
      setInputValue("");
    }
  };
  
  const handleRemoveClick= (item) => {
    dispatch(removeItem(item))
  }

  const handleLogin = () => {
    dispatch(login({ name: 'User', email: 'user@example.com' }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
     <h1>Practicando Redux Toolkit con lo que nos queda</h1>
     <div>
        <h2>Authentication</h2>
        {auth.isAuthenticated ? (
          <div>
            <p>Welcome, {auth.user.name}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div>
     <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
        placeholder="Agregar un elemento"
      />
      <button onClick={handleClick}>Agregar</button>
      <ul>
        {list.map((item,index)=>(
          <li key={index}>
            {item}
            <button onClick={()=>handleRemoveClick(item)}>Eliminar</button>

          </li>
        ))}
      </ul>
     </div>
    </>
  )
}

export default App
