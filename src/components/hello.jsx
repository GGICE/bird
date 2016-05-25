import React from 'react'

const hello = React.createClass({
  render() {
    return (
      <div>
        <h1>hello world</h1>
        <button onClick={this.handleClick}>click</button>
          {this.props.text}
      </div>
    )
  },
  handleClick() {
    this.props.actions.buttonClick('click')
  }
})

export default hello
