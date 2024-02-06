import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { getUserByEmail } from "../../services/userService"

export const Login = () => {
  const [email, set] = useState("gford@aol.com")
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    getUserByEmail(email).then((foundUsers) => {
      if (foundUsers.length === 1) {
        const user = foundUsers[0]
        localStorage.setItem(
          "analog_user",
          JSON.stringify({
            id: user.id,
            name: user.name,
            address: user.address,
            staff: user.staff,
          })
        )

        navigate("/")
      } else {
        window.alert("Invalid login")
      }
    })
  }

  return (
    <main className="container-login">
      <section>
        <form className="form-login" onSubmit={handleLogin}>
          <h1>AnalogSlogger</h1>
          <h2>Please sign in</h2>
          <fieldset>
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(evt) => set(evt.target.value)}
                className="form-control"
                placeholder="Email address"
                required
                autoFocus
              />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <button className="login-btn btn-info" type="submit">
                Sign in
              </button>
            </div>
          </fieldset>
        </form>
      </section>
      <section>
        <Link to="/register">Not a member yet?</Link>
      </section>
      <div>
      <Link to="/">Home</Link>
      </div>
    </main>
  )
}
