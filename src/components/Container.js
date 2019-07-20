import React, { Component } from 'react';
import axios from 'axios';

class Container extends Component {
  constructor(props){
     super(props)
     this.state = {
         containers: []
     }
  }


  componentDidMount() {
      axios.get('http://localhost:3001/api/v1/containers.json')
      .then(response => {
          console.log(response)
          this.setState({
              containers: response.data
          })
      })
      .catch(error => console.log(error))
  }
  render() {
      return (
          <div className="Containers">
              Containers
          </div>
      )
  }
}

export default Container;
