import React from 'react'
import Field from '../unit/Field'
import CKEditor from 'react-ckeditor-component'
import ReactHtmlParser from "react-html-parser";
import {request} from '../../utils/request'

export default function () {

    const [title, setTitle] = React.useState('');
    const [url, setURL] = React.useState('')
    const [html, setHtml] = React.useState('');
    const [toPreview, setToPreview] = React.useState();
    const [message, setMessage] = React.useState('');
    const [hidden, setHidden] = React.useState(false);

    const submitPage = async (e) => {
        try {
            let res = await request ({
                route: 'pages',
                method: 'POST',
                credentials: 'include',
                body: {
                    url,
                    title,
                    hideOnTopBar: hidden,
                    content: html
                }
            })

            if (res.error)
                setMessage(res.message)
            else
                setMessage('Page added successfully');
        }
        catch (err) {
            e.target.disabled = false;
            if (err.message)
                setMessage(err.message)
            else
                setMessage('Some error occurred. View console for more information')
                console.error(err);
        }
    }

    return (
        <div class = 'card'>
            <h3 style={{marginTop: 0}}>
                Create Page
            </h3>
            <Field 
                name = 'title'
                placeholder = 'Title'
                title = 'Title'
                value = {title}
                onChange = {(e) => setTitle(e.target.value)}
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
                addon = '/'
                value = {url.substr(1, url.length)}
                onChange = {(e) => setURL('/' + e.target.value)}
            />
            <div style={{marginTop: 10}}>
                <input name="topbar-hidden"type = "checkbox" onClick={(e) => setHidden(e.target.checked)} />
                <label id="topbar-hidden">Hide this on Topbar</label>
            </div>
            <p style = {{marginTop: 5}}>
                {message}
            </p>
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
                    onClick = {submitPage}
                />
            </div>
        </div>
    )
}