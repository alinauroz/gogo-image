import React, { useEffect, useState } from 'react'
import FormRenderrer from '../../utils/FormRenderer'

let user = JSON.parse(localStorage.getItem('user') || '{}');


export default function (props) {

    if (user) {

        const [firstName, setFirstName] = React.useState(user.firstName);
        const [lastName, setLastName] = React.useState(user.lastName);
        const [email, setEmail] = React.useState(user.email);

        const fields = [
            {type: 'text', title: 'First Name', name: 'firstName', value: firstName, onChange : (e) => setFirstName(e.target.value)},
            {type: 'text', title: 'Lasr Name', name: 'lastName', value: lastName, onChange : (e) => setLastName(e.target.value)},
            {type: 'email', title: 'Email', name: 'email', value: email, onChange : (e) => setEmail(e.target.value)},
        ]

        return (
            <View className = ''>
                <FormRenderrer 
                   fields = {fields}
                />
            </View>
        )

    }
    else
        return (
            <>Nothing</>
        )

}