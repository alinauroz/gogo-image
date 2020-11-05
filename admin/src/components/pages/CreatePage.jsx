import React from 'react'
import Field from '../unit/Field'
import CKEditor from 'react-ckeditor-component'
import ReactHtmlParser from "react-html-parser";

export default function () {

    const [html, setHtml] = React.useState("");
    const [toPreview, setToPreview] = React.useState();

    return (
        <div class = 'card'>
            <Field 
                name = 'title'
                placeholder = 'Title'
                title = 'Title'

            />
            <br />
            <span style = {{marginBottom: 10}}>
                {ReactHtmlParser(toPreview)}
            </span>
            <CKEditor 
                activeClass="editor" 
                content={html}
                events = {{
                    change: (e) => setHtml(e.editor.getData()) 
                }}
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
                    onClick = {() => setToPreview(html)}
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