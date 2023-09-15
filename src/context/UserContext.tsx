import React, { createContext, useEffect, useState } from "react";
import { spotifyService } from "../services/spotifyClient";
import { UserProps } from "../types";
type Props = {
  children: React.ReactNode;
};

const UserContext = createContext<UserProps | undefined>(undefined);

const UserContextWrapper = (props: Props) => {
  const [user, setUser] = useState<UserProps | undefined>(undefined);

  const fetchUserData = async () => {
    try {
      await spotifyService.retrieveToken();
      const response = await spotifyService.getUser();
      setUser(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export { UserContext, UserContextWrapper };
