import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Dashboard() {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [search, setSearch] = useState("")

  useEffect(() => {

    fetch("https://api.slingacademy.com/v1/sample-data/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users)
        setLoading(false)
        console.log(data.users)
      })
      .catch((error) => {
        setError("Failed to fetch users")
        setLoading(false)
      })

  }, [])

  const filteredUsers = users.filter((user) =>
    user.first_name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="dashboard">

      <h1>User Dashboard</h1>

      <input
        className="search-box"
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p>Loading......</p>}

      {error && <p>{error}</p>}

      <div className="user-grid">

        {filteredUsers.map((user) => (

          <div className="user-card" key={user.id}>

            <img
              src={user.profile_picture}
              alt={user.first_name}
            />

            <h3>
              {user.first_name} {user.last_name}
            </h3>

            <p>{user.email}</p>

            <Link to={`/user/${user.id}`}>
              <button>View Details</button>
            </Link>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Dashboard