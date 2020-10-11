import axios from "axios";
import {CLEAR_VIDEO, GRAB_QUERY, VIDEO_GRAB_START, VIDEO_GRAB_SUCCESS} from "./actionTypes";
import {useSelector} from "react-redux";
import {useEffect} from "react";


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
                    fields: 'nextPageToken,items(snippet(title))',
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
export function grabQuery(query) {
    return{
        type: GRAB_QUERY,
        query
    }

}



