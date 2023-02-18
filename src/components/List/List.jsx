import {useSelector} from 'react-redux'
import { selectSearch } from '../../store/searchSlice'
import { Li } from './Li'

export const List = () => {
    const {data} = useSelector(selectSearch)

    return (
        <>
            <ul>
                {data?.length ? data.map((user, key)=>(
                    <Li key={key} {...user}/>  
                )) : data?.id ? <Li {...data}/> : null}
            </ul>
        </>
    
    )
}

