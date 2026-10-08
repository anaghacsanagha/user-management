import { useLocation, useNavigate } from "react-router-dom"

function Header() {

  const navigate = useNavigate()
  const location = useLocation()

  const isLoggedIn = localStorage.getItem("isLoggedIn")

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    alert("Logout successful!")
    navigate("/login")
  }

  return (
    <header>

      <h2>User Management</h2>

      {isLoggedIn && location.pathname !== "/login" && (
        <button onClick={handleLogout}>
          Logout
        </button>
      )}

    </header>
  )
}

export default Header