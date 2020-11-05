import React from 'react'
import Field from '../unit/Field'

import Viewer from '../../utils/Viewer'
export default function () {
    return (
        <div className = 'card'>
            <h3 style = {{margin: 0, marginBottom: 10}}>Add Coupon</h3>
            <div style = {{minWidth: 300, width: '60%'}}>
                <Field 
                    name = 'name'
                    title = 'Name'
                    placeholder = 'Name'
                    style = {{marginTop: 10}}
                />
                <div style = {{marginTop: 10}}>
                    <p>Type of Use</p>
                    <select className = 'form-control'>
                        <option>All</option>
                        <option>Dance</option>
                    </select>
                </div>
                <Field 
                    name = 'code'
                    title = 'Coupon Code'
                    placeholder = 'Coupon Code'
                    style = {{marginTop: 10}}
                />
                <Field 
                    name = 'name'
                    title = 'Minimum Order'
                    placeholder = 'Min Order'
                    style = {{marginTop: 10}}
                />
                <Field 
                    name = 'discount'
                    title = 'Start Date'
                    placeholder = 'Start Date'
                    inputType = 'date'
                    style = {{marginTop: 10}}
                />
                <Field 
                    name = 'discount'
                    title = 'Expire Date'
                    placeholder = 'Expire Date'
                    inputType = 'date'
                    style = {{marginTop: 10}}
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