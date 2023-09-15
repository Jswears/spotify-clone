import { useContext, useEffect, useState } from "react";
import MainView from "./MainViewSearch";
import { spotifyService } from "../services/spotifyClient";
import { UserContext } from "../context/UserContext";

const TopMainView = () => {
  const [searchArtist, setSearchArtist] = useState<string>("");
  const [artistId, setArtistId] = useState<string>("");
  const user = useContext(UserContext);

  // GET request  to get the artist ID
  const fetchArtistId = async () => {
    const artistId = await spotifyService.getArtistId(searchArtist);

    setArtistId(artistId);
    localStorage.setItem("artistId", artistId);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchArtistId();
  };
  useEffect(() => {
    const storedArtistId = localStorage.getItem("artistId");
    if (storedArtistId) {
      setArtistId(storedArtistId);
    }
  }, []);
  return (
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
        {user && (
          <div className="user-info">
            <p>{user.display_name}</p>
            {user.images && user.images.length > 0 && (
              <img src={user.images[1].url} alt={user.display_name} />
            )}
          </div>
        )}
      </div>
      <MainView artistId={artistId} />
    </>
  );
};

export default TopMainView;
