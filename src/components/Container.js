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
          <div className="containers">
              ./components/Containers.js
              {this.state.containers.map( container => {
                    return (
                        <div className="single-container" key={container.id}>
                            <h4>{container.title}</h4>
                            <p>{container.source}</p>
                            <p>{container.heights}</p>
                            <br/>
                        </div>
                    )
                })}
          </div>
      )
  }
}

export default Container;
