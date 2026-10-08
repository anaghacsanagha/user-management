import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

function UserDetails() {

  const { id } = useParams()

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {

    fetch(`https://api.slingacademy.com/v1/sample-data/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data.user)
        setLoading(false)
      })
      .catch((error) => {
        setError("Failed to fetch user details")
        setLoading(false)
      })

  }, [id])

  if (loading) {
    return <p>Loading......</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div className="details-page">

      <div className="details-card">

        <h1>User Details</h1>

        {user && (
          <>

            <img
              src={user.profile_picture}
              alt={user.first_name}
            />

            <h2>
              {user.first_name} {user.last_name}
            </h2>

            <p>
              <strong>Email:</strong> {user.email}
            </p>

            <p>
              <strong>Username:</strong> {user.username}
            </p>

            <p>
              <strong>Phone:</strong> {user.phone}
            </p>

            <p>
              <strong>Gender:</strong> {user.gender}
            </p>

            <p>
              <strong>Date of Birth:</strong> {user.date_of_birth}
            </p>

            <Link to="/dashboard">
              <button>Back to Dashboard</button>
            </Link>

          </>
        )}

      </div>

    </div>
  )
}

export default UserDetails