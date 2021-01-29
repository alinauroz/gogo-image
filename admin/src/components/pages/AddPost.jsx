import React from 'react'
import Field from '../unit/Field'
import ImageLoader from '../../utils/ImageLoader'
import { request } from '../../utils/request'
import {categories} from '../../data/post.res'

function duplicateExists(w){
    return new Set(w).size !== w.length 
}

function PostInput (props) {

    const setImage = (data, meta) => props.onChange({... data, index: props.index}, meta);

    return (
        <div>
            <div style = {{display: 'inline-block', verticalAlign: 'top', width: 'calc(50% - 10px)', padding: 10, paddingLeft: 0}}>
                {/*<div style = {{marginTop: 10}}>
                    <p>Select Image Type</p>
                    <select class = 'form-control' onChange = {(e) => props.setType(e.target.value, props.index)}>
                        <option></option>
                        <option value = 'portrait' >Portrait</option>
                        <option value = 'landscape' >Landscape</option>
                    </select>
                </div>*/}
                {props.index === 0 ? <h2>{'Landscape->'}</h2>: <h2>{'Portrait->'}</h2>}
            </div>
            <div style = {{display: 'inline-block', verticalAlign: 'top', width: 'calc(50% - 20px)', padding: 10, height: '100%'}}>
                <p>Upload an Image</p>
                <ImageLoader 
                    sizes = {{original: 'original', thumb: {maxWidthOrHeight: 450}}}
                    setImages = {setImage}
                />
            </div>
        </div>
    )

}

