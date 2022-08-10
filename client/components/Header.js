import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import {logout} from '../store'
import Searchbar from './Searchbar';
import { getCartNum } from "../store/cart";
function Header (props) {
  
    return (
        <div className="header">
            <Link to="/home"> <img className="header_logo" src = 'https://t4.ftcdn.net/jpg/02/74/75/35/360_F_274753587_VAYE9MdL6d2t2ALgAb60GHIwEOUROQck.jpg'/></Link>
            <div className="header_search">
                {/* <input className="header_searchInput" type="text" placeholder="Search" id="mysearch"/>
        
                <SearchIcon className='header_searchIcon'/> */}
                <Searchbar />
                {/* <span className="clear" onClick={props.clearValue}></span> */}
            </div>

            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">Hello</span>  
                    <span className="header_optionLineTwo">{ props.username }</span> 
                </div>

                <div className="header_option">
                    {/* <span className="header_optionLineOne">View</span>  */}
                    {/* <span className="header_optionLineTwo">& Profile</span>  */}
                    <span className="header_optionLineTwo"><Link className='m'to={`/users/${props.id}`}>profile</Link></span> 
                </div>

                 <Link to={`/checkout/${props.id}`}>
                    <div className="header_optionBasket">
                        <ShoppingCartIcon />
                        <span className="header_optionLineTwo header_backetCount">{props.getTotalNum(props.usercart)}</span> 
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
    id: state.auth.id,
    isLoggedIn: !!state.auth.id,
    cart: state.usercart,
    usercart: state.usercart
  }
}

const mapDispatch = dispatch => {
    return {
      getTotalNum: (cart) => getCartNum(cart),
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

