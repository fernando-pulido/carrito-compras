import { Link } from 'react-router-dom'

import '../App.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/home" className="navbar-brand  ">
          Store Developers
        </Link>
        <Link to="/cart">
          <button className="btn btn-danger">Cart</button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
