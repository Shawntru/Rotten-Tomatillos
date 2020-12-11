import React, { Component, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import { getMovieVideoData } from '../apiCalls';
import './TrailerPreview.scss';

class TrailerPreview extends Component {
  constructor() {
    super();
    this.state = {
      trailerInfo: '',
      trailerId: '',
    };
  }

  //737173
  //this.props.trailerInfo.id

  componentDidUpdate = (prevProps) => {
    if (this.props.trailerInfo !== prevProps.trailerInfo) {
      getMovieVideoData(this.props.trailerInfo.id).then((data) =>
        this.setState({
          trailerInfo: data.videos,
          trailerId:
            // '2Gg6Seob5Mg' ||
            data.videos.find((video) => video.type === 'Trailer').key,
        })
      );
      if (!this.state.trailerId) this.setState({ trailerId: '2Gg6Seob5Mg' });
    }
  };

  render() {
    const {
      // backdrop_path,
      // poster_path,
      title,
      release_date,
      // overview,
      genres,
      // budget,
      // revenue,
      // tagline,
      runtime,
    } = this.props.trailerInfo;

    return (
      <section>
        {this.state.trailerId && (
          <div className="player-wrapper">
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
              loop={true}
              config={{
                youtube: {
                  playerVars: {
                    disablekb: 1,
                    fs: 0,
                    iv_load_policy: 3,
                    playlist: `${this.state.trailerId}`,
                    modestbranding: 1,
                  },
                },
              }}
            />

            <section className="trailer-info">
              <h2 className="trailer-movie-title">{title}</h2>
              <p className="trailer-details">Released {release_date}</p>
              <p className="trailer-details">{genres.join(', ')}</p>
              <p className="trailer-details">{runtime} minutes</p>
            </section>
          </div>
        )}
      </section>
    );
  }
}

export default TrailerPreview;
