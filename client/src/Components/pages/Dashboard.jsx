import React, { useEffect, useState } from 'react'
import FormRenderrer from '../../utils/FormRenderer'
import {View, Text} from '../Basic/AppComponents'
import { Link } from 'react-router-dom'
import {request} from '../../utils/AppRequest'
import getFormData from '../../utils/getFormData'

let user = JSON.parse(localStorage.getItem('user') || '{}');
let domainDetails = localStorage.getItem('siteinfo');


export default function (props) {

    const [message, setMessage] = React.useState()

    const updateUser = async (e) => {

        e.preventDefault();

        try {
            let formData = getFormData(e.target)

            let res = await request({
                route: 'users/me',
                method: 'PUT',
                credentials: 'include',
                body: formData
            })

            if (res.error) {
                if (res.error.code === 11000)
                    setMessage('This email is already taken');
                else
                    setMessage('Some error occurred');
            }
            else {
                setMessage('User updated successfully')
                localStorage.setItem('user', JSON.stringify(res.data))
            }

        }
        catch (err) {

        }
    }

    if (user) {

        const [firstName, setFirstName] = React.useState(user.firstName);
        const [lastName, setLastName] = React.useState(user.lastName);
        const [email, setEmail] = React.useState(user.email);
        const [company, setCompany] = React.useState(user.company)
        const [phone, setPhone] = React.useState(user.phone)
        const [website, setWebsite] = React.useState(user.website)
        const [paypalId, setPaypalId] = React.useState(user.paypalId)
        const [address1, setAddress1] = React.useState(user.address1)
        const [address2, setAddress2] = React.useState(user.address2)
        const [country, setCountry] = React.useState(user.country)
        const [state, setState] = React.useState(user.state)
        const [city, setCity] = React.useState(user.city)
        const [zip, setZip] = React.useState(user.zip)

        const fields = [
            {type: 'text', title: 'First Name', name: 'firstName', value: firstName, onChange : (e) => setFirstName(e.target.value), styleX : {container: {width: '100%'}}},
            {type: 'text', title: 'Lasr Name', name: 'lastName', value: lastName, onChange : (e) => setLastName(e.target.value), styleX : {container: {width: '100%'}}},
            {type: 'email', title: 'Email', name: 'email', value: email, onChange : (e) => setEmail(e.target.value), styleX : {container: {width: '100%'}}},
            {type: 'text', title: 'Company Name', name: 'company', value: company, onChange : (e) => setCompany(e.target.value),},
            {type: 'text', title: 'Website', name: 'website', value: website, onChange : (e) => setWebsite(e.target.value),},
            {type: 'text', title: 'Paypal ID', name: 'paypalId', value: paypalId, onChange : (e) => setPaypalId(e.target.value),},
            {type: 'text', title: 'Phone', name: 'phone', value: phone, onChange: (e) => setPhone(e.target.value)},
            {type: 'text', title: 'Billing Address', name: 'address1', value: address1, onChange: (e) => setAddress1(e.target.value)},
            {type: 'text', title: 'Address 2', name: 'address2', value: address2, onChange: (e) => setAddress2(e.target.value)},
            {type: 'text', title: 'City', name: 'city', value: city, onChange: (e) => setCity(e.target.value)},
            {type: 'text', title: 'ZIP', name: 'zip', value: zip, onChange: (e) => setZip(e.target.value)},
        ]

        return (
            <View className = 'box' style = {{width: 800, marginLeft: 'calc(50% - 410px)', border: 0}}>
                <div style = {{marginBottom: 10}}>
                <h1 style = {{display: 'inline-block', marginRight: 5, fontSize: 28}}>
                    My Account / Profile
                </h1>
                <Text style = {{fontSize: 13, marginTop: 13, display: 'inline-block', verticalAlign: 'top', color: user.emailConfirmed ? 'green' : 'blue' }}>
                    {user.emailConfirmed ? ' - Email Confirmed' : '- Email not yet verified'}
                </Text>
                </div>

                <form action = '' onSubmit = {updateUser}>
                    <FormRenderrer 
                       fields = {fields}
                    />

                <div style = {{fontSize: 13, marginTop: 10, overflow: 'hidden'}}>
                    <input type = 'checkbox' id = 'dashboard-accept-terms' style = {{margin: 0}} />
                    <label for = 'dashboard-accept-terms' style = {{marginLeft: 5, verticalAlign: 'top', paddingTop: 5}}>
                        I agree with <Link to = '/terms'>Terms</Link>
                    </label>
                </div>
                <p style = {{margin: '10px 0px', fontSize: 13}}>
                    {message}
                </p>
                <div>
                    <input
                        type = 'submit'
                        className = 'action-button'
                        value = 'Submit'
                        style = {{width: 130}}
                    />
                    <input
                        type = 'button'
                        className = 'action-button'
                        value = 'Reset'
                        style = {{width: 130, marginLeft: 10}}
                        onClick = {() => window.location.reload()}
                    />
                </div>

            </form>
            </View>
        )

    }
    else
        return (
            <></>
        )

}