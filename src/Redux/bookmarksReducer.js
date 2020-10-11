import {BOOK_GRAB} from "../Actions/actionTypes";

const initialState = {
    videos: []
}

export default function bookmarksReducer(state=initialState,action){
    switch (action.type) {
        case BOOK_GRAB:{
            return {
                ...state,videos: action.videos
            }
        }
        default: {
            return state
        }
    }
}