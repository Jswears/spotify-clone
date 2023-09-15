/* eslint-disable no-useless-catch */
import env from "../config/config";

const clientId = env.CLIENT_ID;
const clientSecret = env.CLIENT_SECRET;
const accessToken = localStorage.getItem("token");
export const spotifyService = {
  retrieveToken: async () => {
    try {
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic " + btoa(`${clientId}:${clientSecret}`),
        },
        body: "grant_type=client_credentials",
      });
      const data = await response.json();
      localStorage.setItem("token", data.access_token);
      return data.acess_token;
    } catch (error) {
      throw error;
    }
  },
  getUser: async () => {
    try {
      const response = await fetch("https://api.spotify.com/v1/me", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
  getArtistId: async (artist: string) => {
    try {
      const response = await fetch(
        "https://api.spotify.com/v1/search?q=" + artist + "&type=artist",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        }
      );
      const data = await response.json();
      return data.artists.items[0].id;
    } catch (error) {
      throw error;
    }
  },
  getArtist: async (artistId: string) => {
    try {
      if (artistId) {
        const response = await fetch(
          `https://api.spotify.com/v1/artists/${artistId}`,
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + accessToken,
            },
          }
        );
        const data = await response.json();
        return data;
      }
    } catch (error) {
      throw error;
    }
  },
  getArtistTopTracks: async (artistId: string) => {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        }
      );
      const data = await response.json();
      if (data.tracks) {
        return data.tracks.slice(0, 4);
      }
    } catch (error) {
      throw error;
    }
  },
};
