interface Song {
  album: object;
  artist: object;
  duration: number;
  explicit_content_cover: number;
  explicit_content_lyrics: number;
  explicit_lyrics: boolean;
  id: number;
  link: string;
  md5_image: string;
  preview: string;
  rank: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  type: string;
}

export default Song;

/*

album: {id: 9824156, title: 'MORE AMOR', cover: 'https://api.deezer.com/album/9824156/image', cover_small: 'https://e-cdns-images.dzcdn.net/images/cover/8f8a8…7f0c32d753b58599227ed2fcd/56x56-000000-80-0-0.jpg', cover_medium: 'https://e-cdns-images.dzcdn.net/images/cover/8f8a8…0c32d753b58599227ed2fcd/250x250-000000-80-0-0.jpg', …}
artist: {id: 1425072, name: 'Emin', link: 'https://www.deezer.com/artist/1425072', picture: 'https://api.deezer.com/artist/1425072/image', picture_small: 'https://e-cdns-images.dzcdn.net/images/artist/f8b5…b3a3ada3aab6e05e6015a0216/56x56-000000-80-0-0.jpg', …}
duration: 206
explicit_content_cover: 2
explicit_content_lyrics: 0
explicit_lyrics: false
id: 96533482
link: "https://www.deezer.com/track/96533482"
md5_image: "8f8a8f17f0c32d753b58599227ed2fcd"
preview: "https://cdns-preview-1.dzcdn.net/stream/c-1f7cd462fe9d497b88d5c579d152dbd4-2.mp3"
rank: 311216
readable: true
title: "Baby Get Higher"
title_short: "Baby Get Higher"
title_version: ""
type: "track"


  */
