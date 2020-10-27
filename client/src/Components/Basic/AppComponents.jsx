import React from 'react'

export function Text (props) {
    return ( <p 
            style = {props.style}
            className = {props.className}
            >
                {props.children}
            </p>);
}

export function View (props) {
    return <div 
                className = 'View'
                style = {props.style}
                className = {props.className}
            >
                {props.children}
            </div>
}

export function Image (props) {
    return (
        <img 
            src = {props.source}
            style = {props.style}
        />
    )
}