import NowPlayingBar from "../components/NowPlayingBar";
import RightSidebar from "../components/RightSidebar";
import LeftSidebar from "../components/LeftSidebar";
import TopMainViewHome from "../components/TopMainViewHome";

const HomePage = () => {
  return (
    <div id="main">
      <div className="grid">
        <LeftSidebar />
        <TopMainViewHome />
        <RightSidebar />
        <NowPlayingBar />
      </div>
    </div>
  );
};

export default HomePage;
