import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from'./components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBzfKpdc8VG36ldqUnRD2UrGBGhIJL-tiU';

// Create a new component. This component should produce some HTML

class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null,
        };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
            // this.setState({ videos: videos}) the same as above
        });
    }
    render() {
    return (
    <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
    </div>
    );
    }
}


// Take this component's generate HTML and put in on the page(in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));