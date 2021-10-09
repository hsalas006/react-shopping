import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUp from './pages/signIn-and-signUp/signIn-signUp.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signIn' component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
