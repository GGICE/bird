import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Hello from './components/hello.jsx'
  
const App = React.createClass({
  render() {
    return (
      <div className="nav">
        <Link to="/">index</Link>
        <Link to="hello">hello</Link>
        {this.props.children}
      </div>
    )
  }
})

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/hello" component={Hello}/>
    </Route>
  </Router>
  ), document.getElementById('content'))