import React,{ Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux'

import Main from './Components/main';
import Store from './Store';
const history = require('history').createBrowserHistory;

class App extends Component{


  render () {

    const pages = [
      {
        pageLink: '/',
        view: Main,
        displayName: '',
        animationDelayForNavbar: 0.2,
      },
    ];


  return (
    <div className="App">
      <Provider store={Store}>
      <Router history={history}>
        <Route
          render={({location}) => (
              <Switch location={location}>
                {pages.map((page, i) => {
                  return (
                    <Route
                      exact
                      path={page.pageLink}
                      component={page.view}
                      key={i}
                    />
                  );
                })}
                <Redirect to="/" />
              </Switch>
          )}
        />
      </Router>
      </Provider>
    </div>
  );
}
}

export default(App);