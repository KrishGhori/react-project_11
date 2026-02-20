import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment , incrementByAmount, reset } from './Feature/CounterSlice';

function App() {
  const [amount , setamount] = useState();
  const count = useSelector((state)=> state.counter.value);
  const dishpach = useDispatch();
  function handleincrement(){
    dishpach(increment());
  }

   function handledicrement(){
    dishpach(decrement());
  }

  function handleRestart(){
    dishpach(reset());
  }

  function handleamount(){
    dishpach(incrementByAmount(amount));
  }

 

  return (
    <div>
      <button onClick={handleincrement}>+</button>
      <p>count is :{count}</p>
      <button onClick={handledicrement}>-</button>
      <br />
      <br />

      <button onClick={handleRestart}>Restart</button>

      <br />
      <br />
      <input type="number"
      value={amount} 
      placeholder='enter amount'
      onChange={(e) => setamount(e.target.value)}/>

      <br />
      <br />
      <button onClick={handleamount}>inc by amount</button>

    </div>
  )
}

export default App
