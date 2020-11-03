
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

export default function () {
    return (
        <>
            {
                STATS.map((stat, index) => {
                    return (
                        <div className = 'stat-container'>
                            <h2 style = {{marginBottom: 2}}>999</h2>
                            <h5 style = {{marginTop: 2}}>{stat.title}</h5>
                        </div>
                    )
                })
            }
        </>
    )
}