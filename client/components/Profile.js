import React from "react";
import { connect } from "react-redux";
import { updateUser } from "../store/auth";




export class Profilc extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            address: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
          });
    }


    handleSubmit(evt) {
        evt.preventDefault();
        this.props.updateUser({id:this.props.id, ...this.state });
      }


    render(){
        return (
            <div className="profile">  
                 <p><small>current username: </small><strong>{this.props.username}</strong></p>
                 <p><small>current email: </small><strong>{this.props.email}</strong></p>
                 <p><small>current address: </small><strong>{this.props.address}</strong></p>
            <form onSubmit={ this.handleSubmit }>
              <p><strong>Update: </strong></p>  
              
              <label htmlFor= "username">Update User username: </label>
              <input name="username" onChange= { this.handleChange } value= { this.state.username } />

              <label htmlFor= "email">Update User email: </label>
              <input name="email" onChange= { this.handleChange } value= { this.state.email } />

              <label htmlFor= "address">Update User address: </label>
              <input name="address" onChange= { this.handleChange } value= { this.state.address } />

              <button type= "submit">Submit</button>
             
            </form> 
            </div>
            )
    }
}

const mapState = state => {
    return {
      username: state.auth.username,
      id: state.auth.id,
      email: state.auth.email,
      address: state.auth.address,
      isLoggedIn: !!state.auth.id,
    }
  }

  const mapDispatch = (dispatch) => {
    return {
        updateUser: (user) => dispatch(updateUser(user)),
    };
  };
export default connect(mapState, mapDispatch)(Profilc)