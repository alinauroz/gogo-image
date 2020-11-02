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

export function Button (props) {
    return (
        <button
            className = {props.className}
            onClick = {props.onPress}
        >
            {props.value}
        </button>
    )
}

export function Table (props){
    return <table
        style = {props.style}
        className = {props.className}
    >
        {props.children}
    </table>
}

export function Tr (props){
    return <tr
        style = {props.style}
        className = {props.className}
    >
        {props.children}
    </tr>
}

export function Td (props){
    return <td
        style = {props.style}
        className = {props.className}
    >
        {props.children}
    </td>
}

export function Th (props){
    return <th
        style = {props.style}
        className = {props.className}
    >
        {props.children}
    </th>
}