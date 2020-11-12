import React, { useEffect } from 'react'
import LeftBar from './components/LeftBar'
import './App.css'

import Login from './components/pages/Login'
import Home from './components/pages/Home'
import AddStaff from './components/pages/AddStaff'
import CreatePage from './components/pages/CreatePage'
import AddCoupon from './components/pages/AddCoupon'
import AddFaq from './components/pages/AddFaq'
import ViewBlogs from './components/pages/ViewBlogs'
import Topbar from './components/Topbar'
import CompanyProfile from './components/pages/CompanyProfile'
import SetPrice from './components/pages/Price'

export default function () {

  const [screen, setScreen] = React.useState('ViewBlogs1');
  const [base, setBase] = React.useState({});

  const setAppBase = (data) => {
    setBase({... base, [screen]: data});
  }

  useEffect(() => {
    console.log(base);
  })

  const BUTTONS = Object.freeze([
    {title: 'Home', onClick : () => setScreen('Home1')},
    {title: 'Super Admin'},
    {title: 'Add Staff', onClick : () => setScreen('AddStaff')},
    {title: 'Users'},
    {title: 'Manage Content'},
    {title: 'Add Pages'},
    {title: 'FAQs'},
    {title: 'Add FAQs'},
    {title: 'Price & Fee'},
    {title: 'Manage Posting'},
    {title: 'Sales Data'},
    {title: 'Order History'},
    {title: 'Products'},
    {title: 'Add Product'}
  ]);

  if (localStorage.getItem('token'))
  return (
    <>
      <Topbar />
      <LeftBar 
        buttonList = {BUTTONS}
      />
      <div className = 'main-container'>
        <SetPrice />
        <div style = {{display : screen == 'Home' ? 'block' : 'none'}}>
          <Home base = {base} setBase = {setAppBase} setScreen = {setScreen} />
        </div>
        <div style = {{display : screen == 'AddStaff' ? 'block' : 'none'}}>
          <AddStaff base = {base} setBase = {setAppBase} setScreen = {setScreen} />
        </div>
        <div style = {{display : screen == 'ViewBlogs' ? 'block' : 'none'}}>
          <ViewBlogs base = {base} setBase = {setAppBase} setScreen = {setScreen} />
        </div>
      </div>
    </>
  )
  else {
    return <Login />
  }
}