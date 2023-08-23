import { NavLink } from "react-router-dom";
import SpotifyLogo from "../assets/images/Spotify_logo_with_text.svg";

const Sidebar = () => {
  return (
    <div className="item-1">
      <nav className="navbar">
        <div className="sidenav-container">
          <img src={SpotifyLogo} alt="spotify" style={{ height: "30px" }} />
          <ul>
            <li>
              <NavLink to={"/"}>
                <svg
                  role="img"
                  height="24"
                  width="24"
                  aria-hidden="true"
                  fill="white"
                  viewBox="0 0 24 24"
                  data-encore-id="icon"
                >
                  <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"></path>
                </svg>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/search"}>
                <svg
                  role="img"
                  height="24"
                  width="24"
                  aria-hidden="true"
                  fill="grey"
                  viewBox="0 0 24 24"
                  data-encore-id="icon"
                >
                  <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
                </svg>
                Search
              </NavLink>
            </li>
            <li>
              <a href="#">
                <svg
                  role="img"
                  height="24"
                  width="24"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-encore-id="icon"
                  fill="grey"
                >
                  <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
                </svg>
                Your Library
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">
                {" "}
                <svg
                  role="img"
                  height="16"
                  width="16"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  data-encore-id="icon"
                  fill="grey"
                >
                  <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path>
                </svg>
                Create Playlist
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  role="img"
                  height="16"
                  width="16"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  data-encore-id="icon"
                  fill="#1ed760"
                >
                  <path d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z"></path>
                </svg>
                Liked Songs
              </a>
            </li>
          </ul>
        </div>
        <div className="sidenav-footer">
          <ul>
            <li>
              <a href="#">Legal</a>
            </li>
            <li>
              <a href="#">Privacy Center</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
            <li>
              <a href="#">About Ads</a>
            </li>
            <li>
              <a href="#">Accessibility</a>
            </li>
            <li>
              <a href="#">Your Privacy Choices</a>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
          </ul>
          <button>English</button>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
