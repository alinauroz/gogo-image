import React, { useEffect } from 'react'

import Field from '../unit/Field'

const PRIVILIGES = Object.freeze({
    'cb-super-admin': 'cb-super-admin',
    'cb-add-staff': 'cb-add-staff',
    'cb-user': 'cb-user'
});

export default function () {

    const [formData, setFormData] = React.useState({});
    const [priviliges, setPriviliges] = React.useState([]);

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
                    <select class="form-control">
                        <option>Super Admin</option>
                        <option>Admin</option>
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
                    title = 'Name'
                    style = {{marginTop: 15, width: 'calc(50% - 20px)', marginRight: 20, display: 'inline-block'}}
                />
                <Field 
                    name = 'email'
                    type = 'email'
                    placeholder = 'Email'
                    title = 'Email'
                    style = {{marginTop: 15, width: 'calc(50% - 20px)', marginRight: 20, display: 'inline-block'}}
                />
                <Field 
                    name = 'password-not-verified'
                    type = 'password'
                    placeholder = 'Password'
                    title = 'Password'
                    style = {{marginTop: 15, width: 'calc(50% - 20px)', marginRight: 20, display: 'inline-block'}}
                />
                <Field 
                    name = 'old-password'
                    type = 'password'
                    placeholder = 'Password'
                    title = 'Password'
                    style = {{marginTop: 15, width: 'calc(50% - 20px)', marginRight: 20, display: 'inline-block'}}
                />
                <Field 
                    name = 'confirmed-pass'
                    type = 'password'
                    placeholder = 'Password'
                    title = 'Password'
                    style = {{marginTop: 15, width: 'calc(50% - 20px)', marginRight: 20, display: 'inline-block'}}
                />

                <h5 style = {{marginTop: 20}}>Access</h5>
                <div style = {{minWidth: 140, display: 'inline-block'}}>
                    <input type = 'checkbox' id = 'cb-super-admin' onClick = {handleRoles} />
                    <label for = 'cb-super-admin' style = {{fontWeight: 'normal', verticalAlign: 'top', marginLeft: 5}}>Super Admin</label>
                </div>
                <div style = {{minWidth: 140, display: 'inline-block'}}>
                    <input type = 'checkbox' id = 'cb-add-staff' onClick = {handleRoles} />
                    <label for = 'cb-add-staff' style = {{fontWeight: 'normal', verticalAlign: 'top', marginLeft: 5}}>Add Staff</label>
                </div>
                <div style = {{minWidth: 140, display: 'inline-block'}}>
                    <input type = 'checkbox' id = 'cb-user' onClick = {handleRoles} />
                    <label for = 'cb-user' style = {{fontWeight: 'normal', verticalAlign: 'top', marginLeft: 5}}>Users</label>
                </div>
                <div style = {{marginTop: 20}}>
                    <button
                        type = 'button' 
                        value = 'Done'
                        className = 'btn btn-success'
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