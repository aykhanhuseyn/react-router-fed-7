import React from 'react'
import { Link } from 'react-router-dom'

export function Home() {
    return (
      <>
        <main>
          <h2>Welcome to the homepage!</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        <nav>
          <Link to="/about">About</Link>
          <br />
          <Link to="/profile">Profile</Link>
          <br />
          <Link to="/jobs">Job list</Link>
        </nav>
      </>
    );
  }