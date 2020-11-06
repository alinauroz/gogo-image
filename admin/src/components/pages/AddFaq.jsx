import React from 'react'
import Field from '../unit/Field'
import CKEditor from 'react-ckeditor-component'


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

            <div style = {{verticalAlign: 'top', marginTop: 15, display: 'inline-block', width: 'calc(50% - 20px)', marginRight: 20}}>
                <p>Question</p>
                <textarea className = 'form-control' placeholder = 'Enter Question Here'></textarea>
            </div>

            <div style = {{marginTop: 15, display: 'inline-block', width: 'calc(50% - 20px)', marginRight: 20}}>
                <p>Answer</p>
                <CKEditor 
                    activeClass="editor" 

                    events = {{
                    //    change: (e) => setHtml(e.editor.getData()) 
                    }}
                    style = {{marginTop: 10}}
                />
            </div>
            <div style = {{marginTop: 15}}>
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
    );
}