import { useEffect, useState } from "react";
import { spotifyService } from "../services/spotifyClient";

type ArtistProps = {
  artistId: string;
};

const MainView = ({ artistId }: ArtistProps) => {
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(
    null
  );
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
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTopTracks = async () => {
    try {
      const response = await spotifyService.getTopTracks(artistId);
      setTracks(response.tracks.slice(0, 4));
    } catch (error) {
      console.log(error);
    }
  };

  const playTrack = (previewUrl: string) => {
    if (previewUrl) {
      if (currentAudio) {
        // Pause the currently playing audio
        currentAudio.pause();
        // Reset the currentTime to the beginning so it can restart from the beginning when played again
        currentAudio.currentTime = 0;
      }

      const audio = new Audio(previewUrl);
      audio.play();
      setCurrentAudio(audio);
    }
  };

  const stopAudio = () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
  };

  useEffect(() => {
    fetchArtistData();
    fetchTopTracks();
    return () => {
      // Stop the audio when the component is unmounted
      stopAudio();
    };
  }, [artistId, currentAudio]);

  return !artist || !tracks ? (
    <div className="item-2"></div>
  ) : (
    <div className="item-2">
      <section className="artist-container">
        <h2>Last Searched</h2>
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
      </section>
      <section className="songs-container">
        <h2>Songs</h2>{" "}
        {tracks?.map((track) => (
          <div className="songs" key={track.id}>
            <img
              src={track.album.images[0].url}
              alt={track.name}
              onClick={() => playTrack(track.preview_url)}
            />
            <div>
              {track.name} <p>{track.artists[0].name}</p>
            </div>
          </div>
        ))}
        <button onClick={stopAudio}>Stop Audio</button>
      </section>
    </div>
  );
};

export default MainView;
