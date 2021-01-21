import React, {useState} from 'react';
import Register from './components/Register/Register';
import Signin from './components/Signin/Signin';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import './App.css';

const App = () => {
  const [user, setUser] = useState({id: 1});
  const [url, setUrl] = useState('/home');
  const [isSignedIn, setIsSignedIn] = useState(true);

  const handleRouteChange = (route) => {
    if (route === 'signout') {
      setUrl('/signin');
      setIsSignedIn(false);
    } else if (route === 'signin') {
      setUrl('/signin');
    } else if (route === 'register') {
      setUrl('/register');
    } else if (route === 'home') {
      setUrl('/home');
      setIsSignedIn(true);
    }
  }

  return (
    <div>
      {
      isSignedIn === true
      ? (
        <div>
          <Navigation isSignedIn={isSignedIn} onRouteChange={handleRouteChange} />
          <Home userId={user.id} />
        </div>
        )
      : (
        url === '/signin'
        ? <Signin onRouteChange={handleRouteChange} />
        : <Register onRouteChange={handleRouteChange} />
        )
      }
    </div>
  );
}

export default App;