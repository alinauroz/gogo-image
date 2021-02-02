import React from 'react'
import Nav from '../Container/NavBox'
import FormRenderrer from '../../utils/FormRenderer'
import {View, Text} from '../Basic/AppComponents'
import {request} from '../../utils/AppRequest'
import getFormData from '../../utils/getFormData'

let fields = [
    {type: 'text', title: 'First Name', name: 'fname'},
    {type: 'text', title: 'Last Name', name: 'lname'},
    {type: 'email', title: 'Email', name: 'email'},
    {type: 'subject', title: 'Subject', name: 'subject'},
    {type: 'invoice', title: 'Invoice', name: 'invoice'},
]

const Contact = (props) => {

    const onSubmit = (e) => {
        e.preventDefault();
        let formData = getFormData(e.target);
        console.log(formData);
    }

    return (
        <Nav
            title = 'Contact'
        >
            <form onSubmit={onSubmit}>
                <FormRenderrer 
                    fields={fields}
                />
                <div className = 'field-container'>
                    <p className = 'field-title'>Type of Inquiry</p>
                    <select
                        className='field-input'
                        style={{height: 30}}
                    ></select>
                </div>
                <div style={{marginTop: 10}}>
                    <p className = 'field-title'>Message</p>
                    <textarea 
                        style={{
                            width: 'calc(100% - 27.5px)',
                            height: 50,
                            borderRadius: 3,
                            resize: 'none',
                            borderColor: '#dddddd',
                            marginTop: 5,
                        }}
                    />
                </div>
                <div style={{textAlign: 'center'}}>
                    <input 
                        type='submit'
                        className='action-button'
                        value='Send Message'
                        style={{
                            width: 120
                        }}
                    />
                </div>
            </form>
        </Nav>
    );

}

export default Contact;