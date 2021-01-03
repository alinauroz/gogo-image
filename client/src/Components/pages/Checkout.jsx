import React from 'react'
import {View, Text} from '../Basic/AppComponents'
import {request} from '../../utils/AppRequest'
import PP from '../Unit/PP'

const CheckoutField = (props) => {
    return (
        <View style = {{textAlign: 'left', fontSize: 13, marginTop: 15}}>
            <b style = {{display: 'block', margin: '5px 0px'}}>{props.title}</b>
            <input disabled = {props.disabled} type = {props.type} value = {props.value} style = {{borderRadius: 3, padding: '5px', width: 'calc(100% - 15px)', border: '1px solid lightgrey'}} />
        </View>
    )
}

const getDiscount = (coupon, totalPrice) => {

    if (totalPrice < Number(coupon.minOrder))
        return {message: 'Minimum order of $' + coupon.minOrder + ' is required for this coupon'}

    if (totalPrice <= Number(coupon.discount))
        return {applicable: true, discount: totalPrice}
    else
        return {applicable: true, discount: Number(coupon.discount)}

}

export default function (props) {

    const [nextDayService, setNextDayService] = React.useState(false);
    const [couponCode, setCouponCode] = React.useState('');
    const [couponMessage, setCouponMessage] = React.useState('');
    const [discount, setDiscount] = React.useState(0);
    const [ppView, setPPView] = React.useState(false);

    React.useEffect(() => {
        document.title = 'Checkout - ' + (props.info ? props.info.name: '');
    })

    const calulatePrice = (type = 0) => {
        let price_ = 0;

        props.cart.map(item => {
            price_ += item.price;
        })

        if (nextDayService && type >= 1)
            price_ += 10;

        return price_;
    }

    const getCoupon = async () => {

        if (couponCode) {

            let coupon = await request({
                route: 'coupons',
                method: 'GET',
                params: '/c/' + couponCode
            });

            let status = ''

            if (coupon.status == 'fail') {
                status = 'Coupon does not exist'
            }

            if (coupon.couponStatus === 'active') {
                let discount_ = getDiscount(coupon.data, totalPrice)
                if (discount_.applicable)
                    setDiscount(discount_.discount);
            }
            else if (coupon.couponStatus === 'expired') {
                status = 'This coupon is expired'
            }
            else if (coupon.couponStatus === 'iscoming') {
                status = 'This coupon is coming soon'
            }
            else if (coupon.couponStatus === 'disabled') {
                status = 'This coupon is not available at this moment'
            }

            if (status)
                alert(status)

        }

    }

    React.useEffect(() => {

        setPrice(calulatePrice())
        setTotalPrice(calulatePrice(1))
        setFinalPrice(calulatePrice(1) - discount)

    }, [nextDayService, discount]);

    const [price, setPrice] = React.useState(calulatePrice());
    const [totalPrice, setTotalPrice] = React.useState(calulatePrice(1))
    const [finalPrice, setFinalPrice] = React.useState(calulatePrice(1) - discount)

    const placeOrder = async () => {
        console.log("PLACING ORDER")
        let res = await request({
            route: 'orders',
            method: 'POST',
            credentials: 'include',
            body: {
                items: props.cart,
                price: finalPrice,
                subtotal: totalPrice,
                coupon: couponCode,
                nextDayService,
            }
        })

        console.log(res)

    }

    if (localStorage.getItem('user'))
        var user = JSON.parse(localStorage.getItem('user') || '{}');
    else
        return 'Login to Continue'

    if (ppView) {
        return (
            <div style={{position:'fixed', top: 0, left: 0, width:'100%', height: '100%', background: '#333333aa'}}>
                <div style={{textAlign: 'right', color: 'white', margin: 20}}>
                    <span 
                        style={{cursor: 'pointer', fontSize: 22}}
                        onClick={() => setPPView(false)}
                    >
                    ✕
                    </span>
                </div>
                <div style={{textAlign: 'center', marginTop: 100}}>
                    <PP 
                        total={parseFloat(finalPrice).toFixed(1)}
                        onSuccess={placeOrder}
                    />
                </div>
            </div>
        )
    }

    return (
        <View style = {{textAlign: 'center', marginTop: 20}}>
            <View className = 'box inline-box' style = {{textAlign: 'left', border: 0, padding: 0, width: 360}}>
                <View className = 'box' style = {{width: 'calc(100% - 10px)', margin: 0, paddingBottom: 0}}>
                    <h5>My Order</h5>
                    <p style = {{margin: '20px 0px', fontSize: 14}}>Total Purchase <span style = {{float: 'right'}}>${price}</span></p>
                    <View style = {{textAlign: 'center', fontSize: 13}}>
                        <View>
                            <input onClick = {() => setNextDayService(false)} name = 'delivery-time' checked = {! nextDayService} type = 'radio' id = 'seven-days' />
                            <label for = 'seven-days' style = {{display: 'inline-block', verticalAlign: 'top', paddingTop: 3}}>Seven Days Delivery - Free</label>
                        </View>
                        <View style = {{marginTop: 10}}>
                            <input onClick = {() => setNextDayService(true)} name = 'delivery-time' type = 'radio' id = 'next-day' />
                            <label for = 'next-day' style = {{display: 'inline-block', verticalAlign: 'top', paddingTop: 3}}>Next Day Service - $10</label>
                        </View>
                    </View>
                    <View style = {{background: 'lightgrey', marginTop: 20, width: 'calc(100% + 0px)', padding: 10, marginLeft: -10}}>
                        <Text style = {{fontWeight: 'bold', fontSize: 13}}>
                            Sub Total <span style = {{float: 'right'}}>${totalPrice}</span>
                        </Text>
                    </View>
                    <View style = {{margin: '20px 0px'}}>
                        <table style = {{fontSize: 13, width: '100%'}}>
                            <tr>
                                <td>
                                    Less Coupon
                                </td>
                                <td>
                                    <input value = {couponCode} onChange = {(e) => setCouponCode(e.target.value)} placeholder = 'Enter Code' type = 'text' style = {{}} style = {{width: 100, marginRight: 2, marginLeft: 2}} />
                                    <input type = 'button' value ='Apply' onClick = {getCoupon} style = {{border: 0, background: 'transparent', cursor: 'pointer'}}/>
                                </td>
                                <td style = {{textAlign: 'right'}}>
                                    - ${discount}
                                </td>
                            </tr>
                        </table>
                    </View>
                    <View style = {{background: 'lightgrey', marginTop: 20, width: 'calc(100% + 0px)', padding: 10, marginLeft: -10}}>
                        <Text style = {{fontWeight: 'bold', fontSize: 13}}>
                            Grand Total <span style = {{float: 'right'}}>${finalPrice}</span>
                        </Text>
                    </View>
                </View>
                <View style = {{marginTop: 20, fontSize: 13}}>
                    <View>
                        <input id = 'agree-with-terms-0' type = 'checkbox' />
                        <label for = 'agree-with-terms-0' style = {{display: 'inline', verticalAlign: 'top', marginTop: 3}}>I acknowledge there is no revision allowed. The positioning of your image is at designer discretion.</label>
                    </View>
                    <View style = {{marginTop: 5}}>
                        <input id = 'agree-with-terms' type = 'checkbox' />
                        <label for = 'agree-with-terms' style = {{display: 'inline-block', verticalAlign: 'top', marginTop: 3}}>I agree with Terms & Conditions</label>
                    </View>
                    <View style = {{marginTop: 20}}>
                        <input 
                            type = 'button'
                            value = 'Pay Now'
                            className = 'action-button'
                            onClick = {() => setPPView(true)}
                            style = {{width: 120}}
                        />
                        <input 
                            type = 'button'
                            value = 'Go to Cart'
                            className = 'action-button'
                            style = {{marginLeft: 10, width: 120}}
                        />
                    </View>
                </View>
            </View>
            <View className = 'box inline-box' style = {{width: 360}}>
                <CheckoutField 
                    value = {user.firstName}
                    title = {'First Name'}
                    disabled = {true}
                />
                <CheckoutField 
                    value = {user.lastName}
                    title = {'Last Name'}
                    disabled = {true}
                />
                <CheckoutField 
                    value = {user.email}
                    title = {'Email'}
                    disabled = {true}
                />
                <CheckoutField 
                    value = {user.address1}
                    title = {'Address'}
                    disabled = {true}
                />
                <CheckoutField 
                    value = {user.address2}
                    title = {'Address 2'}
                    disabled = {true}
                />
                <CheckoutField 
                    value = {user.country}
                    title = {'Coutry'}
                    disabled = {true}
                />
                <CheckoutField 
                    value = {user.state}
                    title = {'State'}
                    disabled = {true}
                />
                <CheckoutField 
                    value = {user.city}
                    title = {'City'}
                    disabled = {true}
                />
                <CheckoutField 
                    value = {user.phone}
                    title = {'Phone'}
                    disabled = {true}
                />
            </View>
        </View>
    )

}