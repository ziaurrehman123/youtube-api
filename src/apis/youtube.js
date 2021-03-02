import axios from 'axios'
const KEY ="AIzaSyBpCjmbRrj1fYU-BEpN8hhzFxP_-ZxHtpg"

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:"snippet",
        maxResults: 50,
        key: KEY
    }
});