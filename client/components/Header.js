import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import {logout} from '../store'

function Header (props) {
    return (
        <div className="header">
            <img className="header_logo" src = "https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png"/>
            
            <div className="header_search">
                <input className="header_searchInput" type="text"/>
                <SearchIcon className='header_searchIcon'/>
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

                {/* <div className="header_option">
                    <span className="header_optionLineOne">Your</span> 
                    <span className="header_optionLineTwo">Prime</span> 
                </div> */}
                
                <div className="header_optionBasket">
                    <ShoppingCartIcon />
                    <span className="header_optionLineTwo header_backetCount">0</span> 
                </div>

                <button href="#" onClick={props.handleClick} >Logout</button>
            </div>
        </div>
    )
}

const mapState = state => {
  return {
    username: state.auth.username,
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

export default connect(mapState, mapDispatch)(Header)