export default function () {

    const handleImagesAndThumbs = ({original, thumb, index}, meta) => {

        let thumbs_ = thumbs;
        thumbs_[index] = thumb;
        setThumbs(thumbs_);
        let images_ = images;
        images_[index] = original;
        imagesNames[index] = meta.name;
        setImages(images_);
        setImagesNames(imagesNames);
    }

    const handleSize = (value, index) => {
        sizes[index] = value;
        setSizes(sizes)
    }

    const handleType = (value, index) => {
        types[index] = value;
        setTypes(types)
    }

    const [name, setName] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [tags, setTags] = React.useState([]);
    const [tagsView, setTagsView] = React.useState([]);
    const [images, setImages] = React.useState([])
    const [imagesNames, setImagesNames] = React.useState([]);
    const [thumbs, setThumbs] = React.useState([]);
    const [types, setTypes] = React.useState([]);
    const [sizes, setSizes] = React.useState([]); 
    const [message, setMessage] = React.useState('')
    const [typeOfUse, setTypeOfUse] = React.useState([]);
    const [typeOfUseView, setTypeOfUseView] = React.useState([]);
    const [ImageInputs, setImageInputs] = React.useState([
        <PostInput index = {0} onChange = {handleImagesAndThumbs} setType = {handleType} setSize = {handleSize} />,
        <PostInput index = {1} onChange = {handleImagesAndThumbs} setType = {handleType} setSize = {handleSize} />
    ])

    React.useEffect(() => {
    })

    const handleTags = (e) => {

        let tags_ = e.target.value.split(' ').filter((tag) => tag !== ' ' && tag !== '');
        let tagsHtml = []
        tags_.map(tag => {
            tagsHtml.push(<span style = {{margin: 3, marginLeft: 0, borderRadius: 3, padding: 4, background: 'grey', color: 'white', fontSize: 12}}>{tag}</span>)
        })

        setTags(tags_);
        setTagsView(tagsHtml)
    }

    const handleTypeOfUse = (e) => {

        let tags_ = e.target.value.split(' ').filter((tag) => tag !== ' ' && tag !== '');
        let tagsHtml = []
        tags_.map(tag => {
            tagsHtml.push(<span style = {{margin: 3, marginLeft: 0, borderRadius: 3, padding: 4, background: 'grey', color: 'white', fontSize: 12}}>{tag}</span>)
        })

        setTypeOfUse(tags_);
        setTypeOfUseView(tagsHtml)
    }

    const submitPost = async (e) => {
        try {
            e.target.disabled = true;
            let toSkip = []
            let postData = [];

            for (let i = 0; i < ImageInputs.length; i++) {
                if (! thumbs[i]) {
                    if(window.confirm('Thumb for ' + (i == 0 ? 'landscape': 'portrait') + ' is missing. Press ok to Skip Post ' + i + '. Press Cancel to go back')) {
                        toSkip.push(i);
                        continue;
                    }
                    else return e.target.disabled = false;;
                }
            }

            setMessage('Saving Images ....')

            for (let i = 0; i < ImageInputs.length; i++) {

                if (toSkip.indexOf(i) !== -1) continue

                let thumbInfo = await request({
                    route: 'images',
                    method: 'POST',
                    body: {
                        base64: thumbs[i],
                        ref: i
                    }
                })

                setMessage('Saved Thumb # ' + i)

                let imageInfo = await request({
                    route: 'images',
                    method: 'POST',
                    body: {
                        base64: images[i],
                        ref: i
                    }
                })

                setMessage('Saved Image # ' + i)
                
                postData.push({
                    image: imageInfo.fileName,
                    filename: imagesNames[i],
                    thumb: thumbInfo.fileName,
                    size: '0x0',
                    type: i === 0 ? 'landscape': 'portrait'
                })

            }

            //if (duplicateExists(sizes)) {
            //    setMessage('All sizes should be unique');
            //    return e.target.disabled = false;
            //}

            let data = await request({
                route: 'posts',
                method: 'POST',
                credentials: 'include',
                body: {
                    name,
                    category,
                    typeOfUse,
                    items: postData,
                    tags
                }
            });

            if (data.status === 'success') {
                setMessage('Post added successfully');
            }

            setImageInputs([])
            setImageInputs([
                <PostInput index = {0} onChange = {handleImagesAndThumbs} setType = {handleType} setSize = {handleSize} />,
                <PostInput index = {1} onChange = {handleImagesAndThumbs} setType = {handleType} setSize = {handleSize} />
            ]);
            setTagsView([]);

            e.target.disabled = false;
        }
        catch (err) {
            e.target.disabled = false;
        }
    }

    return (
        <div className = 'card'>
            <h3 style = {{margin: 0, marginBottom: 15}}>Add a Template</h3>
            <Field 
                name="name"
                title="Name"
                placeholder="Name of the template"
                onChange={(e) => setName(e.target.value)}
            />
            <div>
                <p className = 'field-title'>Category</p>
                <select className='form-control' name='category' onChange={(e) => setCategory(e.target.value)}>
                    <option value='other'></option>
                    {
                        categories.map((cat) => (
                            <option value={cat[1]}>
                                {cat[0]}({cat[1]})
                            </option>
                        ))
                    }
                </select>
            </div>
            <Field 
                name="typeOfUse"
                title="Type of Use"
                placeholder="Type of Use"
                onChange={handleTypeOfUse}
            />
            <p style = {{margin: 5, marginBottom: 10}}>
                {typeOfUseView}
            </p>
            <Field 
                name = 'tags'
                title = 'Add Tags'
                placeholder = 'Separate Tags using Space'
                onChange = {handleTags}
            />
            <p style = {{margin: 5, marginBottom: 10}}>
                {tagsView}
            </p>
            {ImageInputs}
            <p style = {{marginTop: 10}}>
                {message}
            </p>
            <div style = {{marginTop: 20}}>
                <input
                    type = 'button'
                    value = 'Post'
                    className = 'btn btn-success'
                    onClick = {submitPost}
                />
                {/*
                <input
                    type = 'button'
                    value = 'Add More Images'
                    className = 'btn btn-primary'
                    style = {{marginLeft: 10}}
                    onClick = {() => {
                        let a = [ ... ImageInputs];
                        a.push(<PostInput index = {ImageInputs.length} onChange = {handleImagesAndThumbs} setType = {handleType} setSize = {handleSize} />)
                        setImageInputs(a)
                    }}
                />
                */}
            </div>
        </div>
    )

}