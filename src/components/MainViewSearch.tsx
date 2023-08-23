import { useEffect, useState } from "react";
import { spotifyService } from "../services/spotifyClient";

type ArtistProps = {
  artistId: string;
};

const MainView = ({ artistId }: ArtistProps) => {
  const [artist, setArtist] = useState<SpotifyApi.SingleArtistResponse>();
  const [tracks, setTracks] = useState<
    SpotifyApi.TrackObjectFull[] | undefined
  >(undefined);

  const fetchArtistData = async () => {
    try {
      if (artistId) {
        await spotifyService.retrieveToken();
        const response = await spotifyService.getArtist(artistId);
        setArtist(response);
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchTopTracks = async () => {
    try {
      const response = await spotifyService.getTopTracks(artistId);
      setTracks(response.tracks);
      console.log(response.tracks);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchArtistData();
    fetchTopTracks();
  }, [artistId]);
  return !artist ? (
    <div className="item-2"></div>
  ) : (
    <div className="item-2">
      <div className="artist-container">
        <h2>Top result</h2>
        <div className="card-artist">
          <div className="img-container">
            <div>
              <img src={artist.images[0].url} alt={artist.name} />
            </div>
          </div>
          <div className="artist-info">
            <h1>{artist.name}</h1>
            <p>{artist.type.toUpperCase()}</p>
          </div>
        </div>
      </div>
      <div className="songs">
        <h2>Songs</h2>
        <div>{tracks?.map((track) => track.name)}</div>
      </div>
    </div>
  );
};

export default MainView;
