import React from 'react'

function Unit (props) {

    return (
        <tr>
            {
                (() => {
                    let html = []
                    for (let x in props.data) {
                        html.push(<td>{props.data[x]}</td>);
                    }
                    return html;
                })()
            }
        </tr>
    )

}

export default function (props) {

    return (
        <tbody>
            {
                props.data.map(entry => {
                    return <Unit data = {entry} />
                })
            }
        </tbody>
    )

}