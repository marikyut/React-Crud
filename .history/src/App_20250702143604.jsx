import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/counterSlice'

const App = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-3xl font-bold mb-4">Redux Counter</h1>
      <p className="text-2xl mb-6">Count: {count}</p>
      <div className="flex gap-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default App
