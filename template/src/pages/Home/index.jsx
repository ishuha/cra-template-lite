import React, { useState }  from 'react'
import "./home.modules.css"
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from '../../redux/Features/counter';
import {useNavigate} from 'react-router-dom'

export default function Home() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const navigate = useNavigate()
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <h2 align='center'>Home Page</h2>
      <div className={'row'}>
        <button
          className={'button'}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={'value'}>{count}</span>
        <button
          className={'button'}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={'row'}>
        <input
          className={'textbox'}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={'button'}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={'asyncButton'}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={'button'}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
      <div align='center'>
        <span onClick={()=>navigate('login')}>
          Login Page
        </span>
      </div>
    </div>
  );
}
