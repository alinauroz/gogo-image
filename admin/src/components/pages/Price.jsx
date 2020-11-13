import React, { useEffect } from 'react'
import Field from '../unit/Field'
import { request } from '../../utils/request'
import _ from 'lodash'

export default function (props) {

    const [shouldLoad, setShouldLoad] = React.useState(true);
    const [price, setPrice] = React.useState({})

    const [text, setTextPrice] = React.useState();
    const [year, setYearPrice] = React.useState();
    const [template, setTemplatePrice] = React.useState();
    const [superimpose1, setSuperimpose1Price] = React.useState();
    const [superimpose2, setSuperimpose2Price] = React.useState();
    const [retouchSingle, setRetouchSinglePrice] = React.useState();
    const [retouchGroup, setRetouchGroupPrice] = React.useState();
    const [nextDayService, setNextDayServicePrice] = React.useState();

    const update = async (e) => {
        try {
            e.target.disabled = false;

            let response = await request({
                route: 'price',
                params: '/price',
                method: 'PUT',
                credentials: 'include',
                body: {
                    text,
                    year,
                    template,
                    superimpose1,
                    superimpose2,
                    retouchSingle,
                    retouchGroup,
                    nextDayService
                }
            })

            console.log(response)

            e.target.disabled = false;
        }
        catch (err) {
            console.error(err);
            e.target.disabled = false;
        }
    }

    useEffect(() => {

        if (shouldLoad) {
            request({
                route: 'price',
                method: 'GET'
            }).then(data => {
                if (data.total > 0) {
                    setPrice(data.data[0]);

                    let prices = data.data[0];

                    setTextPrice(prices.text)
                    setYearPrice(prices.year)
                    setTemplatePrice(prices.template)
                    setSuperimpose1Price(prices.superimpose1)
                    setSuperimpose2Price(prices.superimpose2)
                    setRetouchSinglePrice(prices.retouchSingle)
                    setRetouchGroupPrice(prices.retouchGroup)
                    setNextDayServicePrice(prices.nextDayService)

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
                    value = {template}
                    onChange = {(e) => setTemplatePrice(e.target.value)}
                />
                <Field 
                    title = 'Retouch Single'
                    placeholder = 'Retouch Single Price'
                    inputType = 'number'
                    style = {{marginTop: 10}}
                    addon = '$'
                    value = {retouchSingle}
                    onChange = {(e) => setRetouchSinglePrice(e.target.value)}
                />
                <Field 
                    title = 'Retouch Group'
                    placeholder = 'Retouch Group Price'
                    inputType = 'number'
                    style = {{marginTop: 10}}
                    addon = '$'
                    value = {retouchGroup}
                    onChange = {(e) => setRetouchGroupPrice(e.target.value)}
                />
                <Field 
                    title = 'Text'
                    placeholder = 'Text Price'
                    inputType = 'number'
                    style = {{marginTop: 10}}
                    addon = '$'
                    value = {text}
                    onChange = {(e) =>  setTextPrice(e.target.value)}
                />
                <Field 
                    title = 'Year'
                    placeholder = 'Year Price'
                    inputType = 'number'
                    style = {{marginTop: 10}}
                    addon = '$'
                    value = {year}
                    onChange = {(e) => setYearPrice(e.target.value)}
                />
                <Field 
                    title = 'superimpose 1'
                    placeholder = 'superimpose 1 Price'
                    inputType = 'number'
                    style = {{marginTop: 10}}
                    addon = '$'
                    value = {superimpose1}
                    onChange = {(e) => setSuperimpose1Price(e.target.value)}
                />
                <Field 
                    title = 'superimpose 1'
                    placeholder = 'superimpose 2 Price'
                    inputType = 'number'
                    style = {{marginTop: 10}}
                    addon = '$'
                    value = {superimpose2}
                    onChange = {(e) => setSuperimpose2Price(e.target.value)}
                />
                <Field 
                    title = 'Next Day Service'
                    placeholder = 'Price of Next Day Service'
                    inputType = 'number'
                    style = {{marginTop: 10}}
                    addon = '$'
                    value = {nextDayService}
                    onChange = {(e) => setNextDayServicePrice(e.target.value)}
                />
                <div style = {{marginTop: 20}}>
                    <button
                        type = 'button' 
                        value = 'Done'
                        className = 'btn btn-success'
                        disabled = {shouldLoad}
                        onClick = {update}
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