import React, { useEffect } from 'react'
import Field from '../unit/Field'
import { request } from '../../utils/request'

export default function () {

    const [shouldLoad, setShouldLoad] = React.useState(true);

    useEffect(() => {
        if (shouldLoad) {
            request({
                route: 'price',
                method: 'GET'
            }).then(d => {
                console.log("Price", d)
            })
        }
    })

    return (
        <div className = 'card'>
            <h3 style = {{margin: 0, marginBottom: 10}}>Set Price</h3>
            <div style = {{minWidth: 300, width: '60%'}}>
                
                <div style = {{marginTop: 20}}>
                    <button
                        type = 'button' 
                        value = 'Done'
                        className = 'btn btn-success'
                    >
                        <i class="glyphicon glyphicon-ok" style = {{marginRight: 5}}></i>
                        Done
                    </button>
                    <button
                        type = 'button' 
                        value = 'Done'
                        className = 'btn btn-warning'
                        style = {{marginLeft: 10}}
                    >
                        <i class="glyphicon glyphicon-ban-circle" style = {{marginRight: 5}}></i>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    )

}