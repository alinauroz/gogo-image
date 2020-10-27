import React from 'react'
import Box from '../Container/Box'
import {View, Text, Button} from '../Basic/AppComponents'
import FormRenderer from '../../utils/FormRenderer'
import { Link } from 'react-router-dom'

const loginFields = [
    {title: 'Email', name: 'email', type: 'email', required: true},
    {title: 'Password', name: 'password', type: 'password', required: true}
]

const signupFields = [
    {title: "First Name", name: "fname", type: "text", required: true},
    {title: "Last Name", name: "lname", type: "text", required: true},
    {title: "Email Address", name: "email", type: "email", required: true},
    {title: "Retype Email", name: "retype-email", type: "email", required: true},
    {title: "Enter Password", name: "password", type: "password", required: true},
    {title: "Confirm Password", name: "confirm-password", type: "password", required: true},
    {title: "Country", name: "country", type: "text", required: true},
    {title: "State", name: "state", type: "text", required: true},
]

export default function (props) {

    const [selected, setSelected] = React.useState(props.selected || 0);

    return (
        <Box>
            <View>
                <Button 
                    value = "Login"
                    className = {selected == 0 ? 'pair-button pair-button-selected': "pair-button"}
                    onPress = {() => setSelected(0)}
                />
                <Button 
                    value = "Sign Up"
                    className = {selected == 1 ? 'pair-button pair-button-selected': "pair-button"}
                    onPress = {() => setSelected(1)}
                />
                <br /><br />
                {
                    selected ? 
                    <form action = '' onSubmit = {() => {}}>
                        <FormRenderer 
                            fields = {signupFields}
                        />
                        <br /><br />
                        <label>
                            <input type = 'checkbox' />
                            <Text style = {{display: 'inline', fontSize: 13}}>I agree domain.com <Link to = '/terms'>terms</Link></Text>
                        </label>
                        <input type = 'submit' value = 'Sign Up' className = 'action-button' />
                    </form>
                    : 
                    <form action = '' onSubmit = {() => {}}>
                        <FormRenderer 
                            fields = {loginFields}
                        />
                        <input type = 'submit' value = 'Login' className = 'action-button' />
                    </form>
                }
            </View>
        </Box>
    )

}