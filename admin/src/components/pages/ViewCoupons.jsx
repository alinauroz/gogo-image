import Viewer from '../../utils/Viewer'
import {request} from '../../utils/request'

export default function (props) {

    const [data, setData] = React.useState();
    const [error, setError] = React.useState();

    if (! data) {
        let res = await request({
            route: 'coupons'
        });
        if (res.data) {
            setData(res.data);
        }
        else {
            setError('Error while fetching coupons')
        }
    }

    if (data) {
        return (
            <Viewer 
                data = {data}
            />
        )
    }
    else {
        return error ? <>{error}</> : <>Loading ...</>
    }

}