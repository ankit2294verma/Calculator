import React, {useState, useEffect} from 'react';

const APIdata = () => {
    const [data, setdata] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(result => setdata(result))
    })

    return(
        <>
            {
                data.map(item=>{
                    return <h2 data-testid={item.name}>{item.name}</h2>
                })
            }
        </>
    )
}
export default APIdata;