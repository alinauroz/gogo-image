import React from 'react'
import {Text, View, Image, Table, Tr, Td} from '../Basic/AppComponents'

import CartUnit from '../Unit/Cart'

export default function (props) {

    const cart = props.cart || [];

    return (
        <View style = {{display: 'block', marginTop: 50, width: '100%', marginLeft: 'calc(0% - 0px)'}}>
            <Table style = {{width: '100%'}}>
                <Tr className = 'cart-tr'>
                    <Td className = 'cart-td cart-th'>
                        <Text style = {{fontWeight: 'bold', fontSize: 13}}></Text>
                    </Td>
                    <Td className = 'cart-td cart-th'>
                        <Text style = {{fontWeight: 'bold', fontSize: 13}}>Kaboom Template</Text>
                    </Td>
                    <Td className = 'cart-td cart-th'>
                        <Text style = {{fontWeight: 'bold', fontSize: 13}}>Service Type</Text>
                    </Td>
                    <Td className = 'cart-td cart-th'>
                        <Text style = {{fontWeight: 'bold', fontSize: 13}}>Your Image</Text>
                    </Td>
                    <Td className = 'cart-td cart-th'>
                        <Text style = {{fontWeight: 'bold', fontSize: 13}}>Superimpose # 1</Text>
                    </Td>
                    <Td className = 'cart-td cart-th'>
                        <Text style = {{fontWeight: 'bold', fontSize: 13}}>Superimpose # 2</Text>
                    </Td>
                    <Td className = 'cart-td cart-th'>
                        <Text style = {{fontWeight: 'bold', fontSize: 13}}>Remove</Text>
                    </Td>
                    <Td className = 'cart-td cart-th'>
                        <Text style = {{fontWeight: 'bold', fontSize: 13}}>Total</Text>
                    </Td>
                    <Td className = 'cart-td cart-th'>
                        <Text style = {{fontWeight: 'bold', fontSize: 13}}></Text>
                    </Td>
                </Tr>
            {
                cart.map((item, index) => {
                    return (
                        <CartUnit 
                            item = {item}
                            index = {index}
                            removeFromCart = {props.removeFromCart}
                            cart = {cart}
                        />
                    )
                })
            }
            </Table>
            <View style = {{display: 'flex', justifyContent: 'flex-end', paddingRight: '10%', paddingTop: 20}}>
                {
                    (() => {
                        let totalPrice = 0;
                        cart.map(item => {
                            totalPrice += item.price;
                        })
                        return <b>Total: {totalPrice}</b>
                    })()
                }
            </View>
        </View>
    )

    return <></>
}