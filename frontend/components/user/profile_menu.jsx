var React = require('react');
var ApiUtil = require('../../util/api_util');
var SessionStore = require('../../stores/session');
var Link = require('react-router').Link;

var ProfileMenu = React.createClass({
  render: function() {
    var currentUser = SessionStore.currentUser();
    var imgSource = currentUser.thumb_url ||
      "https://s3.amazonaws.com/hype-train-dev/seed-images/hypem.jpg";

    return(
      <div className="profile-menu group">
        <figure>
          <img src={imgSource}></img>
          <figcaption>
            {currentUser.username}
            <i className="fa fa-caret-down"></i>
          </figcaption>
        </figure>

        <ul className="profile-menu-list">
          <li><Link to={"/users/" + currentUser.id + "/feed"}>Feed</Link></li>
          <li><Link to={"/users/" + currentUser.id + "/favorites"}>Favorites</Link></li>
          <li><button id="logout-button" onClick={ApiUtil.logout}>Logout</button></li>
        </ul>
      </div>
    );
  }
});

module.exports = ProfileMenu;
