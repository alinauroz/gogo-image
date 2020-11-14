import React from 'react'
import Field from '../unit/Field'
import CKEditor from 'react-ckeditor-component'
import ImageLoader from '../../utils/ImageLoader'
import getUnique from '../../utils/getUnique'


export default function (props) {

    const [categories, setCategories] = React.useState()
    const [category, setCategory] = React.useState()
    const [status, setStatus] = React.useState()
    const [title, setTitle] = React.useState('')
    const [sortOrder, setSortOrder] = React.useState()
    const [content, setContent] = React.useState('')
    const [image, setImage] = React.useState('')

    if (props.base.blogs && props.base.blogs.data && ! categories)
        setCategories(getUnique(props.base.blogs.data, 'category'))

    return (
        <div className = 'card'>
            <h3 style = {{margin: 0, marginBottom: 10}}>Add Blog</h3>

            <div style = {{display: 'inline-block', width: 'calc(50% - 20px)', marginRight: 20}}>
                <p>Blog Category</p>
                <select className = 'form-control'>
                    <option>Select Category</option>
                    {
                        categories ? categories.map(cat => <option>{cat}</option>): ""
                    }
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
                <p>Title</p>
                <textarea className = 'form-control' placeholder = 'Enter Question Here'></textarea>
            </div>

            <div style = {{verticalAlign: 'top', marginTop: 15, display: 'inline-block', width: 'calc(50% - 20px)', marginRight: 20}}>
                <Field 
                    title = 'Sort Order'
                    placeholder = 'Sort Order'
                />
            </div>
            <div style = {{verticalAlign: 'top', marginTop: 15, display: 'inline-block', width: 'calc(50% - 20px)', marginRight: 20}}>
                <p>Blog Cover</p>
                <ImageLoader
                    sizes = {{cover: {maxWidthOrHeight: 400}}}
                    setImages = {(d) => console.log(d)}
                />
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