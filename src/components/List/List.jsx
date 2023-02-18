import {useState, useEffect} from 'react'

export const List = () => {
    const url = "https://random-data-api.com/api/v2/users?size=3"
    const [data, setData] = useState([])
    const [value, setValue] = useState(5)

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
    }, [value])
    console.log(data)
    return (
        <>
            <input type='text' placeholder='Поиск' value={value} onChange={({target}) => {
                setValue(target.value)
            }} />
        </>
    
    )
}
