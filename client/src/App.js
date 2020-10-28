import React from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom';

import TopBar from './Components/TopBar'
import Footer from './Components/Footer'
import About from './Components/pages/About'
import WhyUs from './Components/pages/WhyUs'
import Login from './Components/pages/LogSign'
import Terms from './Components/pages/Terms'
import Home from './Components/pages/Home'
import Cart from './Components/pages/Cart'
import ResetPassword from './Components/pages/ResetPassword'

function Signup () {
  return <Login selected={1} />
}

function App() {
  return (
    <>
      <TopBar />
      <main style = {{marginTop: 0, minHeight: window.innerHeight - 200}}>
        <Switch>
          <Route>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/why-us" component={WhyUs} />
            <Route path="/terms" component={Terms} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/cart" component={Cart} />
            <Route path="/reset-password" component={ResetPassword} />
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
