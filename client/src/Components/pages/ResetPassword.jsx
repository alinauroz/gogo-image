import React from 'react'
import Box from '../Container/Box'
import {View, Text, Button} from '../Basic/AppComponents'
import FormRenderer from '../../utils/FormRenderer'
import { Link } from 'react-router-dom'

const resetFields = [
    {title: 'Enter Your Email', name: 'email', type: 'email', required: true, style : {
            container: {width: 'calc(100% - 12px)'},
            input: {width: '100%'}
        }
    }
]

export default function (props) {

    return (
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
    )

}