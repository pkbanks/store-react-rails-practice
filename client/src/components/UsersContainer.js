import React, { Component } from 'react';
import axios from 'axios';

class UsersContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get('/api/v1/users.json')
    .then(response => {
      console.log(response)
      this.setState({
        users: response.data
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="Users-Container">
        <div>Users</div>
        {this.state.users.map( user => {
          return (
            <div className="single-user" key={user.id}>
              {user.email}
            </div>
          )
        })}
      </div>
    )
  }
}

export default UsersContainer;