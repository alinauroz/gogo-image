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
import ReactHtmlParser from "react-html-parser";

function Signup () {
  return <Login selected={1} />
}

let pages = [
  {title: 'Terms', content: 'Terms: This is some content', link: '/terms'},
  {title: 'About', content: 'About: This is some content', link: '/about'}
]

function App() {
  return (
    <>
      <TopBar />
      <main style = {{marginTop: 0, minHeight: window.innerHeight - 200}}>
        <Switch>
          <Route>
            <Route path="/" component={Home} exact />

            { /*`<Route path="/about" component={About} />
            <Route path="/why-us" component={WhyUs} />
            <Route path="/terms" component={Terms} />
            <Route path="/login" component={Login} />` */}

            {
              pages.map(page => {
                return <Route path = {page.link} component = {() => <p>{page.content}</p>} />
              })
            }

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
