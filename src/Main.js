import React, { Component } from 'react'
import axios from 'axios'

export class Main extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        url:'https://pokeapi.co/api/v2/pokemon',
        previous:'',
        next:'',
        limitedResult:[],
        result:{}
      }
    }
    componentDidMount()
    {
        const result = axios.get('https://pokeapi.co/api/v2/pokemon/1');
        console.log(result)
            
    }

  render() {
    return (
      <div>
          {
              this.state.limitedResult.map(res=><h4 key={res.url}>{res.name}|{res.url}</h4>)
          }

      </div>
    )
  }
}

export default Main
