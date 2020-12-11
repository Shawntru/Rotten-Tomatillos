import React, { Component } from 'react';
import ReactPlayer from 'react-player/youtube';

class TrailerPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trailerLink: '',
    };
  }

  render() {
    return (
      <section>
        <h2>MOVIE TRAILER HERE</h2>
        <ReactPlayer
          // className="react-player"
          width="100%"
          height="100%"
          controls={true}
          muted={true}
          playing={true}
          url={`https:www.https://www.youtube.com/watch?v=KK8FHdFluOQ`}
        />
      </section>
    );
  }
}

export default TrailerPreview;
