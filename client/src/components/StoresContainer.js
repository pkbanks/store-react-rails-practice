import React, { Component } from 'react';
import axios from 'axios';

class StoresContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      stores: []
    }
  }

  componentDidMount() {
    axios.get('/api/v1/stores.json')
    .then(response => {
      console.log(response)
      this.setState({
        stores: response.data
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="Stores-Container">
        <div>Stores</div>
        {this.state.stores.map( store => {
          return (
            <div className="single-store" id={store.id}>{store.name}</div>
          )
        })}
      </div>
    )
  }
}

export default StoresContainer;