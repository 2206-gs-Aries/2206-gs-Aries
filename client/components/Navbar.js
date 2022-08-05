import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import Header from './Header'


const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
   
    <nav className='sticky'>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Header />    
        </div>
      ) :<span></span>}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)
