import React from 'react'

export function Text (props) {
    return <p>{props.children}</p>
}

export function View (props) {
    return <div>{props.children}</div>
}

export function Image (props) {
    return (
        <img 
            src = {props.source}
            style = {props.style}
        />
    )
}