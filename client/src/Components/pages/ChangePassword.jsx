import React from 'react'
import Box from '../Container/Box'
import {View, Text, Button} from '../Basic/AppComponents'
import FormRenderer from '../../utils/FormRenderer'
import getFormData from '../../utils/getFormData'
import {request} from '../../utils/AppRequest'
import searchQueryParser from '../../utils/searchQueryParser'

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

const resetPassFields = [
    {title: 'Enter New Password', name: 'password', type: 'password', required: true, style : {
            container: {width: 'calc(100% - 12px)'},
            input: {width: '100%'}
        }
    },
    {title: 'Repeat New Password', name: 'confirmPassword', onChange: (e) => alert(e.target.value), type: 'password', required: true, style : {
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
    const [token, setToken] = React.useState('');
    const [message, setMessage] = React.useState('');

    React.useEffect(() => {
        document.title = 'Change Password - ' + (props.info ? props.info.name: '');
        let searchArgs = searchQueryParser(window.location.search ? window.location.search.slice(1) : '');
        setToken(searchArgs.token);
    }, [token])

    const handleForm = async (e) => {
        e.preventDefault();
        let formData = getFormData(e.target);
        formData.token = token;

        if (formData.confirmPassword && formData.confirmPassword !== formData.password) {
            setMessage('Password does not match');
            setRes(resSet.WRONG);
            return;
        }

        let res;
        
        if (!token)
        res = await request({
            route: 'users/updateMyPassword',
            method: 'PUT',
            credentials: 'include',
            body: formData
        })
        else
        res = await request({
            route: 'users/reset',
            method: 'POST',
            body: formData
        })

        if (res.status === 'success') {
            setRes(1)
            window.location.href = '/login'
        }
        else {
            setRes(0);
            setMessage(res.message || 'Unknown error occurred')
        }

    }

    return (
        <View>
        {
            res === resSet.CHANGED ?
            <View className = 'notification-bar notification-bar-success'>
                Password changed successfully
            </View>
            : res === resSet.WRONG ?
            <View className = 'notification-bar notification-bar-fail'>
                {message || 'Password not changed. The current password is not correct.'}
            </View>
            : ""
        }
        <Box>
            <View>
            <h1 style = {{marginTop: 0}}>Change Password</h1>
                <form action = '' onSubmit = {handleForm}>
                    <FormRenderer 
                        fields = {token ? resetPassFields:fields}
                    />
                    <input type = 'submit' value = 'Reset Password' className = 'action-button' />
                </form>
            </View>
        </Box>
        </View>
    )

}