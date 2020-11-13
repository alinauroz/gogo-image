import React from 'react'
import Field from '../unit/Field'
import ImageLoader from '../../utils/ImageLoader'

function PostInput (props) {

    const setImage = (data) => props.onChange({... data, index: props.index});

    return (
        <div>
            <div style = {{display: 'inline-block', verticalAlign: 'top', width: 'calc(50% - 10px)', padding: 10, paddingLeft: 0}}>
                <Field 
                    title = 'Size'
                    placeholder = 'Size of the Image'
                />
                <div style = {{marginTop: 10}}>
                    <p>Select Image Type</p>
                    <select class = 'form-control'>
                        <option selected>Portrait</option>
                        <option>Landscape</option>
                    </select>
                </div>
            </div>
            <div style = {{display: 'inline-block', verticalAlign: 'top', width: 'calc(50% - 20px)', padding: 10, height: '100%'}}>
                <p>Upload an Image</p>
                <ImageLoader 
                    sizes = {{original: 'original', thumb: {maxWidthOrHeight: 300}}}
                    setImages = {setImage}
                />
            </div>
        </div>
    )

}

export default function () {

    const handleImagesAndThumbs = ({original, thumb, index}) => {

        let thumbs_ = thumbs;
        thumbs_[index] = thumb;
        setThumbs(thumbs_);

        let images_ = images;
        images_[index] = original;
        setImages(images_);
    }

    const [tags, setTags] = React.useState([]);
    const [tagsView, setTagsView] = React.useState([]);
    const [images, setImages] = React.useState([])
    const [thumbs, setThumbs] = React.useState([]);
    const [ImageInputs, setImageInputs] = React.useState([<PostInput index = {0} onChange = {handleImagesAndThumbs} />])

    React.useEffect(() => {
        console.log(
            thumbs
        )
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

    return (
        <div className = 'card'>
            <h3 style = {{margin: 0, marginBottom: 15}}>Add a Post</h3>
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
            <div style = {{marginTop: 20}}>
                <input
                    type = 'button'
                    value = 'Post'
                    className = 'btn btn-success'
                />
                <input
                    type = 'button'
                    value = 'Add More Images'
                    className = 'btn btn-primary'
                    style = {{marginLeft: 10}}
                    onClick = {() => {
                        let a = [ ... ImageInputs];
                        a.push(<PostInput index = {ImageInputs.length} onChange = {handleImagesAndThumbs} />)
                        setImageInputs(a)
                    }}
                />
            </div>
        </div>
    )

}