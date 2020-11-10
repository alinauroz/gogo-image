import React, { useEffect } from 'react'
import {Text, View, Image} from './Basic/AppComponents'
import { Link } from 'react-router-dom'

import logo from '../data/images/logo.png'
import cartIcon from '../data/icons/cart.png'

import styles from '../styles/topbar'

let isLoggedIn = localStorage.getItem('token');
let user = JSON.parse(localStorage.getItem('user') || '{}');
console.log("USER", user)

export default function (props) {

    const [DDView, setDDView] = React.useState('block');

    return (
        <div>
            <Image
                source = {logo}
                style = {{maxHeight: 60}}
            />
            <div
                style = {{marginRight: 20, float: 'right', display: 'inline-block', marginTop: 20}}
            >
                <Link to = '/' className = 'topbar-links'>Home</Link>
                {
                    props.pages ?
                    props.pages.map(page => {
                        return <Link to = {page.link} className = 'topbar-links'>{page.title}</Link>
                    })
                    : ""
                }
                {
                    isLoggedIn ?
                    <Link to = '/dashboard' className = 'topbar-links'>Dashboard</Link>
                    : ""
                }
                <Link to = '/cart' className = 'topbar-links'>
                    <View style = {{display: 'inline', overflow: 'hidden'}}>
                    <Text style = {styles.cartItemCount}>99</Text>
                    <Image 
                        source = {cartIcon}
                        style = {{height: 20, position: 'absolute', zIndex: -1, marginLeft: -35, marginTop: 10}}
                    />
                    </View>
                </Link>
                {
                    isLoggedIn ?
                    <a style = {{cursor: 'pointer'}} onClick = {() => setDDView('none')}className = 'topbar-links'>{user.firstName + ' ' + user.lastName}</a>
                    : <Link to = '/login' className = 'topbar-links'>Login/Sign Up</Link>
                }
            </div>
            <View style = {{display: DDView, position: 'absolute', top: 60, right: 10, padding: 5, boxShadow: '0px 0px 3px grey', width: 250, background: '#fff'}}>
                <Text><b>{user.firstName + ' ' + user.lastName}</b></Text>
                <Text>{user.email}</Text>
                <Link to = '/dashboard'>
                    <input 
                        type = 'button'
                        value = 'Profile'
                        className = 'dropdown-button'
                        style = {{marginTop: 5}}
                    />
                </Link>
                <input 
                    type = 'button'
                    value = 'Logout'
                    className = 'dropdown-button'
                    onClick = {() => {
                        localStorage.setItem('user', '');
                        localStorage.setItem('token', '');
                        window.location.reload();
                    }}
                />
                <input 
                    type = 'button'
                    value = 'Cancel'
                    className = 'dropdown-button'
                    onClick = {() => {
                        setDDView('none')
                    }}
                />
            </View>
        </div>
    )
}