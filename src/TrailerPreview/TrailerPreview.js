import React, { Component, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import { getMovieVideoData } from '../apiCalls';
import './TrailerPreview.scss';

class TrailerPreview extends Component {
  constructor() {
    super();
    this.state = {
      movieTrailer: '',
    };
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.trailerInfo !== prevProps.trailerInfo) {
      getMovieVideoData(this.props.trailerInfo.id).then((data) =>
        this.setState({
          movieTrailer: this.findTrailerKey(data),
        })
      );
    }
  };

  findTrailerKey = (data) => {
    let video = data.videos.find(
      (video) => video.type === 'Trailer' && video.site === 'YouTube'
    );
    return !!video ? video.key : '2Gg6Seob5Mg';
    // return 'IpSK2CsKULg';
  };

  render() {
    const { title, release_date, genres, runtime } = this.props.trailerInfo;

    return (
      <section>
        {this.state.movieTrailer && (
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              // Use of the 'no-cookie' tag prevents share/watch later
              // but also throws console errors
              url={`https:www.https://www.youtube.com/watch?v=${this.state.movieTrailer}`}
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
                    playlist: `${this.state.movieTrailer}`,
                    modestbranding: 1,
                  },
                },
              }}
            />

            <section className="player-cover"></section>

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
