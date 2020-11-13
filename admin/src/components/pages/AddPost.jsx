import React from 'react'
import Field from '../unit/Field'

function PostInput (props) {

    return (
        <div>
            
        </div>
    )

}

export default function () {

    const [tags, setTags] = React.useState([]);
    const [tagsView, setTagsView] = React.useState([]);

    const handleTags = (e) => {

        let tags_ = e.target.value.split(',').filter((tag) => tag !== ' ' && tag !== '');
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
                placeholder = 'Separate Tags using Commas'
                onChange = {handleTags}
            />
            <p style = {{marginTop: 5}}>
                {tagsView}
            </p>
        </div>
    )

}