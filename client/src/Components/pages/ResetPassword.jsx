import React from 'react'
import Box from '../Container/Box'
import {View, Text, Button} from '../Basic/AppComponents'
import FormRenderer from '../../utils/FormRenderer'

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

    return (
        <View>
        {
            res === resSet.SENT ?
            <View className = 'notification-bar notification-bar-success'>
                Please check your email to reset password
            </View>
            :
            <View className = 'notification-bar notification-bar-fail'>
                Please check your email address again
            </View>
        }
        <Box>
            <View>
                <form action = '' onSubmit = {() => {}}>
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