import React, { Component } from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
export default class App extends Component {
    state={
        videos:[]
    }
    onTermSubmit= async(term)=>{
        
        const response = await youtube.get('./search',{
            params:{
                q:term
            }
        });
        console.log(response)
        this.setState({videos: response.data.items })

    }
    render() {
        return (
            <div className="ui container">
                <h2>Videos from Youtube</h2>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <br />
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}
