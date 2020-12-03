
const STATS = [
    {title: 'Buyers'},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
]

export default function (props) {
    return (
        <>
            {
                STATS.map((stat, index) => {
                    return (
                        <div className = 'stat-container'>
                            <h2 style = {{marginBottom: 2}}>{props.base.users ? props.base.users.data.length: '-'}</h2>
                            <h5 style = {{marginTop: 2}}>{stat.title}</h5>
                        </div>
                    )
                })
            }
        </>
    )
}