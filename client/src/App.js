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
import PageTemplate from './Components/Templates/Page'

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
      <TopBar 
        pages = {pages}
      />
      <main style = {{marginTop: 0, minHeight: window.innerHeight - 200}}>
        <Switch>
          <Route>
            <Route path="/" component={Home} exact />

            {
              pages.map(page => {
                return <Route path = {page.link} component = {() => <PageTemplate title = {page.title} content = {page.content} />} />
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
