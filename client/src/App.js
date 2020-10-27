import React from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom';

import TopBar from './Components/TopBar'
import About from './Components/pages/About'
import WhyUs from './Components/pages/WhyUs'
import Login from './Components/pages/LogSign'

function App() {
  return (
    <>
      <TopBar />
      <main style = {{marginTop: 50}}>
        <Switch>
          <Route>
            <Route path="/about" component={About} />
            <Route path="/why-us" component={WhyUs} />
          </Route>
        </Switch>
      </main>
      <Login />
    </>
  );
}

export default App;
