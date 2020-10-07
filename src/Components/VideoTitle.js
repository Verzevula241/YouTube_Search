import React, {useCallback, useRef, useState} from 'react';
import useVideo from "./useVideo";
import Search from "./Search";
import Video from "./Video";
import Modal from "./Modal";
import './VideoTitle.css'


function VideoTitle() {
    const [query, setQuery] = useState('')
    const [pageNumber, setPageNumber] = useState('')
    const [show,setShow] = useState(false)
    const [modalData,setModalData] = useState([])
    const [data,setData] = useState(false)


    const {
        videos,
        page,
        loading
    } = useVideo(query, pageNumber)


    const observer = useRef()
    const lastBookElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setPageNumber(page)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading])

    function handleSearch() {
        setQuery(document.getElementById('search').value)
        setPageNumber('')
    }
    function handleClick(id) {
        setModalData(videos[id])
        setShow(!show)
        console.log(show)
    }
    function upModal(){
        setData(!data)
    }
    function handleClose() {
        setShow(!show)
    }

    return (
        <div style={{marginTop:'2em'}}>
            <Search handleFormSubmit={handleSearch}/>
            <Modal show={show} data = {modalData} onClose={handleClose} update={upModal}/>
            {
                videos.map((book, index) => {
                    if (videos.length === index + 1){
                       return <div ref={lastBookElementRef} onClick={(e) => handleClick(index)}>
                       <Video
                            key={index}
                            data = {book}
                        /></div>
                    }else return <div onClick={(e) => handleClick(index)}><Video
                        key={index}
                        data = {book}
                    /></div>

                }
            )}
            <div>{loading && <div className="c-loader"/>}</div>
            {/*<button onClick={()=>{setPageNumber(page)}}>page</button>*/}
        </div>
    )
}

export default VideoTitle;
