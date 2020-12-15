import React, { useEffect } from 'react'
import LeftBar from './components/LeftBar'
import './App.css'

import Login from './components/pages/Login'
import Home from './components/pages/Home'
import AddStaff from './components/pages/AddStaff'
import AddPost from './components/pages/AddPost'
import CreatePage from './components/pages/CreatePage'
import ViewPages from './components/pages/ViewPages'
import EditPage from './components/pages/EditPage'
import ViewOrders from './components/pages/ViewOrders'
import ViewUsers from './components/pages/ViewUsers'
import AddCoupon from './components/pages/AddCoupon'
import ViewCoupons from './components/pages/ViewCoupons'
import AddFaq from './components/pages/AddFaq'
import ViewFAQ from './components/pages/ViewFAQ'
import EditFAQ from './components/pages/EditFAQ'
import ViewBlogs from './components/pages/ViewBlogs'
import ViewAdmins from './components/pages/ViewAdmins'
import EditStaff from './components/pages/EditStaff'
import Topbar from './components/Topbar'
import CompanyProfile from './components/pages/CompanyProfile'
import SetPrice from './components/pages/Price'
import AddBlog from './components/pages/AddBlog'
import SubmitOrder from './components/pages/SubmitOrder'

const admin = JSON.parse(localStorage.getItem('admin') || '{}');

export default function () {

  const [screen, setScreen] = React.useState('ViewAdmins');
  const [base, setBase] = React.useState({isc: {}});

  const setAppBase = (data, key, isc) => {
    if (isc) {
      base.isc[key] = data;
    }
    else {
      key = key ? key: screen;
      setBase({... base, [key]: data});
    }
  }

  useEffect(() => {
    //console.log(base);
  })

  const BUTTONS = Object.freeze([
    {title: 'Home', onClick : () => setScreen('Home')},
    {title: 'Super Admin', onClick: () => setScreen('ViewAdmins')},
    {title: 'Add Staff', onClick : () => setScreen('AddStaff')},
    {title: 'Users', onClick : () => setScreen('ViewUsers')},
    {title: 'Manage Content', onClick : () => setScreen('ViewPages')},
    {title: 'Add Pages', onClick: () => setScreen('AddPage')},
    {title: 'FAQs', onClick: () => setScreen('ViewFAQ')},
    {title: 'Add FAQs', onClick: () => setScreen('AddFAQ')},
    {title: 'Price & Fee', onClick: () => setScreen('SetPrice')},
    {title: 'Manage Posting'},
    {title: 'Sales Data'},
    {title: 'Orders', onClick: () => setScreen('ViewOrders')},
    {title: 'Submit Order', onClick: () => setScreen('SubmitOrder')},
    {title: 'Products', onClick: () => setScreen('ViewProducts')},
    {title: 'Add Product', onClick: () => setScreen('AddProduct')},
    {title: 'Blogs', onClick: () => setScreen('ViewBlogs')},
    {title: 'Add Blog', onClick: () => setScreen('AddBlog')},
    {title: 'View Coupons', onClick: () => setScreen('ViewCoupons')},
    {title: 'Add Coupon', onClick: () => setScreen('AddCoupon')},
    {title: 'Company Profile', onClick: () => setScreen('CompanyProfile')},
  ]);

  if (admin.role) {
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
        <div style = {{display : screen == 'ViewFAQ' ? 'block' : 'none'}}>
          <ViewFAQ base = {base} setBase = {setAppBase} setScreen = {setScreen} />
        </div>
        <div style = {{display : screen == 'ViewPages' ? 'block' : 'none'}}>
          <ViewPages base = {base} setBase = {setAppBase} setScreen = {setScreen} />
        </div>
        <div style = {{display : screen == 'ViewUsers' ? 'block' : 'none'}}>
          <ViewUsers base = {base} setBase = {setAppBase} setScreen = {setScreen} />
        </div>
        <div style = {{display : screen == 'ViewAdmins' ? 'block' : 'none'}}>
          <ViewAdmins base = {base} setBase = {setAppBase} setScreen = {setScreen} />
        </div>
        <div style = {{display : screen == 'ViewCoupons' ? 'block' : 'none'}}>
          <ViewCoupons base = {base} setBase = {setAppBase} setScreen = {setScreen} />
        </div>
        <div style = {{display : screen == 'ViewOrders' ? 'block' : 'none'}}>
          <ViewOrders base = {base} setBase = {setAppBase} setScreen = {setScreen} />
        </div>
        <div style = {{display : screen == 'SubmitOrder' ? 'block' : 'none'}}>
          <SubmitOrder base = {base} setBase = {setAppBase} setScreen = {setScreen} />
        </div>
        <div style = {{display : screen == 'EditPage' ? 'block' : 'none'}}>
          <EditPage base = {base} setBase = {setAppBase} setScreen = {setScreen} />
        </div>
        <div style = {{display : screen == 'EditFAQ' ? 'block' : 'none'}}>
          <EditFAQ base = {base} setBase = {setAppBase} setScreen = {setScreen} />
        </div>
        <div style = {{display : screen == 'EditStaff' ? 'block' : 'none'}}>
          <EditStaff base = {base} setBase = {setAppBase} setScreen = {setScreen} />
        </div>
      </div>
    </>
  )
  }
  else {
    console.log("LOGIN")
    return <Login />
  }
}