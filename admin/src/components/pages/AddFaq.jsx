import React from 'react'
import Field from '../unit/Field'


export default function () {

    return (
        <div className = 'card'>
            <h3 style = {{margin: 0, marginBottom: 10}}>Add FAQ</h3>

            <div style = {{display: 'inline-block', width: 'calc(50% - 20px)', marginRight: 20}}>
                <p>FAQ Category</p>
                <select className = 'form-control'>
                    <option>Select Category</option>
                    <option value = '0'>Other</option>
                </select>
            </div>

            <div style = {{display: 'inline-block', width: 'calc(50% - 20px)', marginRight: 20}}>
                <p>Status</p>
                <select className = 'form-control'>
                    <option>Active</option>
                    <option>Inactive</option>
                </select>
            </div>

            <div style = {{marginTop: 15, display: 'inline-block', width: 'calc(50% - 20px)', marginRight: 20}}>
                <p>Question</p>
                <textarea className = 'form-control' placeholder = 'Enter Question Here'></textarea>
            </div>

        </div>
    );
}