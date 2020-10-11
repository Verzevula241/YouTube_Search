import {
    CLEAR_VIDEO,
    GRAB_QUERY,
    SET_DATA_MODAL,
    SET_SHOW, SET_UPDATE,
    VIDEO_GRAB_START,
    VIDEO_GRAB_SUCCESS
} from "../Actions/actionTypes";

const initialState = {
    query: '',
    loading: false,
    page: '',
    videos: [],
    dataModal: [],
    showMod: false,
    update: false
}

// Reducer
export default function videoGrab(state=initialState,action){
    switch (action.type) {
        case VIDEO_GRAB_START:{
            return {
                ...state,loading: true
            }
        }
        case CLEAR_VIDEO:{
            return {
                ...state,videos: [],page: ''
            }
        }
        case VIDEO_GRAB_SUCCESS:{
            return {
                ...state,
                loading: false,
                videos: [...state.videos,...action.videos],
                page: action.page
            }
        }
        case SET_SHOW:{
            return {
                ...state,
                showMod: !state.showMod
            }
        }
        case SET_UPDATE:{
            return {
                ...state,
                update: !state.update
            }
        }
        case SET_DATA_MODAL:{
            return {
                ...state,
                dataModal: action.data
            }
        }
        case GRAB_QUERY:{
            return {
                ...state,
                query: action.query
            }
        }
        default:
            return state
    }

}