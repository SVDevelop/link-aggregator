import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: '',
    data: []
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch(state, action) {
            state.value = action.payload.value
        },
        setSearchData(state, action) {
            state.data = action.payload.data
        },
        clearSearch(state) {
            state.value = ''
        }
    }
}) 

export const selectSearch = (state) => state.search
export const {setSearch, setSearchData, clearSearch} = searchSlice.actions
export default searchSlice.reducer