import React from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import {request} from './utils/AppRequest'

import TopBar from './Components/TopBar'
import Footer from './Components/Footer'
import Login from './Components/pages/LogSign'
import Home from './Components/pages/Home'
import Cart from './Components/pages/Cart'
import Dashboard from './Components/pages/Dashboard'
import ResetPassword from './Components/pages/ResetPassword'
import PageTemplate from './Components/Templates/Page'
import PostView from './Components/PostView'

function Signup () {
  return <Login selected={1} />
}

let posts = [
  {tags: [], use: ['party', 'dance'], images: ['https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg']},
  {tags: [], use: {}, images: ['https://colorado-springs.s3.amazonaws.com/CMS/5104/almagre_mountain_credit_matt_payne_photography_small__large.jpg']},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 150)) +'x200?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 150)) +'x200?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 150)) +'x200?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 150)) +'x200?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 150)) +'x200?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 150)) +'x200?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 150)) +'x200?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 150)) +'x200?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 150)) +'x200?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 150)) +'x200?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 150)) +'x200?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 150)) +'x200?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 150)) +'x200?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 150)) +'x200?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 150)) +'x200?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 150)) +'x200?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 150)) +'x200?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 150)) +'x200?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 150)) +'x200?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 150)) +'x200?sig=' + Math.floor(Math.random() * 9e9)]},
]

function App() {

  let cartContent = JSON.parse(localStorage.getItem('cart') || '[]')
  const [cart, setCart] = React.useState(cartContent)
  const [pages, setPages] = React.useState();

  React.useState(() => {
    if (! pages) {
      request({route: 'pages'}).then(d => {
        console.log(d)
        setPages(d.data || [])
      })
    }
  })

  const addToCart = ({cartItem}) => {
    setCart([
      ... cart,
      cartItem
    ])
    localStorage.setItem('cart', JSON.stringify([... cart, cartItem]));
  }

  return (
    <>
      <TopBar 
        pages = {pages ? pages: []}
      />
      <main style = {{marginTop: 0, minHeight: window.innerHeight - 200}}>
        <Switch>
          <Route>
            <Route path="/" component={() => <Home posts = {posts}></Home>} exact />

            {
              pages ? pages.map(page => {
                return <Route path = {page.url} component = {() => <PageTemplate title = {page.title} content = {page.content} />} />
              }): ""
            }

            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/signup" component={Signup} />
            <Route path="/cart" component={Cart} />
            <Route path="/post/:id" component={(props) => <PostView {... props} addToCart = {addToCart} ></PostView>} />
            <Route path="/reset-password" component={ResetPassword} />
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
