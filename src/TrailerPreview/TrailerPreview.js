import React, { Component } from 'react';
import ReactPlayer from 'react-player/youtube';
import './TrailerPreview.scss';

class TrailerPreview extends Component {
  constructor({ trailerInfo }) {
    super();
    this.state = {
      trailerMovie: {},
    };
  }

  componentDidMount = (trailerInfo) => {
    debugger;
    this.setState({ trailerMovie: trailerInfo });
  };

  render() {
    return (
      <section>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            // Use of the 'no-cookie' tag prevents share/watch later
            // but also throws console errors
            url={`https:www.https://www.youtube-nocookie.com/watch?v=KK8FHdFluOQ`}
            width="100%"
            height="80%"
            controls={false}
            muted={true}
            playing={true}
            config={{
              youtube: {
                playerVars: {
                  disablekb: 1,
                  fs: 0,
                  iv_load_policy: 3,
                  loop: 1,
                  // playlist: `${props.videoId}`,
                  modestbranding: 1,
                },
              },
            }}
          />
        </div>
        {/* <section className="trailer-info">Place Trailer Info</section> */}
      </section>
    );
  }
}

export default TrailerPreview;
