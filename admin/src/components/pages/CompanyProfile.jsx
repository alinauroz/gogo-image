import React from 'react'
import Field from '../unit/Field'

import Viewer from '../../utils/Viewer'
export default function () {
    return (
        <div className = 'card'>
            <h3 style = {{margin: 0, marginBottom: 10}}>Company Profile</h3>
            <div style = {{minWidth: 300, width: '60%'}}>
                <Field 
                    name = 'name'
                    title = 'Company Name'
                    placeholder = 'Company Name'
                    style = {{marginTop: 10}}
                />
                <Field 
                    name = 'address'
                    title = 'Address'
                    placeholder = 'Address'
                    style = {{marginTop: 10}}
                />
                <Field 
                    name = 'city'
                    title = 'City'
                    placeholder = 'City'
                    style = {{marginTop: 10}}
                />
                <Field 
                    name = 'state'
                    title = 'State'
                    placeholder = 'State'
                    inputType = 'text'
                    style = {{marginTop: 10}}
                />
                <Field 
                    name = 'zip'
                    title = 'ZIP'
                    placeholder = 'ZIP'
                    inputType = 'text'
                    style = {{marginTop: 10}}
                />
                <Field 
                    name = 'telephone'
                    title = 'Telephone'
                    placeholder = 'Telephone'
                    inputType = 'text'
                    style = {{marginTop: 10}}
                />
                <Field 
                    name = 'email'
                    title = 'Email'
                    placeholder = 'Email'
                    inputType = 'email'
                    style = {{marginTop: 10}}
                />
                <Field 
                    name = 'image'
                    inputType = 'file'
                    title = 'Logo'
                />
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