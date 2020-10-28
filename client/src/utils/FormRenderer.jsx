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
                                <div className = 'field-container' style = {field.style.container}>
                                    <p className = 'field-title'>{field.title}</p>
                                    <input 
                                        className = 'field-input' 
                                        type = {field.type} 
                                        name = {field.name} 
                                        required = {field.required} 
                                        step = {field.step}
                                        style = {field.style.input}
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