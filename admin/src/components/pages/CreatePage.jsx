import React from 'react'
import Field from '../unit/Field'
import CKEditor from 'react-ckeditor-component'

export default function () {

    

    return (
        <div class = 'card'>
            <Field 
                name = 'title'
                placeholder = 'Title'
                title = 'Title'

            />
            <br />
            <span style = {{marginBottom: 10}}>

            </span>
            <CKEditor 
                activeClass="editor" 
                content={""} 
                onChange={() => {}}
                style = {{marginTop: 10}}
            />
            <br />
            <Field 
                title = 'URL'
                name = 'url'
                placeholder = 'URL'
            />
            <div style = {{marginTop: 15}}>
                <input 
                    type = 'button'
                    value = 'Preview'
                    className = 'btn btn-primary'
                />
                <input 
                    type = 'button'
                    value = 'Save'
                    className = 'btn btn-primary'
                    style = {{marginLeft: 10}}
                />
            </div>
        </div>
    )
}