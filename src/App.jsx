import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from './store/slices/counter'
import { useState } from 'react'

function App() {
  
  const {counter} = useSelector(state => state.counter)
 
  const dispatch = useDispatch()

  const [number, setNumber] = useState(0)


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>count is {counter}</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          decrement
        </button>
        <div>
        <button onClick={() => dispatch(incrementByAmount(+number))}>
          increment by :
        </button>
        <input type='number'onChange={(e) => setNumber(e.target.value)} />
        </div>
      </div>
    </>
  )
}

export default App
