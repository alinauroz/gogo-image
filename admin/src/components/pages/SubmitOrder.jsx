import React from 'react'
import {api} from '../../data/api'

export default function () {

    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('No file chosen');

    const handleSubmission = async (e) => {
        e.preventDefault();

        if (error)
            return alert(error)

        let formData = new FormData(e.target)

        let res = await fetch(api + 'zips', {
            method: 'POST',
            credentials: 'include',
            body: formData
        })

        console.log(res);

    }

    const handleChange = (e) => {
        let name = e.target.files[0].name;

        if (name.split('.')[1] !== 'zip') {
            alert(1)
            return setError('Only zip submissions allowed')
        }

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