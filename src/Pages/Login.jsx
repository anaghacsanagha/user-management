import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    if (!email || !password) {
      alert("Please Fill The Fields")
      return
    }

    const registeredUser = JSON.parse(localStorage.getItem("user"))

    if (
      !registeredUser ||
      registeredUser.email !== email ||
      registeredUser.password !== password
    ) {
      alert("Invalid email or password")
      return
    }

    localStorage.setItem("isLoggedIn", "true")

    alert("Login Successful")

    navigate("/dashboard")
  }

  return (
    <div className="auth-page">

      <div className="auth-card">

        <h1>Login</h1>

        <form onSubmit={handleLogin}>

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
            Login
          </button>

          <p>
            Don't have an account?
            <Link to="/register"> Register</Link>
          </p>

        </form>

      </div>

    </div>
  )
}

export default Login