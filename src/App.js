import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUp from './pages/signIn-and-signUp/signIn-signUp.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

import React from 'react';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})

      console.log("--user-- ", user);
    })
  }

  componentWillUnmount(){
    
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signIn' component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
