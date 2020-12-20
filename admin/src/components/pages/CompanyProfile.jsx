import React from 'react'
import Field from '../unit/Field'
import getFormData from '../../utils/getFormData'
import ImageLoader from '../../utils/ImageLoader'
import {request} from '../../utils/request'

export default function () {

    const [logo, setLogo] = React.useState('')
    const [info, setInfo] = React.useState()
    const [message, setMessage] = React.useState('')

    if (! info) {
        request({
            route: 'info',
            method: 'GET'
        }).then(d => {
            setInfo(d.data ? d.data[0] || {} : {})
        })
    }

    const handleOnchange = (e) => {

        setInfo({
            ... info,
            [e.target.name]: e.target.value
        })

    }

    const handleForm = async (e) => {
        e.preventDefault();
        let formData = getFormData(e.target)

        if (logo) {

            let res = await request({
                route: 'images',
                method: 'POST',
                body: {
                    base64: logo
                }
            })

            if (res.fileName) {
                formData.logo = res.fileName;
            }

        }

        //for (let x in formData) {
        //    if (formData[x] == '')
        //        delete formData[x]
        //}

        let res = await request({
            route: 'info',
            params: '/info',
            method: 'PUT',
            credentials: 'include',
            body: formData
        })

        if (res.status == 'success')
            setMessage('Updated Successfully')
        else
            setMessage('Some error occurred')
    }

    const handleImage = (images) => setLogo(images.logo)

    return info ?
    (
        <div className = 'card'>
            <h3 style = {{margin: 0, marginBottom: 10}}>Company Profile</h3>
            <div style = {{minWidth: 300, width: '60%'}}>
                <form action ='/' onSubmit = {handleForm}>
                <Field 
                    name = 'name'
                    title = 'Company Name'
                    placeholder = 'Company Name'
                    style = {{marginTop: 10}}
                    value = {info.name}
                    onChange = {handleOnchange}
                />
                <Field 
                    name = 'address'
                    title = 'Address'
                    placeholder = 'Address'
                    style = {{marginTop: 10}}
                    value = {info.address}
                    onChange = {handleOnchange}
                />
                <Field 
                    name = 'city'
                    title = 'City'
                    placeholder = 'City'
                    style = {{marginTop: 10}}
                    value = {info.city}
                    onChange = {handleOnchange}
                />
                <Field 
                    name = 'state'
                    title = 'State'
                    placeholder = 'State'
                    inputType = 'text'
                    style = {{marginTop: 10}}
                    value = {info.state}
                    onChange = {handleOnchange}
                />
                <Field 
                    name = 'zip'
                    title = 'ZIP'
                    placeholder = 'ZIP'
                    inputType = 'text'
                    style = {{marginTop: 10}}
                    value = {info.zip}
                    onChange = {handleOnchange}
                />
                <Field 
                    name = 'telephone'
                    title = 'Telephone'
                    placeholder = 'Telephone'
                    inputType = 'text'
                    style = {{marginTop: 10}}
                    value = {info.telephone}
                    onChange = {handleOnchange}
                />
                <Field 
                    name = 'domain'
                    title = 'Domain'
                    placeholder = 'Domain'
                    inputType = 'text'
                    style = {{marginTop: 10}}
                    value = {info.domain}
                    onChange = {handleOnchange}
                />
                <Field 
                    name = 'api'
                    title = 'API Link (domain or IP)'
                    placeholder = 'API Link'
                    inputType = 'text'
                    style = {{marginTop: 10}}
                    value = {info.api}
                    onChange = {handleOnchange}
                />
                <Field 
                    name = 'email'
                    title = 'Email'
                    placeholder = 'Email'
                    inputType = 'email'
                    style = {{marginTop: 10}}
                    value = {info.email}
                    onChange = {handleOnchange}
                />
                <Field 
                    name = 'google'
                    title = 'G PLUS'
                    placeholder = 'Google Plus URL'
                    inputType = 'text'
                    style = {{marginTop: 10}}
                    value = {info.google}
                    onChange = {handleOnchange}
                />
                <Field 
                    name = 'fb'
                    title = 'Facebook Page'
                    placeholder = 'Facebook Page URL here'
                    inputType = 'text'
                    style = {{marginTop: 10}}
                    value = {info.fb}
                    onChange = {handleOnchange}
                />
                <Field 
                    name = 'twitter'
                    title = 'Twitter'
                    placeholder = 'Twitter URL here'
                    inputType = 'text'
                    style = {{marginTop: 10}}
                    value = {info.twitter}
                    onChange = {handleOnchange}
                />
                <Field 
                    name = 'insta'
                    title = 'Instagram Page'
                    placeholder = 'Instagram Page URL here'
                    inputType = 'text'
                    style = {{marginTop: 10}}
                    value = {info.insta}
                    onChange = {handleOnchange}
                />
                <div style = {{marginTop: 5}}>
                    <p>Upload Logo</p>
                    <ImageLoader 
                        sizes = {{logo: {minWidthOrHeight: 400}}}
                        setImages = {handleImage}
                    />
                </div>
                <p style = {{margin: '5px 0px'}}>
                    {message}
                </p>
                <div style = {{marginTop: 20}}>
                    <button
                        type = 'submit' 
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
                        Cancel
                    </button>
                </div>
                </form>
            </div>
        </div>
    )
    : 'loading ...'

}