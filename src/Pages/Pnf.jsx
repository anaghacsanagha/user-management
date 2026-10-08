import { Link } from "react-router-dom"

function Pnf() {
  return (
    <div className="pnf-page">

      <div className="pnf-card">

        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          Sorry, the page you are looking for does not exist.
        </p>

        <Link to="/login">
          Go to Login
        </Link>

      </div>

    </div>
  )
}

export default Pnf