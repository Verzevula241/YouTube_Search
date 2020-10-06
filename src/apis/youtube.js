import axios from 'axios';
const KEY = 'AIzaSyACCTLYG4QX_kXTjFWGMJyLSicNDIwfJhY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        fields: 'nextPageToken,pageInfo,items(,id(videoId),snippet(title,thumbnails,publishedAt,description))',
        type: "video",
        maxResults: "10",
        key: KEY
    }
})