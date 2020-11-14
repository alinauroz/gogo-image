import React from 'react'
import Field from '../unit/Field'
import CKEditor from 'react-ckeditor-component'
import ImageLoader from '../../utils/ImageLoader'
import getUnique from '../../utils/getUnique'
import { request } from '../../utils/request'


export default function (props) {

    const [categories, setCategories] = React.useState()
    const [category, setCategory] = React.useState()
    const [status, setStatus] = React.useState()
    const [title, setTitle] = React.useState('')
    const [sortOrder, setSortOrder] = React.useState()
    const [content, setContent] = React.useState('')
    const [image, setImage] = React.useState('')
    const [message, setMessage] = React.useState('')
    const [newCategoryDisplay, setNewCategoryDisplay] = React.useState('none')

    const submitBlog = async (e) => {

        e.target.disbaled = true;

        let res = await request({
            route: 'blogs',
            method: 'POST',
            credentials: 'include',
            body: {
                category,
                status,
                title,
                sortOrder,
                content,
                image
            }
        });

        if (res.status == 'success') {
            setMessage('Blog added successfully')
        }
        else {
            setMessage(res.message)
        }

        e.target.disbaled = false;

    }

    const handleCategory = (e) => {

        if (e.target.value === '0') {
            setNewCategoryDisplay('inline-block')
        }
        else {
            setNewCategoryDisplay('none')
        }

        setCategory(e.target.value)

    }

    if (props.base.blogs && props.base.blogs.data && ! categories)
        setCategories(getUnique(props.base.blogs.data, 'category'))

    return (
        <div className = 'card'>
            <h3 style = {{margin: 0, marginBottom: 10}}>Add Blog</h3>

            <div style = {{display: 'inline-block', width: 'calc(50% - 20px)', marginRight: 20}}>
                <p>Blog Category</p>
                <select className = 'form-control' onChange = {handleCategory}>
                    <option >Select Category</option>
                    {
                        categories ? categories.map(cat => <option>{cat}</option>): ""
                    }
                    <option value = '0'>Other</option>
                </select>
            </div>
            <div style = {{display: newCategoryDisplay, width: 'calc(50% - 20px)', marginRight: 20}}>
                <Field 
                    title = 'New Category'
                    placeholder = 'Type New Category'
                    onChange = {(e) => setCategory(e.target.value)}
                />
            </div>

            <div style = {{display: 'inline-block', width: 'calc(50% - 20px)', marginRight: 20}}>
                <p>Status</p>
                <select className = 'form-control'>
                    <option>Active</option>
                    <option>Inactive</option>
                </select>
            </div>

            <div style = {{verticalAlign: 'top', marginTop: 15, display: 'inline-block', width: 'calc(50% - 20px)', marginRight: 20}}>
                <p>Title</p>
                <textarea onChange = {(e) => setTitle(e.target.value)} className = 'form-control' placeholder = 'Enter Title Here'></textarea>
            </div>

            <div style = {{verticalAlign: 'top', marginTop: 15, display: 'inline-block', width: 'calc(50% - 20px)', marginRight: 20}}>
                <Field 
                    title = 'Sort Order'
                    placeholder = 'Sort Order'
                    onChange = {(e) => setSortOrder(e.target.value)}
                />
            </div>
            <div style = {{verticalAlign: 'top', marginTop: 15, display: 'inline-block', width: 'calc(50% - 20px)', marginRight: 20}}>
                <p>Blog Cover</p>
                <ImageLoader
                    sizes = {{cover: {maxWidthOrHeight: 400}}}
                    setImages = {(imageData) => setImage(imageData.cover)}
                />
            </div>

            <div style = {{marginTop: 15, display: 'inline-block', width: 'calc(50% - 20px)', marginRight: 20}}>
                <p>Answer</p>
                <CKEditor 
                    activeClass="editor" 
                    content = {content}
                    events = {{
                        change: (e) => {
                            setContent(e.editor.getData())
                        }
                    }}
                    style = {{marginTop: 10}}
                />
            </div>
            <p>{message}</p>
            <div style = {{marginTop: 15}}>
            <button
                        type = 'button' 
                        value = 'Done'
                        className = 'btn btn-success'
                        onClick = {submitBlog}
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