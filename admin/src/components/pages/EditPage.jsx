import React from 'react'
import Field from '../unit/Field'
import CKEditor from 'react-ckeditor-component'
import ReactHtmlParser from "react-html-parser";
import {request} from '../../utils/request'

export default function (props) {

    const [html, setHtml] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [url, setURL] = React.useState("");
    const [toPreview, setToPreview] = React.useState();
    const [message, setMessage] = React.useState('')

    React.useEffect(() => {

    })

    const updatePage = async () => {

        let res;

        console.log(url, props.base.isc.page.url,
            title, props.base.isc.page.title,
            html, props.base.isc.page.content)

        if (props.base.isc.page) {
            res = await request({
                route: 'pages/',
                params: props.base.isc.page._id,
                method: 'PUT',
                credentials: 'include',
                body: {
                    url: url || props.base.isc.page.url,
                    title: title || props.base.isc.page.title,
                    content: html || props.base.isc.page.content
                }
            })
        
            if (res.status == 'success') {
                setMessage('Updated Successfully')
            }
            else if (res.error.statusCode == 401)
                setMessage('Login as admin to conitnue')
            else
                setMessage('Some error occurred')
        }
        else setMessage('Unable to get required information. Go to the MANGE Content page and edit again')

    }

    return (
        <div class = 'card'>
            <Field 
                name = 'title'
                placeholder = 'Title'
                title = 'Title'
                value = {props.base.isc.page ? props.base.isc.page.title : ''}
                onChange = {(e) => {
                    if (props.base.isc.page) {
                        props.base.isc.page.title = e.target.value;
                    }
                    setTitle(e.target.value);
                }}
            />
            <br />
            <span style = {{marginBottom: 10}}>
                {ReactHtmlParser(toPreview)}
            </span>
            <CKEditor 
                activeClass="editor" 
                content={props.base.isc.page ? props.base.isc.page.content : html}
                events = {{
                    change: (e) => {
                        if (props.base.isc.page) {
                            props.base.isc.page.content = e.editor.getData()
                        }
                        setHtml(e.editor.getData())
                    }
                }}
                style = {{marginTop: 10}}
            />
            <br />
            <Field 
                title = 'URL'
                name = 'url'
                placeholder = 'URL'
                value = {props.base.isc.page ? props.base.isc.page.url : ''}
                onChange = {(e) => {
                    if (props.base.isc.page) {
                        props.base.isc.page.url = e.target.value;
                    }
                    setURL(e.target.value);
                }}
                addon = '/'
            />
            <div style = {{margin: '10px 0px'}}>
                {message}
            </div>
            <div style = {{marginTop: 15}}>
                <input 
                    type = 'button'
                    value = 'Preview'
                    className = 'btn btn-primary'
                    onClick = {() => setToPreview(html)}
                />
                <input 
                    type = 'button'
                    value = 'Update'
                    className = 'btn btn-primary'
                    style = {{marginLeft: 10}}
                    onClick = {updatePage}
                />
            </div>
        </div>
    )
}