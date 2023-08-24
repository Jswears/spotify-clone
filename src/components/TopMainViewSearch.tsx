import { useContext, useEffect, useState } from "react";
import { spotifyService } from "../services/spotifyClient";
import MainView from "./MainViewSearch";
import { UserContext } from "../context/UserContext";

const TopMainView = () => {
  const [searchArtist, setSearchArtist] = useState<string>("");
  const [artistId, setArtistId] = useState<string>("");
  const [error, setError] = useState<string>("");
  const user = useContext(UserContext);

  const fetchArtistData = async () => {
    try {
      await spotifyService.retrieveToken();
      if (searchArtist) {
        const response = await spotifyService.searchArtists(searchArtist);
        if (response.artists.items.length > 0) {
          const artistId = response.artists.items[0].id;
          setArtistId(artistId);
          localStorage.setItem("artistId", artistId);
          setError("");
        } else {
          setError("No artist found");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchArtistData();
  };
  useEffect(() => {
    const storedArtistId = localStorage.getItem("artistId");
    if (storedArtistId) {
      setArtistId(storedArtistId);
    }
  }, []);
  return !user ? (
    <p>Loading...</p>
  ) : (
    <>
      <div className="item-5">
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              <input
                type="text"
                name="artist"
                value={searchArtist}
                placeholder="What artist you're looking for?"
                onChange={(e) => setSearchArtist(e.target.value)}
              />
            </label>
          </form>
        </div>
        {error && (
          <div>
            <p className="error-message">No Artist Found</p>
          </div>
        )}
        <div className="user-info">
          {" "}
          <p>{user.display_name}</p>
          {user.images && user.images.length > 0 && (
            <img src={user.images[1].url} alt={user.display_name} />
          )}
        </div>
      </div>
      <MainView artistId={artistId} />
    </>
  );
};

export default TopMainView;
