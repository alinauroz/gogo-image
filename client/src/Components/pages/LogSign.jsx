import React from 'react'
import Box from '../Container/Box'
import {View, Text, Button} from '../Basic/AppComponents'
import FormRenderer from '../../utils/FormRenderer'
import { Link } from 'react-router-dom'
import { api } from '../../data/api'
import Countries from '../../utils/Countries'
import ReCAPTCHA from "react-google-recaptcha";

const loginFields = [
    {title: 'Email', name: 'email', type: 'email',},
    {title: 'Password', name: 'password', type: 'password',},
    {type: 'hidden'},
    {type: 'hidden'},
    {type: 'hidden'},
    {type: 'hidden'},
]

const signupFields = [
    {title: "First Name", name: "firstName", type: "text", },
    {title: "Last Name", name: "lastName", type: "text",},
    {title: "Email Address", name: "email", type: "email", },
    {title: "Retype Email", name: "retypeEmail", type: "email", },
    {title: "Enter Password", name: "password", type: "password", },
    {title: "Confirm Password", name: "confirm-password", type: "password",},
    //{title: "Country", name: "country", type: "text", required: true},
    //{title: "State", name: "state", type: "text", required: true},
]

const resSet = Object.freeze({
    INITAL: 0,
    C_MAIL_SENT: 1,
    ERROR: 2
});

