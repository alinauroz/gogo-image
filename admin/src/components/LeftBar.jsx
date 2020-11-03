import React from 'react'

export default function (props) {
    return (
        <div className = 'bar'>
            {
                props.buttonList.map(button => {
                    return (
                        <button className = 'bar-button'>
                            <span className = 'glyphicon glyphicon-link'></span>
                            <span className = 'bar-button-title'>{button.title}</span>
                        </button>
                    )
                })
            }
        </div>
    )
}