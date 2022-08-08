import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import { Login, Signup } from './components/AuthForm';
import Home from './components/Home';
import {me} from './store'
import SignInSide from './components/SignInSide'
import SignUp from './components/Signup';
import Checkout from './components/Checkout'
import Product from './components/Product'
import Payment from './components/Payment'
import Pay from './components/Pay'
import Profile from './components/Profile'
/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/home/:id" component={Product} />
            <Route path='/payment' component={ Payment }/>
            <Route path="/home" component={ Home } />
            <Route path="/pay" component={ Pay } />
            <Route path='/users/:id' component={ Profile} />
            <Route path="/checkout/:id" component={ Checkout } />
            <Redirect  to="/home" />
          </Switch>
        ) : (
          <Switch>
            <Route path='/' exact component={ SignInSide } />
            <Route path="/login" component={Login} />
            <Route path="/signin" component={ SignInSide } />
            <Route path="/signup" component={ SignUp } />
          </Switch>
        )}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))
