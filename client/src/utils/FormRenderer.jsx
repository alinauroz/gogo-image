import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function (props) {
    return (
        <>
            {
                (() => {
                    let html = [];
                    if (props.fields) {
                        props.fields.forEach(field => {
                            let ref;
                            const [icon, setIcon] = React.useState(
                                (ref && ref.getAttribute('type') === 'password') ?
                                faEye:
                                faEyeSlash
                            )
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
                                            type = {
                                                (field.type !== 'password') ?
                                                field.type:
                                                icon ===  faEye ? 'password' : 'text'
                                            } 
                                            ref = {e => ref = e}
                                            name = {field.name} 
                                            required = {field.required} 
                                            step = {field.step}
                                            style = {field.style ? { ... field.style.input, marginRight: -25 }: {marginRight: -25}}
                                            onChange = {props.onChange ? props.onChange : () => ""}
                                        />
                                        {
                                        field.type === 'password' ?
                                            <span
                                                onClick = {() => {
                                                    if (ref.getAttribute('type') === 'password') {
                                                        ref.setAttribute('type', 'text');
                                                        field.currentType='text';
                                                    }
                                                    else {
                                                        ref.setAttribute('type', 'password');
                                                        field.currentType='password';
                                                    }
                                                }}
                                                style={{
                                                    float: 'right',
                                                    marginTop: 10, 
                                                    marginRight: 50, 
                                                    position: 'absolute',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                            <FontAwesomeIcon
                                                onClick={() => {
                                                    icon === faEye ?
                                                    setIcon(faEyeSlash)
                                                    : setIcon(faEye)
                                                }}
                                                icon={icon}
                                            />
                                            </span>: null
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