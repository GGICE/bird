import React,{PropTypes} from 'react'
import { Provider, connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as helloActions from '../actions/'
 
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

function mapStateToProps(state) {
  return {
    text: state.text
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(helloActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(hello);