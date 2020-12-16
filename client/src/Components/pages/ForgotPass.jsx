import React from 'react'
import Box from '../Container/Box'
import {View, Text, Button} from '../Basic/AppComponents'
import FormRenderer from '../../utils/FormRenderer'
import { Link } from 'react-router-dom'
import { api } from '../../data/api'

const loginFields = [
    {title: 'Email', name: 'email', type: 'email', required: true},
]

export default function (props) {
    const [message, setMessage] = React.useState('');

    React.useEffect(() => {
        document.title = 'Forgot Password - ' + (props.info ? props.info.name: '')
    })

    const sendLink = async (e) => {
        e.preventDefault();

        let form = new FormData(e.target);
        let data = [... form];
        let formData = {};

        data.map(val => {
            formData[val[0]] = val[1];
        });

        let res = await fetch(api + 'users/forgotPassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        let data_ = await res.json();

        console.log(data_);
    }

    return (
        <Box>
            <View>
                <form action = '' onSubmit = {sendLink}>
                    <FormRenderer 
                        fields = {loginFields}
                        style = {{width: '100%'}}
                    />
                    <p style = {{fontSize: 13, marginTop: 10, marginBottom: 5}}>
                        {message}
                    </p>
                    <input 
                        type = 'submit'
                        value = 'Login'
                        className = 'action-button'
                    />
                </form>
            </View>
        </Box>
    )

}