import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './Feature/CounterSlice';

function App() {
  const [amount, setAmount] = useState("");
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }

  function handleReset() {
    dispatch(reset());
  }

  function handleAmount() {
    if (amount === "") return;
    dispatch(incrementByAmount(amount));
    setAmount("");
  }

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Redux Counter App</h1>

        <div className="counter-display">
          <h2>{count}</h2>
        </div>

        <div className="button-group">
          <button className="btn primary" onClick={handleIncrement}>+</button>
          <button className="btn danger" onClick={handleDecrement}>-</button>
        </div>

        <button className="btn reset" onClick={handleReset}>
          Reset Counter
        </button>

        <div className="amount-section">
          <input
            type="number"
            value={amount}
            placeholder="Enter amount"
            onChange={(e) => setAmount(e.target.value)}
          />
          <button className="btn success" onClick={handleAmount}>
            Add Amount
          </button>
        </div>

        <p className="info">
          This counter uses Redux Toolkit for global state management.
        </p>
      </div>
    </div>
  );
}

export default App;