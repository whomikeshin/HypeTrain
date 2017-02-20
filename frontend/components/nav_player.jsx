var React = require('react');
var PlayerStore = require('../stores/player');
var TrackStore = require('../stores/track');
var Loader = require('./loader');
var NavControls = require('./nav_controls');
var ApiUtil = require('../util/api_util');


function _getCurrentTrack () {
  return PlayerStore.currentTrack();
}

function _isPlaying () {
  return PlayerStore.playStatus();
}

var NavPlayer = React.createClass({

  getInitialState: function () {
    return {
      currentTrack: null,
      playStatus: _isPlaying()
    };
  },

  componentWillMount: function () {
    this.onPlayerChangeToken = PlayerStore.addListener(this._onPlayerChange);
  },

  componentWillUnmount: function () {
    this.onPlayerChangeToken.remove();
  },

  render: function () {
    var track = this.state.currentTrack;
    var playStatus = this.state.playStatus;

    if (!track) {
      return <Loader/>;
    }
    return (
      <div>
        <div>
          <audio src={track.trackData.audio_file_name}>
          </audio>
        </div>

        <ul id="current-track">
          <li>{track.trackData.title}</li>
          <li>-</li>
          <li>{track.trackData.artist_name}</li>
          <li><a href={track.trackData.posts[0].post_url}>
            <small>Read Post →</small></a></li>
        </ul>
      </div>
    );
  },

  _onPlayerChange: function () {
    this.setState({
      currentTrack: _getCurrentTrack(),
      playStatus: _isPlaying()
    });
  },
});


module.exports = NavPlayer;
