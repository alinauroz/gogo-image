import React from 'react'
import {Text, View, Image} from '../Basic/AppComponents'

let initalCart = [
    {productId: '1', quantity: '2', sup1: '1', sup2: '1'}
]

export default function () {
    let cart = localStorage.getItem('cart') || [];

    if (cart.length < 0) {
        cart = initalCart
    }

    return <></>
}