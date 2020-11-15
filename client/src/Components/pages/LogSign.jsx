import React from 'react'
import Box from '../Container/Box'
import {View, Text, Button} from '../Basic/AppComponents'
import FormRenderer from '../../utils/FormRenderer'
import { Link } from 'react-router-dom'
import { api } from '../../data/api'

const loginFields = [
    {title: 'Email', name: 'email', type: 'email', required: true},
    {title: 'Password', name: 'password', type: 'password', required: true}
]

const signupFields = [
    {title: "First Name", name: "firstName", type: "text", required: true},
    {title: "Last Name", name: "lastName", type: "text", required: true},
    {title: "Email Address", name: "email", type: "email", required: true},
    {title: "Retype Email", name: "retype-email", type: "email", required: true},
    {title: "Enter Password", name: "password", type: "password", required: true},
    {title: "Confirm Password", name: "confirm-password", type: "password", required: true},
    {title: "Country", name: "country", type: "text", required: true},
    {title: "State", name: "state", type: "text", required: true},
]

export default function (props) {

    const [selected, setSelected] = React.useState(props.selected || 0);
    const [message, setMessage] = React.useState('');
    const [agreed, setAgreed] = React.useState(false);

    const signup = async (e) => {
        e.preventDefault();

        if (! agreed)
            return setMessage('You must agree with terms and conditions');

        let form = new FormData(e.target);
        let data = [... form];
        let formData = {};

        data.map(val => {
            formData[val[0]] = val[1];
        });

        if (formData['password'] !== formData['confirm-password']) {
            return setMessage('Password did not match');
        }

        let res = await fetch(api + 'users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        let user = await res.json();

        console.log(user);
    }

    const login = async (e) => {

        e.preventDefault();

        let form = new FormData(e.target);
        let data = [... form];
        let formData = {};

        data.map(val => {
            formData[val[0]] = val[1];
        });

        let res = await fetch(api + 'users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        let data_ = await res.json();

        if (data_.status === 'fail') {
            setMessage(data_.message);
        }
        else {
            localStorage.setItem('token', data_.token);
            document.cookie = 'jwt=' + data_.token;
            localStorage.setItem('user', JSON.stringify(data_.data));
            window.location.reload();
        }

    }

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
                    <form action = '' onSubmit = {signup}>
                        <FormRenderer 
                            fields = {signupFields}
                        />
                        <br /><br />
                        <label>
                            <input 
                                type = 'checkbox' 
                                onClick = {(e) => {
                                    setAgreed(e.target.checked);
                                }}
                            />
                            <Text style = {{display: 'inline', fontSize: 13}}>I agree domain.com <Link to = '/terms'>terms</Link></Text>
                        </label>
                        <p style = {{fontSize: 13, marginTop: 10}}>
                            {message}
                        </p>
                        <input type = 'submit' value = 'Sign Up' className = 'action-button' />
                    </form>
                    : 
                    <form action = '' onSubmit = {login}>
                        <FormRenderer 
                            fields = {loginFields}
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
                }
            </View>
        </Box>
    )

}