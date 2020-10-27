import React from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom';

import TopBar from './Components/TopBar'
import About from './Components/pages/About'
import WhyUs from './Components/pages/WhyUs'
import Login from './Components/pages/LogSign'
import Terms from './Components/pages/Terms'

function Signup () {
  return <Login selected={1} />
}

function App() {
  return (
    <>
      <TopBar />
      <main style = {{marginTop: 50}}>
        <Switch>
          <Route>
            <Route path="/about" component={About} />
            <Route path="/why-us" component={WhyUs} />
            <Route path="/terms" component={Terms} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
