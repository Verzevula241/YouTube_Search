import axios from 'axios';
const KEY = 'AIzaSyD-oOzeT-1gMACltZ_V5i11QyryWf4RY2c';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        fields: 'items(id(videoId),snippet(title,thumbnails,publishedAt,description))',
        type: "video",
        maxResults: 10,
        key: KEY
    }
})