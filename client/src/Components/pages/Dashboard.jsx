import React, { useEffect, useState } from 'react'
import FormRenderrer from '../../utils/FormRenderer'
import {View, Text} from '../Basic/AppComponents'
import { Link } from 'react-router-dom'

let user = JSON.parse(localStorage.getItem('user') || '{}');
let domainDetails = localStorage.getItem('siteinfo');


export default function (props) {

    if (user) {

        const [firstName, setFirstName] = React.useState(user.firstName);
        const [lastName, setLastName] = React.useState(user.lastName);
        const [email, setEmail] = React.useState(user.email);

        const fields = [
            {type: 'text', title: 'First Name', name: 'firstName', value: firstName, onChange : (e) => setFirstName(e.target.value), styleX : {container: {width: '100%'}}},
            {type: 'text', title: 'Lasr Name', name: 'lastName', value: lastName, onChange : (e) => setLastName(e.target.value), styleX : {container: {width: '100%'}}},
            {type: 'email', title: 'Email', name: 'email', value: email, onChange : (e) => setEmail(e.target.value), styleX : {container: {width: '100%'}}},
            {type: 'text', title: 'Company Name', name: 'company'},
            {type: 'text', title: 'Website', name: 'website'},
            {type: 'text', title: 'Paypal ID', name: 'paypalId'},
            {type: 'text', title: 'Phone', name: 'phone'},
            {type: 'text', title: 'Billing Address', name: 'billingAddress'}
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
                <FormRenderrer 
                   fields = {fields}
                />

                <div style = {{fontSize: 13, marginTop: 10, overflow: 'hidden'}}>
                    <input type = 'checkbox' id = 'dashboard-accept-terms' style = {{margin: 0}} />
                    <label for = 'dashboard-accept-terms' style = {{marginLeft: 5, verticalAlign: 'top', paddingTop: 5}}>
                        I agree with <Link to = '/terms'>Terms</Link>
                    </label>
                </div>

                <div>
                    <input
                        type = 'button'
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

            </View>
        )

    }
    else
        return (
            <>Nothing</>
        )

}