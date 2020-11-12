import React, { useEffect } from 'react'
import Field from '../unit/Field'
import { request } from '../../utils/request'
import _ from 'lodash'

export default function (props) {

    const [shouldLoad, setShouldLoad] = React.useState(true);
    const [price, setPrice] = React.useState({})

    useEffect(() => {
        if (shouldLoad) {
            request({
                route: 'price',
                method: 'GET'
            }).then(data => {
                if (data.total > 0) {
                    setPrice(data.data[0]);
                }
                setShouldLoad(false);
            })
        }
    })

    return (
        <div className = 'card'>
            <h3 style = {{margin: 0, marginBottom: 10}}>Set Price</h3>
            <div style = {{minWidth: 300, width: '60%'}}>
                <Field 
                    title = 'Template'
                    placeholder = 'Template Price'
                    inputType = 'number'
                    style = {{marginTop: 10}}
                    addon = '$'
                />
                <Field 
                    title = 'Retouch Single'
                    placeholder = 'Retouch Single Price'
                    inputType = 'number'
                    style = {{marginTop: 10}}
                    addon = '$'
                />
                <Field 
                    title = 'Retouch Group'
                    placeholder = 'Retouch Group Price'
                    inputType = 'number'
                    style = {{marginTop: 10}}
                    addon = '$'
                />
                <Field 
                    title = 'Text'
                    placeholder = 'Text Price'
                    inputType = 'number'
                    style = {{marginTop: 10}}
                    addon = '$'
                />
                <Field 
                    title = 'Year'
                    placeholder = 'Year Price'
                    inputType = 'number'
                    style = {{marginTop: 10}}
                    addon = '$'
                />
                <Field 
                    title = 'Superimpose 1'
                    placeholder = 'Superimpose 1 Price'
                    inputType = 'number'
                    style = {{marginTop: 10}}
                    addon = '$'
                />
                <Field 
                    title = 'Superimpose 1'
                    placeholder = 'Superimpose 2 Price'
                    inputType = 'number'
                    style = {{marginTop: 10}}
                    addon = '$'
                />
                <Field 
                    title = 'Next Day Service'
                    placeholder = 'Price of Next Day Service'
                    inputType = 'number'
                    style = {{marginTop: 10}}
                    addon = '$'
                />
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