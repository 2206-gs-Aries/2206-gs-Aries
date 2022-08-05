import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import {logout} from '../store'

function Header (props) {
    return (
        <div className="header">
            <Link to="/home"> <img className="header_logo" src = "https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png"/></Link>
            <div className="header_search">
                <input className="header_searchInput" type="text" placeholder="Search" id="mysearch"/>
        
                <SearchIcon className='header_searchIcon'/>
                <span className="clear" onClick={props.clearValue}></span>
            </div>

            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">Hello</span>  
                    <span className="header_optionLineTwo">{ props.username }</span> 
                </div>

                <div className="header_option">
                    <span className="header_optionLineOne">Return</span> 
                    <span className="header_optionLineTwo">& Order</span> 
                </div>

                 <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingCartIcon />
                        <span className="header_optionLineTwo header_backetCount">{props.cart.length}</span> 
                    </div>
                </Link>
             </div>

             <div>
                <button className="btn"href="#" onClick={props.handleClick} >Logout</button>
             </div>
        </div>
    )
}

const mapState = state => {
  return {
    username: state.auth.username,
    isLoggedIn: !!state.auth.id,
    cart: state.cart
  }
}

const mapDispatch = dispatch => {
    return {
      handleClick() {
        dispatch(logout())
      },
      clearValue() {
        const x = document.getElementById('mysearch')
        x.value = ''
      }
    }
  }

export default connect(mapState, mapDispatch)(Header)

