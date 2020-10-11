import {combineReducers} from "redux";
import videoGrab from "./videoGrab";
import bookmarksReducer from "./bookmarksReducer"

export default combineReducers({
    videoGrad: videoGrab,
    bookReducer: bookmarksReducer
})

