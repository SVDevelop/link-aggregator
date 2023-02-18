import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { selectSearch, setSearch, setSearchData } from '../../store/searchSlice';

const url = "https://random-data-api.com/api/v2/users?size="

const Search = () => {
    const {data, value} = useSelector(selectSearch)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch(`${url}${value}`)
        .then(res => res.json())
        .then(data => dispatch(setSearchData({data})))
    }, [value])
    console.log('value: ',data)
    return (
        <>
            <input type='text' placeholder='Поиск' value={value} onChange={({target}) => {
                dispatch(setSearch({value: target.value}))
            }} />
        </>
    );
};

export default Search;