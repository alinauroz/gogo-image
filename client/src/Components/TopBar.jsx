import React from 'react'
import {Text, View, Image} from './Basic/AppComponents'
import { Link } from 'react-router-dom'

import logo from '../data/images/logo.png'
import cartIcon from '../data/icons/cart.png'

import styles from '../styles/topbar'

export default function (props) {
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