User.destroy_all

me = User.create!(
  email: "mikekshin@hotmail.com",
  username: "mike",
  password: "password",
  activation_token: 1
)

kanye = User.create!(
  email: "yeezy@hotmail.com",
  username: "yeezy",
  password: "password",
  activation_token: 2
)

Artist.destroy_all

kill_j = Artist.create!(
  name: "Kill J"
)

miguel = Artist.create!(
  name: "Miguel"
)

gallant = Artist.create!(
  name: "Gallant"
)

Blog.destroy_all

pitchfork = Blog.create!(
  name: "Pitchfork",
  url: "http://pitchfork.com/"
)

the_fader = Blog.create!(
  name: "The Fader",
  url: "http://www.thefader.com/"
)

stereogum = Blog.create!(
  name: "Stererog",
  url: "http://www.stereogum.com/"
)

Track.destroy_all

track_1 = Track.create!(
  title: "You're Good But I'm Better",
  description: "Posted by 5 blogs",
  artist: kill_j,
)

track_2 = Track.create!(
  title: "Waves",
  description: "Posted by 2 blogs",
  artist: miguel,
)

track_3 = Track.create!(
  title: "Weight in Gold",
  description: "Posted by 49 blogs",
  artist: gallant,
)

track_4 = Track.create!(
  title: "Bourbon",
  description: "Posted by 34 blogs",
  artist: gallant,
)

Playlist.destroy_all

latest = Playlist.create!(
  name: "Latest"
)

popular = Playlist.create!(
  name: "Popular"
)

TracksBlog.destroy_all

track_1_pitchfork = TracksBlog.create!(
  track_id: track_1.id,
  blog_id: pitchfork.id
)

track_2_pitchfork = TracksBlog.create!(
  track_id: track_2.id,
  blog_id: pitchfork.id
)

track_2_the_fader = TracksBlog.create!(
  track_id: track_2.id,
  blog_id: the_fader.id
)

track_3_the_fader = TracksBlog.create!(
  track_id: track_3.id,
  blog_id: the_fader.id
)

track_4_stereogum = TracksBlog.create!(
  track_id: track_3.id,
  blog_id: the_fader.id
)

TracksPlaylist.destroy_all

track_1_latest = TracksPlaylist.create!(
  track_id: track_1.id,
  playlist_id: latest.id
)

track_2_latest = TracksPlaylist.create!(
  track_id: track_2.id,
  playlist_id: latest.id
)

track_3_latest = TracksPlaylist.create!(
  track_id: track_3.id,
  playlist_id: latest.id
)

track_4_latest = TracksPlaylist.create!(
  track_id: track_4.id,
  playlist_id: latest.id
)
