import React from 'react'
import Field from '../unit/Field'
import CKEditor from 'react-ckeditor-component'

export default function () {
    return (
        <div class = 'card'>
            <Field 
                name = 'title'
                placeholder = 'title'
                title = 'Title'

            />
            <br />
            <CKEditor 
                activeClass="editor" 
                content={""} 
                onChange={() => {}}
                style = {{marginTop: 10}}
            />
        </div>
    )
}