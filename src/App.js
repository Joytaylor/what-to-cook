import React from 'react';
import SignInSide from './views/sign-in'; 
import SignUpSide from './views/sign-up';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <Router>
      <Route exact path="/sign-in" component={SignInSide} />
      <Route path="/sign-up" component={SignUpSide} />
      </Router>
      
    );
  }
}

export default App;
