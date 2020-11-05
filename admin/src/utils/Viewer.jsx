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
        <div className = 'card'>
        <table className = 'viewer-table'>
            <tr>
                {
                    (() => {
                        let heads = [];
                        for (let x in props.data[0]) {
                            heads.push(<td>{x.toLocaleUpperCase()}</td>);
                        }
                        return heads;
                    })()
                }
            </tr>
            <tbody>
                {
                    props.data.map(entry => {
                        return <Unit data = {entry} />
                    })
                }
            </tbody>
        </table>
        </div>
    )

}