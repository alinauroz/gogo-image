import LeftBar from './components/LeftBar'
import './App.css'

import Home from './components/pages/Home'
import AddStaff from './components/pages/AddStaff'

const BUTTONS = Object.freeze([
  {title: 'Home'},
  {title: 'Super Admin'},
  {title: 'Add Staff'},
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

export default function () {
  return (
    <>
      <LeftBar 
        buttonList = {BUTTONS}
      />
      <div className = 'main-container'>
        <AddStaff />
      </div>
    </>
  )
}