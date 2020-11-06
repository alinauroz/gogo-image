import React from 'react'
import LeftBar from './components/LeftBar'
import './App.css'

import Home from './components/pages/Home'
import AddStaff from './components/pages/AddStaff'
import CreatePage from './components/pages/CreatePage'
import AddCoupon from './components/pages/AddCoupon'
import AddFaq from './components/pages/AddFaq'

export default function () {

  const [screen, setScreen] = React.useState('Home');

  const BUTTONS = Object.freeze([
    {title: 'Home', onClick : setScreen, el: Home},
    {title: 'Super Admin'},
    {title: 'Add Staff', onClick : () => setScreen(AddStaff)},
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

  return (
    <>
      <LeftBar 
        buttonList = {BUTTONS}
      />
      <div className = 'main-container'>
        <div style = {{display : screen == 'Home' ? 'block' : 'none'}}>
          <Home />
        </div>
        <div style = {{display : screen == 'AddStaff' ? 'block' : 'none'}}>
          <AddStaff />
        </div>
      </div>
    </>
  )
}