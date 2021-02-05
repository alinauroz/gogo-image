import React from 'react'
import Nav from '../Container/NavBox'
import FormRenderrer from '../../utils/FormRenderer'
import {View, Text} from '../Basic/AppComponents'
import {request} from '../../utils/AppRequest'
import getFormData from '../../utils/getFormData'

let fields = [
    {type: 'text', title: 'First Name', name: 'firstName'},
    {type: 'text', title: 'Last Name', name: 'lastName'},
    {type: 'email', title: 'Email', name: 'email'},
    {type: 'subject', title: 'Subject', name: 'subject'},
    {type: 'invoice', title: 'Invoice', name: 'invoiceNo'},
]

const Contact = (props) => {

    const onSubmit = async (e) => {
        e.preventDefault();
        let fd = getFormData(e.target);

        let ticket = await request({
            route: 'contact',
            method: 'post',
            body: {
                firstName: fd.firstName,
                lastName: fd.lastName,
                email: fd.email,
                subject: fd.subject,
                invoiceNo: fd.invoiceNo,
                messages: [{
                    fromUser: true,
                    content: fd.content,
                }]
            }
        });

        let ticketId = ticket.data ? ticket.data._id : 0;

        let order = await request({
            route: 'orders/invoice/' + fd.invoiceNo
        })
        
        if (order.data) {

            request({
                route: 'orders/' + order.data._id,
                method: 'PUT',
                body: {
                    dispute: ticketId,
                }
            });

        }

        

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
                        name='content'
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