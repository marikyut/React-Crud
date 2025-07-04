import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { loginSuccess } from './redux/authSlice'

const Login = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    
    try {
      const res = await axios.post('http://localhost:5000/api/login', {
        username,
        password,
      })

      dispatch(loginSuccess(res.data))
    } catch (err) {
        console.error(err)
      setError('Invalid username or password')
    }
  }
  console.log('Login component rendered')

  return (
    <form onSubmit={handleLogin} className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <input
        type="text"
        placeholder="Username"
        className="border p-2 w-full mb-2"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
        Login
      </button>
    </form>
  )
}

export default Login
