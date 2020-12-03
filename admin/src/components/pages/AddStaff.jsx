import React, { useEffect } from 'react'
import {request} from '../../utils/request'

import Field from '../unit/Field'

const PRIVILIGES = Object.freeze({
    'cb-super-admin': 'superadmin',
    'cb-add-staff': 'user',
    'cb-page': 'page',
    'cb-faq': 'faq',
    'cb-blog': 'blog',
    'cb-post': 'post',
    'cb-order': 'order',
    'cb-coupon': 'coupon',
    'cb-info': 'info',
    'cb-price': 'price'
});

export default function () {

    const [formData, setFormData] = React.useState({});
    const [priviliges, setPriviliges] = React.useState([]);

    const [role, setRole] = React.useState('admin')
    const [name, setName] = React.useState('')
    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmedPassword, setConfirmedPassword] = React.useState('')

    const addUser = async (e) => {
        
        let res = await request({
            route: 'admins',
            credentials: 'include',
            method: 'POST',
            body: {
                priviliges,
                role,
                name,
                email,
                password,
                username
            }
        })

        console.log(res)

    }
    

    const handleRoles = async (e) => {
        let isChecked = e.target.checked;
        let id_ = e.target.id;
        let privilige = PRIVILIGES[id_];

        if (isChecked && priviliges.indexOf(privilige) === -1) {
            await setPriviliges(priviliges.concat(privilige));
        }
        else {
            await setPriviliges(priviliges.splice(priviliges.indexOf(privilige), 0));
        }

        setFormData({ ... formData, priviliges});
    }
    
    return (
        <div className = 'card'>
            <div className = 'card-body'>
                <h4>Add Staff</h4>
                <div style = {{marginTop: 15, width: 'calc(50% - 20px)', marginRight: 20, display: 'inline-block'}}>
                    <p className = 'field-title'>Role</p>
                    <select class="form-control" onChange = {(e) => setRole(e.target.value)}>
                        <option value = 'admin'>Admin</option>
                        <option value = 'superadmin'>Super Admin</option>
                    </select>
                </div>
                <div style = {{marginTop: 15, width: 'calc(50% - 20px)', marginRight: 20, display: 'inline-block'}}>
                    <p className = 'field-title'>Status</p>
                    <select class="form-control">
                        <option>Active</option>
                        <option>Inactive</option>
                    </select>
                </div>
                <Field 
                    name = 'name'
                    type = 'text'
                    placeholder = 'Name'
                    onChange = {setName}
                    title = 'Name'
                    style = {{marginTop: 15, width: 'calc(50% - 20px)', marginRight: 20, display: 'inline-block'}}
                />
                <Field 
                    name = 'username'
                    type = 'text'
                    placeholder = 'Username'
                    onChange = {setUsername}
                    title = 'Username'
                    style = {{marginTop: 15, width: 'calc(50% - 20px)', marginRight: 20, display: 'inline-block'}}
                />
                <Field 
                    name = 'email'
                    type = 'email'
                    placeholder = 'Email'
                    title = 'Email'
                    onChange = {setEmail}
                    style = {{marginTop: 15, width: 'calc(50% - 20px)', marginRight: 20, display: 'inline-block'}}
                />
                <Field 
                    name = 'password'
                    type = 'password'
                    placeholder = 'Password'
                    title = 'Password'
                    onChange = {setPassword}
                    style = {{marginTop: 15, width: 'calc(50% - 20px)', marginRight: 20, display: 'inline-block'}}
                />
                <Field 
                    name = 'old-password'
                    type = 'password'
                    placeholder = 'Confirm Password'
                    title = 'Confirm Password'
                    onChange = {setConfirmedPassword}
                    style = {{marginTop: 15, width: 'calc(50% - 20px)', marginRight: 20, display: 'inline-block'}}
                />

                <h5 style = {{marginTop: 20}}>Access</h5>
                <div style = {{minWidth: 140, display: 'inline-block'}}>
                    <input type = 'checkbox' id = 'cb-super-admin' onClick = {handleRoles} />
                    <label for = 'cb-super-admin' style = {{fontWeight: 'normal', verticalAlign: 'top', marginLeft: 5}}>Super Admin</label>
                </div>
                <div style = {{minWidth: 140, display: 'inline-block'}}>
                    <input type = 'checkbox' id = 'cb-add-staff' onClick = {handleRoles} />
                    <label for = 'cb-user' style = {{fontWeight: 'normal', verticalAlign: 'top', marginLeft: 5}}>Staff</label>
                </div>
                <div style = {{minWidth: 140, display: 'inline-block'}}>
                    <input type = 'checkbox' id = 'cb-add-staff' onClick = {handleRoles} />
                    <label for = 'cb-page' style = {{fontWeight: 'normal', verticalAlign: 'top', marginLeft: 5}}>Pages</label>
                </div>
                <div style = {{minWidth: 140, display: 'inline-block'}}>
                    <input type = 'checkbox' id = 'cb-add-staff' onClick = {handleRoles} />
                    <label for = 'cb-blog' style = {{fontWeight: 'normal', verticalAlign: 'top', marginLeft: 5}}>Blogs</label>
                </div>
                <div style = {{minWidth: 140, display: 'inline-block'}}>
                    <input type = 'checkbox' id = 'cb-add-staff' onClick = {handleRoles} />
                    <label for = 'cb-faq' style = {{fontWeight: 'normal', verticalAlign: 'top', marginLeft: 5}}>FAQs</label>
                </div>
                <div style = {{minWidth: 140, display: 'inline-block'}}>
                    <input type = 'checkbox' id = 'cb-add-staff' onClick = {handleRoles} />
                    <label for = 'cb-order' style = {{fontWeight: 'normal', verticalAlign: 'top', marginLeft: 5}}>Orders</label>
                </div>
                <div style = {{minWidth: 140, display: 'inline-block'}}>
                    <input type = 'checkbox' id = 'cb-price' onClick = {handleRoles} />
                    <label for = 'cb-price' style = {{fontWeight: 'normal', verticalAlign: 'top', marginLeft: 5}}>Price & Fee</label>
                </div>
                <div style = {{minWidth: 140, display: 'inline-block'}}>
                    <input type = 'checkbox' id = 'cb-company-profile' onClick = {handleRoles} />
                    <label for = 'cb-info' style = {{fontWeight: 'normal', verticalAlign: 'top', marginLeft: 5}}>Company Profile</label>
                </div>
                <div style = {{minWidth: 140, display: 'inline-block'}}>
                    <input type = 'checkbox' id = 'cb-company-profile' onClick = {handleRoles} />
                    <label for = 'cb-coupon' style = {{fontWeight: 'normal', verticalAlign: 'top', marginLeft: 5}}>Coupons</label>
                </div>
                <div style = {{marginTop: 20}}>
                    <button
                        type = 'button' 
                        value = 'Done'
                        className = 'btn btn-success'
                        onClick = {addUser}
                    >
                        <i class="glyphicon glyphicon-ok" style = {{marginRight: 5}}></i>
                        Done
                    </button>
                    <button
                        type = 'button' 
                        value = 'Done'
                        className = 'btn btn-warning'
                        style = {{marginLeft: 10}}
                    >
                        <i class="glyphicon glyphicon-ban-circle" style = {{marginRight: 5}}></i>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )

}