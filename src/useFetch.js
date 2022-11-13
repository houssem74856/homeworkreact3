import {useReducer,useEffect} from 'react'

function reducer(data,action) {
    return action.blogs
}

function useFetch(link) {
    const [data,dispatch] = useReducer(reducer,[])

    useEffect(() => {
        fetch(link)
        .then(res => {
            return res.json()}
        )
        .then(data => {
            dispatch({blogs : data})
        })
    },[])

    return data
}

export default useFetch;