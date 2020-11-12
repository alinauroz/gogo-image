import React, { useEffect } from 'react'
import Field from '../unit/Field'
import { request } from '../../utils/request'
import _ from 'lodash'

export default function (props) {

    const [shouldLoad, setShouldLoad] = React.useState(true);
    const [price, setPrice] = React.useState({})

    const [textPrice, setTextPrice] = React.useState();
    const [yearPrice, setYearPrice] = React.useState();
    const [templatePrice, setTemplatePrice] = React.useState();
    const [superImpose1Price, setSuperimpose1Price] = React.useState();
    const [superImpose2Price, setSuperimpose2Price] = React.useState();
    const [retouchSinglePrice, setRetouchSinglePrice] = React.useState();
    const [retouchGroupPrice, setRetouchGroupPrice] = React.useState();
    const [nextDayPrice, setNextDayPrice] = React.useState();

    useEffect(() => {

        console.log(
            textPrice,
            yearPrice,
            templatePrice,
            superImpose1Price,
            superImpose2Price,
            retouchSinglePrice,
            retouchGroupPrice,
            nextDayPrice
        )

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
                    value = {templatePrice}
                    onChange = {(e) => setTemplatePrice(e.target.value)}
                />
                <Field 
                    title = 'Retouch Single'
                    placeholder = 'Retouch Single Price'
                    inputType = 'number'
                    style = {{marginTop: 10}}
                    addon = '$'
                    value = {retouchSinglePrice}
                    onChange = {(e) => setRetouchSinglePrice(e.target.value)}
                />
                <Field 
                    title = 'Retouch Group'
                    placeholder = 'Retouch Group Price'
                    inputType = 'number'
                    style = {{marginTop: 10}}
                    addon = '$'
                    value = {retouchGroupPrice}
                    onChange = {(e) => setRetouchGroupPrice(e.target.value)}
                />
                <Field 
                    title = 'Text'
                    placeholder = 'Text Price'
                    inputType = 'number'
                    style = {{marginTop: 10}}
                    addon = '$'
                    value = {textPrice}
                    onChange = {(e) =>  setTextPrice(e.target.value)}
                />
                <Field 
                    title = 'Year'
                    placeholder = 'Year Price'
                    inputType = 'number'
                    style = {{marginTop: 10}}
                    addon = '$'
                    value = {yearPrice}
                    onChange = {(e) => setYearPrice(e.target.value)}
                />
                <Field 
                    title = 'Superimpose 1'
                    placeholder = 'Superimpose 1 Price'
                    inputType = 'number'
                    style = {{marginTop: 10}}
                    addon = '$'
                    value = {superImpose1Price}
                    onChange = {(e) => setSuperimpose1Price(e.target.value)}
                />
                <Field 
                    title = 'Superimpose 1'
                    placeholder = 'Superimpose 2 Price'
                    inputType = 'number'
                    style = {{marginTop: 10}}
                    addon = '$'
                    value = {superImpose2Price}
                    onChange = {(e) => setSuperimpose2Price(e.target.value)}
                />
                <Field 
                    title = 'Next Day Service'
                    placeholder = 'Price of Next Day Service'
                    inputType = 'number'
                    style = {{marginTop: 10}}
                    addon = '$'
                    value = {nextDayPrice}
                    onChange = {(e) => setNextDayPrice(e.target.value)}
                />
                <div style = {{marginTop: 20}}>
                    <button
                        type = 'button' 
                        value = 'Done'
                        className = 'btn btn-success'
                        disabled = {shouldLoad}
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