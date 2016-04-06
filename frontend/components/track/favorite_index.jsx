var React = require('react');
var TrackStore = require('../../stores/track');
var ApiUtil = require('../../util/api_util');
var TrackIndexItem = require('./index_item');

function _getAllTracks () {
  return TrackStore.all();
}

var FavoriteIndex = React.createClass({
  getInitialState: function () {
    return { tracks: _getAllTracks() };
  },

  componentDidMount: function () {
    this.onChangeToken = TrackStore.addListener(this._onChange);
    ApiUtil.fetchTracks();
  },

  componentWillUnmount: function () {
    this.onChangeToken.remove();
  },

  _onChange: function () {
    var tracks = _getAllTracks();
    this.setState({ tracks: tracks });
  },

  render: function () {
    var tracks = this.state.tracks;

    return (
      <main className="content">
        <section className="playlist group">

          <header>
            <h2 className="playlist-title">Latest Blogged Music</h2>
            <ul className="playlist-menu">
              <li><a href="#">All</a></li>
              <li><a href="#">Freshest</a></li>
              <li><a href="#">Only Remixes</a></li>
              <li><a href="#">No Remixes</a></li>
              <li><a href="#">Blogs in USA</a></li>
            </ul>
          </header>

          <ul className="tracks-list">
            {tracks.map(function (track) {
              return <TrackIndexItem key={track.id} track={track} />;
            })}
          </ul>
        </section>
      </main>
    );
  }
});

module.exports = FavoriteIndex;
