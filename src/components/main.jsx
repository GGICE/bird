import React,{PropTypes} from 'react'
import { Provider, connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions/'
import Hello from './hello.jsx'
 
const main = React.createClass({
  render() {
    return (
      <div>
        <Hello actions={this.props.actions} text={this.props.text}/>
      </div>
    )
  }
})

function mapStateToProps(state) {
  return {
    text: state.text
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(main);