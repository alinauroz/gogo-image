import React from 'react'
import {api} from '../../data/api'
import {request} from '../../utils/request'

export default function () {

    const [loading, setLoading] = React.useState(false);
    const [name, setName] = React.useState('')
    const [error, setError] = React.useState('No file chosen');

    const handleSubmission = async (e) => {
        e.preventDefault();

        if (error)
            return alert(error)

        let formData = new FormData(e.target)

        let res = await fetch(api + 'zips', {
            method: 'POST',
            credentials: 'include',
            body: formData,
        })

        let {status} = await res.json();

        if (status !== 'success')
            return alert('Error occurred while uploading zip')
        
        let {data} = await request({
            method: 'GET',
            params: 'invoice/' + name,
            route: 'orders/',
            credentials: 'include',
        })

        if (! data) {
            return alert('Cannot find any order with given invoice no ('+name+')')
        }

        res = await request({
            route: 'orders/',
            params: data._id + '/complete',
            method: 'PUT',
            credentials: 'include'
        })

        if (res.status == 'success')
            alert('Order submitted and marked as complete')
        else
            alert('Error occurred while marking it complete')

    }

    const handleChange = (e) => {
        let name = e.target.files[0].name;

        if (name.split('.')[1] !== 'zip') {
            return setError('Only zip submissions allowed')
        }

        setName(name.split('.')[0])

        setError('')

    } 

    return (
        <div className = 'card'>

            <h2 style = {{margin: '5px 0px 10px 0px'}}>Submit Order</h2>
            <p>Put all submissions in a zip file and submit the zip file and name it according to the Invoice No. </p>
            <form action = '' onSubmit = {handleSubmission}>
                <input type = 'file' name = 'submission' onChange = {handleChange} className = 'form-control' />
                <input type = 'submit' value = 'Submit' disabled = {loading} className = 'btn btn-primary' style = {{marginTop: 5}} />
            </form>

        </div>
    )

}