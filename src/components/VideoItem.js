import React from 'react';

const VideoItem =({video, onVideoSelect})=> {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return(
    <div onClick={()=>onVideoSelect(video)} className="item">
        {/* <img className="ui image" src={video.snippet.thumbnails.medium.url} /> */}
        <iframe src={videoSrc} />
        <br />
        <div className="content">
        <div className="header">{video.snippet.title}</div>
        </div>
        <br />
        {video.snippet.channelId}
        <br />
        </div>
)}

export default VideoItem
