import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Register() {

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister = (e) => {
    e.preventDefault()

    if (!name || !email || !password) {
      alert("Please Fill The Fields")
      return
    }

    if (password.length < 8) {
      alert("Password Must Be At Least 8 Characters")
      return
    }

    const existingUser = JSON.parse(localStorage.getItem("user"))

    if (existingUser && existingUser.email === email) {
      alert("Email already exists")
      return
    }

    const user = {
      name: name,
      email: email,
      password: password
    }

    localStorage.setItem("user", JSON.stringify(user))

    alert("Registration Successful")

    navigate("/login")
  }

  return (
    <div className="auth-page">

      <div className="auth-card">

        <h1>Register</h1>

        <form onSubmit={handleRegister}>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Register
          </button>

        </form>

      </div>

    </div>
  )
}

export default Register