import React, { useEffect } from 'react'
import {Text, View, Image} from './Basic/AppComponents'
import { Link } from 'react-router-dom'
import {api} from '../data/api'

import logo from '../data/images/logo.png'
import cartIcon from '../data/icons/cart.png'

import styles from '../styles/topbar'

let isLoggedIn = localStorage.getItem('token');
let user = JSON.parse(localStorage.getItem('user') || '{}');

export default function (props) {
    const info = props.info || {}
    const [DDView, setDDView] = React.useState('none');
    const [leftbarView, setLeftbarView] = React.useState('none')

    return (
        <div>
            <Image
                source = {api + 'images/' + info.logo}
                style = {{maxHeight: 60, marginLeft: 20}}
            />
            <View 
                className = 'mobile-menu'
            >
                <p 
                onClick = {() => setLeftbarView('inline-block')}>
                ☰
                </p>
            </View>
            <div
                style = {{marginRight: 20, float: 'right', display: 'inline-block', marginTop: 20}}
                className = 'topbar-desktop-links'
            >
                <Link to = '/' className = 'topbar-links'>Home</Link>
                <Link to = '/gallery' className = 'topbar-links'>Gallery</Link>
                <Link to = '/blogs' className = 'topbar-links'>Blogs</Link>
                <Link to = '/faqs' className = 'topbar-links'>FAQs</Link>
                {
                    props.pages ?
                    props.pages.map(page => {
                        return <Link to = {page.url} className = 'topbar-links'>{page.title}</Link>
                    })
                    : ""
                }
                {
                    isLoggedIn ?
                    (
                        <>
                            <Link to = '/dashboard' className = 'topbar-links'>Dashboard</Link>
                            <Link to = '/orders' className = 'topbar-links'>Orders</Link>
                        </>
                    )
                    : ""
                }
                <Link to = '/cart' className = 'topbar-links'>
                    <View style = {{display: 'inline', overflow: 'hidden'}}>
                        <Text style = {styles.cartItemCount}>{props.cartLength}</Text>
                    <Image 
                        source = {cartIcon}
                        style = {{height: 20, position: 'absolute', zIndex: -1, marginLeft: -35, marginTop: 10}}
                    />
                    </View>
                </Link>
                {
                    isLoggedIn ?
                    <a style = {{cursor: 'pointer'}} onClick = {() => setDDView('block')} className = 'topbar-links'>{user.firstName + ' ' + user.lastName}</a>
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
                <Link to = '/change-password'>
                    <input 
                        type = 'button'
                        value = 'Security'
                        className = 'dropdown-button'
                    />
                </Link>
                <input 
                    type = 'button'
                    value = 'Logout'
                    className = 'dropdown-button'
                    onClick = {() => {
                        localStorage.setItem('user', '');
                        localStorage.setItem('token', '');
                        document.cookie = '';
                        window.location = '/';
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
            <View className = 'topbar-mobile-links' style = {{display: leftbarView}}>
                <View className = 'topbar-links-container'>
                    <View className = 'topbar-button'>
                    <Image
                        source = {api + 'images/' + info.logo}
                        style = {{maxHeight: 60, marginLeft: 0}}
                    />
                    </View>
                    <Link to = '/' onClick = {() => setLeftbarView('none')}  className = 'topbar-button' style = {{marginTop: 30}}>Home</Link>
                    <Link to = '/gallery' onClick = {() => setLeftbarView('none')}  className = 'topbar-button'>Gallery</Link>
                    <Link to = '/blogs' onClick = {() => setLeftbarView('none')}  className = 'topbar-button'>Blogs</Link>
                    <Link to = '/faqs' onClick = {() => setLeftbarView('none')}  className = 'topbar-button'>FAQs</Link>
                    {
                        props.pages ?
                        props.pages.map(page => {
                            return <Link onClick = {() => setLeftbarView('none')}  to = {page.url} className = 'topbar-button'>{page.title}</Link>
                        })
                        : ""
                    }
                    {
                        isLoggedIn ?
                        (
                            <>
                                <Link to = '/dashboard' onClick = {() => setLeftbarView('none')} className = 'topbar-button'>Dashboard</Link>
                                <Link to = '/orders' onClick = {() => setLeftbarView('none')} className = 'topbar-button'>Orders</Link>
                            </>
                        )
                        : ""
                    }
                    <Link to = '/cart' onClick = {() => setLeftbarView('none')}  className = 'topbar-button'>
                        <View style = {{display: 'inline', overflow: 'hidden'}}>
                            <Text>Cart</Text>
                            <Text style = {{... styles.cartItemCount, float: 'right', marginRight: 20}}>{props.cartLength}</Text>
                        </View>
                    </Link>
                    {
                        isLoggedIn ?
                        <a style = {{cursor: 'pointer'}} onClick = {() => setDDView('block')} className = 'topbar-button'>{user.firstName + ' ' + user.lastName}</a>
                        : <Link onClick = {() => setLeftbarView('none')}  to = '/login' className = 'topbar-button'>Login/Sign Up</Link>
                    }
                </View>
                <View className = 'topbar-link-action-container'>
                    <p 
                        style = {{fontSize: 18, padding: 7.5}}
                        onClick = {() => setLeftbarView('none')}
                    >
                        ✖
                    </p>
                </View>
            </View>
        </div>
    )
}