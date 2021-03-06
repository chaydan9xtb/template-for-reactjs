import React, { Component } from 'react';

const AppContext = React.createContext()
class AppProvider extends Component {
  state = {
    number: 10,
    up: () => {
      this.setState({
        number: this.state.number + 1
      })
    }

  }
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
const Green = () => (
  <div className="green">
    <AppContext.Consumer>
      {(context) => context.number}
    </AppContext.Consumer>
  </div>
)

const Blue = () => (
  <div className="blue">
    <Green />
  </div>
)

class Red extends Component {
  render() {
    return <AppProvider>
      <div className="red" style={{textAlign: "center"}}>
        <AppContext.Consumer>
          {(context) => <button onClick={context.up}>UP</button>}
        </AppContext.Consumer>
        <Blue />
      </div>
    </AppProvider>
  }
}

export default Red