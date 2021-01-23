import React from 'react'

export default function (props) {
    return (
        <>
            {
                (() => {
                    let html = [];
                    if (props.fields) {
                        props.fields.forEach(field => {
                            let ref;
                            html.push(
                                <div className = 'field-container' style = {field.style ? field.style.container: {}}>
                                    <p className = 'field-title'>{field.title}</p>
                                    {
                                        field.value ?
                                        <input 
                                            className = 'field-input' 
                                            ref = {e => ref = e}
                                            type = {field.type} 
                                            name = {field.name} 
                                            required = {field.required} 
                                            step = {field.step}
                                            style = {field.style ? field.style.input: {}}
                                            value = {field.value}
                                            onChange = {field.onChange ? field.onChange : () => {}}
                                        />
                                        : 
                                        <>
                                        <input 
                                            className = 'field-input'
                                            type = {field.type} 
                                            ref = {e => ref = e}
                                            name = {field.name} 
                                            required = {field.required} 
                                            step = {field.step}
                                            style = {field.style ? { ... field.style.input, marginRight: -20 }: {marginRight: -20}}
                                            onChange = {props.onChange ? props.onChange : () => ""}
                                        />
                                        {
                                        field.type === 'password' ?
                                            <span
                                                onClick = {() => {
                                                    if (ref.getAttribute('type') === 'password') {
                                                        ref.setAttribute('type', 'text')
                                                    }
                                                    else {
                                                        ref.setAttribute('type', 'password')
                                                    }
                                                }}
                                                style={{
                                                    float: 'right',
                                                    marginTop: 10, 
                                                    marginRight: 50, 
                                                    position: 'absolute'
                                                }}
                                            >H</span>: null
                                        }
                                        </>
                                    }
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