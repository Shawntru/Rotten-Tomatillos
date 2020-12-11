import React, { Component } from 'react';
import ReactPlayer from 'react-player/youtube';
import { getMovieVideoData } from '../apiCalls';
import './TrailerPreview.scss';

class TrailerPreview extends Component {
  constructor({ trailerInfo }) {
    super();
    this.state = {
      trailerInfo: '',
      trailerId: '',
    };
  }

  // TODO: Sad path, divert to generic video if no trailer
  componentDidUpdate = (prevProps) => {
    if (this.props.trailerInfo !== prevProps.trailerInfo) {
      getMovieVideoData(this.props.trailerInfo.id).then((data) =>
        this.setState({
          trailerInfo: data.videos,
          trailerId: data.videos.find((video) => video.type === 'Trailer').key,
        })
      );
    }
  };

  render() {
    return (
      <section>
        <div className="player-wrapper">
          {this.state.trailerId && (
            <ReactPlayer
              className="react-player"
              // Use of the 'no-cookie' tag prevents share/watch later
              // but also throws console errors
              url={`https:www.https://www.youtube-nocookie.com/watch?v=${this.state.trailerId}`}
              width="100%"
              height="100%"
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
          )}
        </div>
        {/* <section className="trailer-info">Place Trailer Info</section> */}
      </section>
    );
  }
}

export default TrailerPreview;
