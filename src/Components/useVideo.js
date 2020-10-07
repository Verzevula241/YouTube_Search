import { useEffect, useState } from 'react'
import axios from 'axios'


export default function useBookSearch(query, pageNumber) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [books, setBooks] = useState([])
    const [page,setPage] = useState('')
    const KEY = 'AIzaSyCaJVhCQ5O9cZW_r0JTw7p4FAohl93rfII'

    useEffect(() => {
        setBooks([])
    }, [query])

    useEffect(() => {
        if(query!==''){
            setLoading(true)
            setError(false)
        axios({
            url: '/search',
            baseURL: 'https://www.googleapis.com/youtube/v3/',
            params: {
                q: query,
                pageToken: pageNumber,
                part: 'snippet',
                fields: 'nextPageToken,pageInfo,items(,id(videoId),snippet(title,thumbnails,publishedAt,description))',
                type: "video",
                maxResults: "10",
                key: KEY
            },
        }).then(res => {
            setBooks(prevBooks => {
                console.log("CALL")
                return [...prevBooks, ...res.data.items]
            })
            setPage(res.data.nextPageToken)
            setLoading(false)
        })
    }}, [query, pageNumber])


    return { loading, error, books , page}
}
