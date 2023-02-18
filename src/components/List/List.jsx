import {useSelector} from 'react-redux'
import { selectSearch } from '../../store/searchSlice'
import Search from '../Search/Search'

export const List = () => {
    const {data} = useSelector(selectSearch)

    return (
        <>
            <Search />
            <ul>
                {data.length ? data.map((user, key)=>(
                  <Li key={key} {...user}/>  
                )) : <Li {...data}/>}
            </ul>
        </>
    
    )
}

function Li ({address, email}) {
    return (<>
        <li style={{
            margin: '2px 0 0 0',
            padding: '2px 5px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            border: '1px solid',
            borderRadius: '6px'
        }}>
            <span>city: {address?.city}</span>
            <span>email: {email}</span>
        </li>
    </>)
}