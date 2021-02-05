import React from 'react'
import {request } from '../../utils/AppRequest'

const Dispute = (props) => {

    const [loading, setLoading] = React.useState(true);
    const [id, setId] = React.useState(props.id);
    const [error, setError] = React.useState('');
    const [data, setData] = React.useState({});

    if (id != props.id) {
        setId(props.id);
    }

    const setData = async () => {
        let res = await request({
            route: 'contact/' + id,
        });
        if (res.data) {
            console.log("MSGS");
            setData(res.data)
        }
        else {
            setError('Error')
        }

    }

    React.useEffect(() => {

        setLoading(true);

        setData();


    }, [id]);

    if (props.hidden)
        return null;

    

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                background: '#fefefeaa',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div style={{maxHeight: 550, width: 450}}>
                {
                    loading ? <>Loading ...</>:
                    error ? <>{error}</>:
                    <>Data</>
                }
            </div>
        </div>
    )

}

export default Dispute;