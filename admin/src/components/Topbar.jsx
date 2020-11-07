import React from 'react'

export default function () {
    return (
        <div className = 'topbar'>
            <span>
                <h3 style = {{display: 'inline-block', margin: 0, marginTop: 10, marginLeft: 20}}>Admin LTE</h3>
            </span>
            <div className = 'topbar-user' data-toggle="collapse" href="#collapseExample">
                Ali Nauroze ▾
            </div>
            <div class = 'collapse' id = 'collapseExample' style = {{zIndex: 2, position: 'absolute', width: 200, right: 0, top: 50, padding: 5, background: 'white', boxShadow: '0px 0px 2px grey'}}>
                <input 
                    value = 'Logout' 
                    type = 'button' 
                    className = 'btn btn-warning' 
                    onClick = {() => {
                        localStorage.setItem('token', '');
                        localStorage.setItem('admin', '');
                        window.location.reload();
                    }}
                />
            </div>
        </div>
    )
}