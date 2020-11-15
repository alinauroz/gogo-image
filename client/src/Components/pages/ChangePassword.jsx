import React from 'react'
import Box from '../Container/Box'
import {View, Text, Button} from '../Basic/AppComponents'
import FormRenderer from '../../utils/FormRenderer'

const fields = [
    {title: 'Enter Current Password', name: 'oldPassword', type: 'password', required: true, style : {
            container: {width: 'calc(100% - 12px)'},
            input: {width: '100%'}
        }
    },
    {title: 'Enter New Password', name: 'password', onChange: (e) => alert(e.target.value), type: 'password', required: true, style : {
        container: {width: 'calc(100% - 12px)'},
        input: {width: '100%'}
    }
}
]

const resSet = Object.freeze({
    WRONG: 0,
    CHANGED: 1,
    INITIAL: 2
});

export default function (props) {

    const [res, setRes] = React.useState(resSet.INITIAL);

    return (
        <View>
        {
            res === resSet.CHANGED ?
            <View className = 'notification-bar notification-bar-success'>
                Password changed successfully
            </View>
            : res === resSet.WRONG ?
            <View className = 'notification-bar notification-bar-fail'>
                Password not changed. The current password is not correct.
            </View>
            : ""
        }
        <Box>
            <View>
                <form action = '' onSubmit = {() => {}}>
                    <FormRenderer 
                        fields = {fields}
                    />
                    <input type = 'submit' value = 'Reset Password' className = 'action-button' />
                </form>
            </View>
        </Box>
        </View>
    )

}