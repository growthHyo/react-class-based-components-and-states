import React, {Component} from 'react';

export class Root extends Component {
  constructor(props){
    super(props)
  }

  state = {
    count: 0
  }

  up = () => {
    this.setState(
      ({count}) => ({
        count: count + 1
      })
    )
  }

  down = () => {
    this.setState(
      ({count})=>{
        if(count >=1){
          return{
            count: count - 1
          }
        }
      }
    )
  }
  reset = () => {
    this.setState({count:0})
  }

  render() {
    return (
      <div>
        <h1>Counter Example !!</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.up}>Up</button>
        <button onClick={this.down}>Down</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
