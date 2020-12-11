import React, { Component } from 'react';
import ReactPlayer from 'react-player';

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
          url={`https:www.https://www.youtube.com/watch?v=KK8FHdFluOQ`}
        />
      </section>
    );
  }
}

export default TrailerPreview;
