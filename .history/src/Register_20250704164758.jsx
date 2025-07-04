import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    try {
      const res = await axios.post('http://localhost:5000/api/register', {
        username,
        password,
      })

      if (res.status === 201) {
        setSuccess('Registration successful! You can now log in.')
        setUsername('')
        setPassword('')
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed')
    }
  }

  return (
    <form onSubmit={handleRegister} className="max-w-sm mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

      {error && <p className="text-red-500 mb-2">{error}</p>}
      {success && <p className="text-green-600 mb-2">{success}</p>}

      <input
        type="text"
        placeholder="Username"
        className="border p-2 w-full mb-3"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 w-full rounded hover:bg-blue-600"
      >
        Register
      </button>
    </form>
  )
}

export default Register
