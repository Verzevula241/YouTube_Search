import React, {useCallback, useRef, useState} from 'react';
import './VideoTitle.css'
import {connect} from "react-redux"
import {clearVideos, grab, setModalData, setShow} from "../Actions/Grab";
import Search from "./Search";
import Modal from "./Modal";
import Video from "./Video";

function VideoTitle(state) {

    const [data,setData] = useState(false)
    const observer = useRef()
    const lastBookElementRef = useCallback(node => {
        if (state.loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                state.getVideos(state.query,state.page)
            }
        })
        if (node) observer.current.observe(node)
    }, [state.loading])


    function handleClick(id) {
        state.setModalData(state.videos[id])
        state.setShow()
    }

    function handleSearch() {
        state.clearVideos()
        state.getVideos(document.getElementById('search').value,"")
    }
    function upModal(){
        setData(!data)
    }

    return (
        <div style={{marginTop:'2em'}}>
            <Search handleFormSubmit={handleSearch}/>
            <Modal show={state.showMod} data = {state.dataModal} onClose={()=>{state.setShow()}} update={upModal}/>
            {
                state.videos.map((book, index) => {
                    if (state.videos.length === index + 1){
                       return <div ref={lastBookElementRef} key={index} onClick={(e) => handleClick(index)}>
                       <Video
                            key={index}
                            data = {book}
                        /></div>
                    }else return <div key={index} onClick={(e) => handleClick(index)}><Video
                        key={index}
                        data = {book}
                    /></div>

                }
            )}
            <div>{state.loading && <div className="c-loader"/>}</div>
        </div>
    )


}

function mapStateToProps(state){
    return{
        query: state.videoGrad.query,
        dataModal: state.videoGrad.dataModal,
        videos: state.videoGrad.videos,
        page: state.videoGrad.page,
        loading: state.videoGrad.loading,
        showMod: state.videoGrad.showMod
    }
}
function mapDispatchToProps(dispatch){
    return{
        clearVideos: ()=>{dispatch(clearVideos())},
        getVideos: (query,page)=> {dispatch(grab(query,page))},
        setShow: ()=>{dispatch(setShow())},
        setModalData: data=>{dispatch(setModalData(data))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(VideoTitle);

