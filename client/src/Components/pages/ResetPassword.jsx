import React from 'react'
import Box from '../Container/Box'
import {View, Text, Button} from '../Basic/AppComponents'
import FormRenderer from '../../utils/FormRenderer'
import { api } from '../../data/api'

const resetFields = [
    {title: 'Enter Your Email', name: 'email', type: 'email', required: true, style : {
            container: {width: 'calc(100% - 12px)'},
            input: {width: '100%'}
        }
    }
]

const resSet = Object.freeze({
    WRONG: 0,
    SENT: 1,
    INITIAL: 2
});

export default function (props) {

    const [res, setRes] = React.useState(resSet.INITIAL);

    React.useEffect(() => {
        document.title = 'Reset Password - ' + (props.info ? props.info.name: '');
    })

    const sendLink = async (e) => {
        e.preventDefault();
        setRes(resSet.INITIAL)
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

        if (data_.status === 'success')
            setRes(resSet.SENT)
        else
            setRes(resSet.WRONG)
    }

    return (
        <View>
        {
            res === resSet.SENT ?
            <View className = 'notification-bar notification-bar-success'>
                Please check your email to reset password
            </View>
            : res === resSet.WRONG ?
            <View className = 'notification-bar notification-bar-fail'>
                Please check your email address again
            </View>
            : ""
        }
        <Box>
            <View>
                <form action = '' onSubmit = {sendLink}>
                    <FormRenderer 
                        fields = {resetFields}
                    />
                    <input type = 'submit' value = 'Reset Password' className = 'action-button' />
                </form>
            </View>
        </Box>
        </View>
    )

}