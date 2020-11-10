import React from 'react'
import FormRenderrer from '../../utils/FormRenderer'

let user = localStorage.getItem('user');


export default function (props) {

    if (user) {

        const [firstName, setFirstName] = React.useState(user.firstName);
        const [lastName, setLastName] = React.useState(user.lastName);
        const [email, setEmail] = React.useState(user.email);

        const fields = [
            {type: 'text', title: 'First Name', name: 'firstName', value: firstName},
        ]

        return (
            <FormRenderrer 
                fields = {fields}
            />
        )

    }
    else
        return (
            <>Nothing</>
        )

}