export default function (props) {

    const [selected, setSelected] = React.useState(props.selected || 0);
    const [message, setMessage] = React.useState('');
    const [agreed, setAgreed] = React.useState(false);
    const [status, setStatus] = React.useState(0);

    React.useEffect(() => {
        selected?
        document.title = 'Sign Up - ' + (props.info ? props.info.name: '')
        : document.title = 'Log In - ' + (props.info ? props.info.name: '')
    })

    const signup = async (e) => {
        e.preventDefault();
        setMessage('');
        let error = []

        if (! agreed) {
            setStatus(2);
            return setMessage('You must agree with terms and conditions');
        }

        let form = new FormData(e.target);
        let data = [... form];
        let formData = {};

        data.map(val => {
            formData[val[0]] = val[1];
        });

        if (formData.firstName === '') {
            error.push(Math.ceil((error.length + 1)/2) + ". Please enter First Name");
            error.push(<br />)
        }
        if (formData.lastName === '') {
            error.push((Math.ceil((error.length + 1)/2)) + ". Please enter Last Name");
            error.push(<br />)
        }
        if (formData.email === '') {
            error.push((Math.ceil((error.length + 1)/2)) + ". Please enter Email Address");
            error.push(<br />)
        }
        if (formData.retypeEmail === '') {
            error.push((Math.ceil((error.length + 1)/2)) + ". Please enter Retype Email");
            error.push(<br />)
        }
        if (formData.password === '') {
            error.push((Math.ceil((error.length + 1)/2)) + ". Please enter Password");
            error.push(<br />)
        }
        if (formData.password === '') {
            error.push((Math.ceil((error.length + 1)/2)) + ". Please enter Confirm Password");
            error.push(<br />)
        }
        if (formData.password === '') {
            error.push((Math.ceil((error.length + 1)/2)) + ". Please enter Country");
            error.push(<br />)
        }
        if (formData.password === '') {
            error.push((Math.ceil((error.length + 1)/2)) + ". Please enter State");
            error.push(<br />)
        }

        if (error.length > 0) {
            setStatus(2);
            return setMessage(
                <div style={{width: 300, marginLeft: 'calc(50% - 150px)', textAlign: 'left'}}>
                {error}
                </div>
            );
        }

        if (formData.password.length < 8) {
            setStatus(2);
            return setMessage('1. Password must have 8 characters')
        }

        if (formData['password'] !== formData['confirm-password']) {
            return setMessage('Password does not match');
        }

        if (formData['email'] !== formData['retypeEmail']) {
            return setMessage('Email does not match');
        }

        let res = await fetch(api + 'users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        res = await res.json();

        if (res.status === 'success') {
            setStatus(1);
            e.target.reset();
        }
        else {
            if (res.error && res.error.code == 11000) {
                setMessage('Email is already registered');
                setStatus(2);
            }
            else if (res.error && res.error.message) {
                setMessage(res.error.message);
                setStatus(2);
            }
            else {
                setMessage('Unknown error occurred');
                setStatus(2);
            }
        }
    }

    //if (selected === 2) {
    //    return <View className = 'box' style = {{textAlign: 'center'}}><b>Confirm Your Email</b><br/><br/>We have sent you an email. Click on the link in the email to confirm your email.</View>
    //}

    const login = async (e) => {

        e.preventDefault();
        setMessage('');
        setStatus(0);

        let form = new FormData(e.target);
        let data = [... form];
        let formData = {};

        data.map(val => {
            formData[val[0]] = val[1];
        });

        let error = []

        if (formData.email === '') {
            error.push((Math.ceil((error.length + 1)/2)) + ". Please enter email");
            error.push(<br />)
        }
        if (formData.password === '') {
            error.push((Math.ceil((error.length + 1)/2)) + ". Please enter password");
            error.push(<br />)
        }

        if (error.length > 0) {
            setStatus(2);
            return setMessage(
                <div style={{width: 300, marginLeft: 'calc(50% - 150px)', textAlign: 'left'}}>
                {error}
                </div>
            );
        }

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
            setStatus(2);
        }
        else {
            localStorage.setItem('token', data_.token);
            localStorage.setItem('admin', '');
            document.cookie = 'jwt=' + data_.token;
            document.cookie = 'type=user';
            localStorage.setItem('user', JSON.stringify(data_.data));
            window.location = './'
        }

    }

    return (
        <>
        {
            status === resSet.C_MAIL_SENT ?
            <View className = 'notification-bar notification-bar-success' style={{marginBottom: 60}}>
                Please check your email account for the verification email
            </View>
            : status === resSet.ERROR ?
            <View className = 'notification-bar notification-bar-fail'>
                {message}
            </View>
            : ""
        }
        <Box style={{marginTop: 100}}>
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
                        <View className = 'field-container'>
                            <p className = 'field-title'>Countries</p>
                            <Countries className = 'field-select'/>
                        </View>
                        <View className = 'field-container'>
                            <p className = 'field-title'>State</p>
                            <input
                                type="text"
                                name="state"
                                className="field-input"
                                placeholder="State"
                            />
                        </View>
                        <br />
                        <div
                            style={{
                                marginTop: 15,
                                textAlign: 'center'
                            }}
                        >
                        <ReCAPTCHA
                            sitekey="6LdJnDYaAAAAAJ9MhDvgtGqEY7WiEpEgmoETMTtW"
                            onChange={(e,d) => {console.log(e,d)}}
                            style={{
                                marginLeft: 'calc(100% - 400px)',
                                display: 'inline-block',
                                width: '100%',
                                textAlign: 'center'
                            }}
                        />
                        </div>
                        <br /><br />
                        <label>
                            <input 
                                type = 'checkbox' 
                                onClick = {(e) => {
                                    setAgreed(e.target.checked);
                                }}
                            />
                            <Text style = {{display: 'inline', fontSize: 13}}>I agree with {props.info ? props.info.domain : ''} <Link to = '/terms'>terms</Link></Text>
                        </label>
                        <input type = 'submit' value = 'Sign Up' className = 'action-button' />
                    </form>
                    : 
                    <form action = '' onSubmit = {login}>
                        <FormRenderer 
                            fields = {loginFields}
                        />
                        <Link to = '/reset-password' style = {{fontSize: 13, marginTop: -20, display: 'block'}}>
                            Forgot Password
                        </Link>
                        <input 
                            type = 'submit'
                            value = 'Login'
                            className = 'action-button'
                        />
                    </form>
                }
            </View>
        </Box>
        </>
    )

}