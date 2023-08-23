import { useContext } from "react";
import MainViewHome from "./MainViewHome";
import { UserContext } from "../context/UserContext";

const TopMainViewHome = () => {
  const user = useContext(UserContext);
  console.log(user);
  return !user ? (
    <p>Loading...</p>
  ) : (
    <>
      <div className="item-5">
        <div></div>
        <div className="user-info">
          {" "}
          <p>{user.display_name}</p>
          {user.images && user.images.length > 0 && (
            <img src={user.images[1].url} alt={user.display_name} />
          )}
        </div>
      </div>
      <MainViewHome />
    </>
  );
};

export default TopMainViewHome;
