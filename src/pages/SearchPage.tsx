import Sidebar from "../components/LeftSidebar";
import NowPlayingBar from "../components/NowPlayingBar";
import RightSidebar from "../components/RightSidebar";
import TopMainView from "../components/TopMainViewSearch";

const SearchPage = () => {
  return (
    <>
      <div id="main">
        <div className="grid">
          <Sidebar />
          <TopMainView />
          <RightSidebar />
          <NowPlayingBar />
        </div>
      </div>
    </>
  );
};

export default SearchPage;
