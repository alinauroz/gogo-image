import React from 'react'

export default function () {

    const [loading, setLoading] = React.useState(false);

    const handleSubmission = () => {

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