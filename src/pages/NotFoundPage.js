import React from 'react'
import { Link } from 'react-router-dom'
import Navbar1 from '../components/Navbar1'

export default function NotFoundPage() {
  return (
    
        <div>
          <Navbar1/>
            <p>404 - Not Found</p>
            <Link to="/">Go to Home page</Link>
        </div>
      
   
  )
}
