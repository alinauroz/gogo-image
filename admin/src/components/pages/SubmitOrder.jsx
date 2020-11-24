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

        let res = await fetch(api + '/zip', {
            method: 'POST',
            credentials: 'include',
            body: formData
        })

        console.log(res);

    }

    return (
        <div className = 'card'>

            <form action = '' onSubmit = {handleSubmission}>
                <input type = 'file' name = 'submission' />
            </form>

            <input type = 'submit' value = 'Submit' disabled = {loading}/>

        </div>
    )

}