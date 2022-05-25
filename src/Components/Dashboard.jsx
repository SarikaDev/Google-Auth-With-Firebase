import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
      
      setError("")
    try {
        navigate('/login')
      await logout()
    } catch {
        setError("Failed to log out")
    }
  }

  const userName=currentUser.email;
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong>  {userName.toUpperCase()}
          <Link to="/updateProfile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button  onClick={handleLogout}>
          Log Out
        </Button>
      
      </div>
     
    </>
  )
}