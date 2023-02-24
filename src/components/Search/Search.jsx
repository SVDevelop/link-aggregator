import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { selectSearch, setSearch, setSearchData } from '../../store/searchSlice';

import clsx from 'clsx';
import styles from './Search.module.scss'

const url = "https://random-data-api.com/api/v2/users?size="

const Search = () => {
    const {data, value} = useSelector(selectSearch)
    const dispatch = useDispatch()
    const [hidden, setHidden] = useState(false)

    useEffect(() => {
        fetch(`${url}${value}`)
        .then(res => res.json())
        .then(data => dispatch(setSearchData({data})))
    }, [value])
    console.log('value: ',data)
    return (
        <div className={clsx(styles.wrapper)}>
            <input className={clsx(styles.input, {[styles.hidden]: hidden})} type='number' placeholder='Поиск' value={value} onChange={({target}) => {
                dispatch(setSearch({value: target.value}))
            }} />
            <button className={clsx(styles.btn)} onClick={() => {
                setHidden(x => !x)
            }}>btn</button>
        </div>
    );
};

export default Search;

