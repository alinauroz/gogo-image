import React from 'react'

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

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
                        deleteAllCookies();
                        localStorage.setItem('token', '');
                        localStorage.setItem('admin', '');
                        
                        window.location.reload();
                    }}
                />
            </div>
        </div>
    )
}