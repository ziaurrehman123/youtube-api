import React from 'react'

const VideoItem =({video})=> {
    return(
    <div>
        <img src={video.snippet.thumbnails.medium.url} />
        <br />
        {video.snippet.title}
        <br />
        {video.snippet.channelId}
        <br />
        </div>
)}

export default VideoItem
