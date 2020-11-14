import React, { useEffect } from 'react'
import LeftBar from './components/LeftBar'
import './App.css'

import Login from './components/pages/Login'
import Home from './components/pages/Home'
import AddStaff from './components/pages/AddStaff'
import AddPost from './components/pages/AddPost'
import CreatePage from './components/pages/CreatePage'
import AddCoupon from './components/pages/AddCoupon'
import AddFaq from './components/pages/AddFaq'
import ViewBlogs from './components/pages/ViewBlogs'
import Topbar from './components/Topbar'
import CompanyProfile from './components/pages/CompanyProfile'
import SetPrice from './components/pages/Price'
import AddBlog from './components/pages/AddBlog'

export default function () {

  const [screen, setScreen] = React.useState('AddBlog');
  const [base, setBase] = React.useState({});

  const setAppBase = (data, key = screen) => {
    setBase({... base, [key]: data});
  }

  useEffect(() => {
    console.log(base);
  })

  const BUTTONS = Object.freeze([
    {title: 'Home', onClick : () => setScreen('Home')},
    {title: 'Super Admin'},
    {title: 'Add Staff', onClick : () => setScreen('AddStaff')},
    {title: 'Users'},
    {title: 'Manage Content'},
    {title: 'Add Pages', onClick: () => setScreen('AddPage')},
    {title: 'FAQs', onClick: () => setScreen('ViewFAQ')},
    {title: 'Add FAQs', onClick: () => setScreen('AddFAQ')},
    {title: 'Price & Fee', onClick: () => setScreen('SetPrice')},
    {title: 'Manage Posting'},
    {title: 'Sales Data'},
    {title: 'Order History'},
    {title: 'Products', onClick: () => setScreen('ViewProducts')},
    {title: 'Add Product', onClick: () => setScreen('AddProduct')},
    {title: 'Blogs', onClick: () => setScreen('ViewBlogs')},
    {title: 'Add Blog', onClick: () => setScreen('AddBlog')},
    {title: 'Add Coupon', onClick: () => setScreen('AddCoupon')},
    {title: 'Company Profile', onClick: () => setScreen('CompanyProfile')},
  ]);

  if (localStorage.getItem('admin_token'))
  return (
    <>
      <Topbar />
      <LeftBar 
        buttonList = {BUTTONS}
      />
      <div className = 'main-container'>
        <div style = {{display : screen == 'Home' ? 'block' : 'none'}}>
          <Home base = {base} setBase = {setAppBase} setScreen = {setScreen} />
        </div>
        <div style = {{display : screen == 'AddStaff' ? 'block' : 'none'}}>
          <AddStaff base = {base} setBase = {setAppBase} setScreen = {setScreen} />
        </div>
        <div style = {{display : screen == 'AddPage' ? 'block' : 'none'}}>
          <CreatePage base = {base} setBase = {setAppBase} setScreen = {setScreen} />
        </div>
        <div style = {{display : screen == 'AddFAQ' ? 'block' : 'none'}}>
          <AddFaq base = {base} setBase = {setAppBase} setScreen = {setScreen} />
        </div>
        <div style = {{display : screen == 'SetPrice' ? 'block' : 'none'}}>
          <SetPrice base = {base} setBase = {setAppBase} setScreen = {setScreen} />
        </div>
        <div style = {{display : screen == 'AddProduct' ? 'block' : 'none'}}>
          <AddPost base = {base} setBase = {setAppBase} setScreen = {setScreen} />
        </div>
        <div style = {{display : screen == 'AddCoupon' ? 'block' : 'none'}}>
          <AddCoupon base = {base} setBase = {setAppBase} setScreen = {setScreen} />
        </div>
        <div style = {{display : screen == 'CompanyProfile' ? 'block' : 'none'}}>
          <CompanyProfile base = {base} setBase = {setAppBase} setScreen = {setScreen} />
        </div>
        <div style = {{display : screen == 'ViewBlogs' ? 'block' : 'none'}}>
          <ViewBlogs base = {base} setBase = {setAppBase} setScreen = {setScreen} />
        </div>
        <div style = {{display : screen == 'AddBlog' ? 'block' : 'none'}}>
          <AddBlog base = {base} setBase = {setAppBase} setScreen = {setScreen} />
        </div>
      </div>
    </>
  )
  else {
    return <Login />
  }
}