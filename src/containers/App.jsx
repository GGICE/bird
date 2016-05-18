import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider, connect} from 'react-redux'
import Hello from '../components/hello.jsx'
import * as Actions from '../actions/'
    
const App = React.createClass({
  render() {
    return (
      <div className="nav">
        <Link to="/">index</Link>
        <Link to="hello">hello</Link>
      </div>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="/hello" component={Hello}/>
        </Route>
      </Router>
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

export default App