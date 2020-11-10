import React from 'react'

let user = localStorage.getItem('user');

export default function (props) {

    if (user) {

        const [firstName, setFirstName] = React.useState(user.firstName);
        const [lastName, setLastName] = React.useState(user.lastName);
        const [email, setEmail] = React.useState(user.email);

        return (
            <></>
        )

    }
    else
        return (
            <></>
        )

}