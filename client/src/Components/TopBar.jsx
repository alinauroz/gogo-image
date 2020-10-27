import React from 'react'
import {Text, View, Image} from './Basic/AppComponents'
import { Link } from 'react-router-dom'

import logo from '../data/images/logo.png'
import cartIcon from '../data/icons/cart.png'

import styles from '../styles/topbar'

export default function () {
    return (
        <div>
            <Image
                source = {logo}
                style = {{maxHeight: 60}}
            />
            <div
                style = {{marginRight: 20, float: 'right', display: 'inline-block', marginTop: 20}}
            >
                <Link to = '/home' className = 'topbar-links'>Home</Link>
                <Link to = '/about' className = 'topbar-links'>About</Link>
                <Link to = '/why-us' className = 'topbar-links'>Why Us</Link>
                <Link to = '/blog' className = 'topbar-links'>Blog</Link>
                <Link to = '/FAQ' className = 'topbar-links'>FAQ</Link>
                <Link to = '/Editor' className = 'topbar-links'>Editor</Link>
                <Link to = '/join-us' className = 'topbar-links'>Join Us</Link>
                <Link to = '/dashboard' className = 'topbar-links'>Dashboard</Link>
                <Link to = '/cart' className = 'topbar-links'>
                    <View style = {{display: 'inline', overflow: 'hidden'}}>
                    <Text style = {styles.cartItemCount}>99</Text>
                    <Image 
                        source = {cartIcon}
                        style = {{height: 20, position: 'absolute', zIndex: -1, marginLeft: -35, marginTop: 10}}
                    />
                    </View>
                </Link>
                <Link to = '/login' className = 'topbar-links'>Login/Sign Up</Link>
            </div>
        </div>
    )
}