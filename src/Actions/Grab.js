import axios from "axios";
import {
    CLEAR_VIDEO,
    GRAB_QUERY,
    SET_DATA_MODAL,
    SET_SHOW,
    SET_UPDATE,
    VIDEO_GRAB_START,
    VIDEO_GRAB_SUCCESS
} from "./actionTypes";


export function grab(query, page) {

    return  dispatch =>{
            dispatch(grabQuery(query))
            dispatch(videoGrabStart())
            axios({
                url: '/search',
                baseURL: 'https://www.googleapis.com/youtube/v3/',
                params: {
                    q: query,
                    pageToken: page,
                    part: 'snippet',
                    fields: 'nextPageToken,pageInfo,items(,id(videoId),snippet(title,thumbnails,publishedAt,description))',
                    type: "video",
                    maxResults: "10",
                    key: 'AIzaSyApCI_3WEfKQPo82XX1UOvMBBjnFrJTAe4'
                },
            }).then(res => {
                dispatch(videoGrabSuccess(res.data.items,res.data.nextPageToken))
            })
        }
}

export function videoGrabStart() {
    return {
        type: VIDEO_GRAB_START
    }
}
export function clearVideos() {
    return {
        type: CLEAR_VIDEO
    }
}
export function videoGrabSuccess(videos,page) {
    return {
        type: VIDEO_GRAB_SUCCESS,
        videos,page
    }
}
export function setShow(){
    return{
        type: SET_SHOW
    }
}
export function setUpdate(){
    return{
        type: SET_UPDATE
    }
}
export function setModalData(data){
    return{
        type: SET_DATA_MODAL,data
    }
}
export function grabQuery(query) {
    return{
        type: GRAB_QUERY,
        query
    }

}



