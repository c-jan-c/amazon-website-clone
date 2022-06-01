import './App.css';
import React, { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('The user is >>> ', authUser);
      if(authUser) {
        //user logged in or was already logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/login' element={
            <>
            <Login/>
            </>}
          />
          <Route path='/checkout' element={
            <>
            <Header/>   
            <Checkout/>
            </>}
          />
          <Route path='/' element={
            <>
            <Header/>
            <Home/>
            </>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
