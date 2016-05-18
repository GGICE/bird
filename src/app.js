import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider, connect} from 'react-redux'
import Hello from './components/hello.jsx'
import Reduxs from './reducers/'
  
let store = createStore(Reduxs)
  
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
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/hello" component={Hello}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('content'))

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)