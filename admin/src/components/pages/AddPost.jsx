import React from 'react'
import Field from '../unit/Field'
import ImageLoader from '../../utils/ImageLoader'

function PostInput (props) {

    const setImage = (data) => console.log(data)

    return (
        <div>
            <ImageLoader 
                sizes = {{original: 'original', maxWidthOrHeight: 300}}
                setImages = {setImage}
            />
        </div>
    )

}

export default function () {

    const [tags, setTags] = React.useState([]);
    const [tagsView, setTagsView] = React.useState([]);

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
            <PostInput />
        </div>
    )

}