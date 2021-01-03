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
import Gallery from './Components/pages/Gallery'
import ChangePassword from './Components/pages/ChangePassword'
import Checkout from './Components/pages/Checkout'
import FAQS from './Components/pages/FAQS'
import Blogs from './Components/pages/Blogs'
import BlogPost from './Components/pages/BlogPost'
import Orders from './Components/pages/Orders'
import Order from './Components/pages/Order'
import ContactUs from './Components/pages/ContactUs'
import MaintenanceMode from './Components/pages/MaintenanceMode'
import ForgotPass from './Components/pages/ForgotPass'
import PP from './Components/Unit/PP'

const admin = JSON.parse(localStorage.getItem('admin') || '{}');

let cartContent = JSON.parse(localStorage.getItem('cart') || '[]')

function Signup () {
  return <Login selected={1} />
}

const modes = Object.freeze({
  MAINTENANCE: 1,
  LOADING: 0,
})

let posts_ = [
  //{tags: [], use: ['party', 'dance'], images: ['https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg']},
  //{tags: [], use: {}, images: ['https://colorado-springs.s3.amazonaws.com/CMS/5104/almagre_mountain_credit_matt_payne_photography_small__large.jpg']},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 125)) +'x300?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 125)) +'x300?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 125)) +'x300?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 125)) +'x300?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 125)) +'x300?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 125)) +'x300?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 125)) +'x300?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 125)) +'x300?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 125)) +'x300?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 125)) +'x300?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 125)) +'x300?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 125)) +'x300?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 125)) +'x300?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 125)) +'x300?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 125)) +'x300?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 125)) +'x300?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 125)) +'x300?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 125)) +'x300?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 125)) +'x300?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 125)) +'x300?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 125)) +'x300?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 125)) +'x300?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 125)) +'x300?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 125)) +'x300?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 125)) +'x300?sig=' + Math.floor(Math.random() * 9e9)]},
  {tags: [], use: {}, images: ['https://source.unsplash.com/random/'+(100 + Math.floor(Math.random() * 125)) +'x300?sig=' + Math.floor(Math.random() * 9e9)]},
]

function App() {
  const [mode, setMode] = React.useState(modes.LOADING);
  const [cart, setCart] = React.useState(cartContent)
  const [pages, setPages] = React.useState();
  const [posts, setPosts] = React.useState();
  const [info, setInfo] = React.useState();
  const [innerHeight, setInnerHeight] = React.useState(window.innerHeight)

  React.useEffect(() => {
    
    if (! pages) {
      request({route: 'pages'}).then(d => {
        setPages(d.data || [])
      })
    }

    if (! posts) {
      request({route: 'posts'}).then(d => {
        setPosts(d.data || [])
      })
    }

    if (! info) {
      request({route: 'info'}).then(d => {
        let _info = (d.data ? d.data[0] || {}: {})
        setInfo({... _info, isAdmin: admin.role && true});
        document.title = d.data ? d.data[0].name : '...'
        if (_info.maintenanceMode) {
          setMode(1);
        }
        else setMode(2);
      })
    }

    window.addEventListener('resize', () => setInnerHeight(window.innerHeight))

  })

  const addToCart = ({cartItem}) => {
    setCart([
      ... cart,
      cartItem
    ])
    localStorage.setItem('cart', JSON.stringify([... cart, cartItem]));
  }

  const removeFromCart = (index) => {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    setCart([ ... cart]);
  }

  if (mode === modes.LOADING)
    return <>...</>

  if (mode === modes.MAINTENANCE)
    return (<MaintenanceMode />)

  return (
    <>
      <TopBar 
        pages = {pages ? pages: []}
        cartLength = {cart ? cart.length : 0}
        info = {info}
      />
      <main style = {{marginTop: 0, minHeight: innerHeight - 200}}>
        <Switch>
          <Route>
            <Route path="/" info = {info} component={() => <Home posts = {posts_} info = {info} />} exact />

            {
              pages ? pages.map(page => {
                return <Route info = {info} path = {page.url} component = {() => <PageTemplate info = {info} title = {page.title} content = {page.content} />} />
              }): ""
            }
            <Route path="/login" component={(props) => <Login {... props} info = {info}></Login>} />
            <Route path="/dashboard" component={(props) => <Dashboard {... props} info = {info} />} />
            <Route path="/signup" component={(props) => <Signup {...props} info = {info} />} />
            <Route path="/cart" component={() => <Cart removeFromCart = {removeFromCart} info = {info} cart = {cart} ></Cart>} />
            <Route path='/gallery' component={() => <Gallery posts = {posts} info = {info} />}/>
            <Route path="/post/:id" component={(props) => <PostView {... props} info = {info} addToCart = {addToCart} ></PostView>} />
            <Route path="/blogpost/:id" component={(props) => <BlogPost {... props} info = {info} ></BlogPost>} />
            <Route path="/reset-password" component={() => <ResetPassword info = {info} />} />
            <Route path="/change-password" component={() => <ChangePassword info = {info} />} />
            <Route path="/checkout" component={() => <Checkout cart = {cart} info = {info} />} />
            <Route path="/faqs" component = {() => <FAQS info = {info}/>} />
            <Route path="/blogs" component = {() => <Blogs info = {info}/>} />
            <Route path='/orders' component = {() => <Orders info = {info}/>} />
            <Route path="/order/:invoice" component={(props) => <Order {... props} info = {info} />} />
            <Route path='/contactus' component = {() => <ContactUs info = {info} />} />
            <Route path='/test12' component={PP} />
          </Route>
        </Switch>
      </main>
      <Footer 
        info = {info}
        pages = {pages}
      />
    </>
  );
}

export default App;
