import { Link } from "react-router-dom";

export default function Navbar() {
  return( 
  <nav>
    <Link className="link" to='/'>Home</Link>
    <Link className="link" to='/register'>Register</Link>
    <Link className="link" to='/login'>Login</Link>
  </nav>

  
  )
}
