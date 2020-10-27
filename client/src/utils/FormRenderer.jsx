import React from 'react'

export default function (props) {
    return (
        <>
            {
                (() => {
                    let html = [];
                    if (props.fields) {
                        props.fields.forEach(field => {
                            html.push(
                                <div className = 'field-container'>
                                    <p className = 'field-title'>{field.title}</p>
                                    <input 
                                        className = 'field-input' 
                                        type = {field.type} 
                                        name = {field.name} 
                                        required = {field.required} 
                                        step = {field.step}
                                    />
                                </div>
                            )
                        })
                    }
                    return html;
                })()
            }
        </>
    )
}