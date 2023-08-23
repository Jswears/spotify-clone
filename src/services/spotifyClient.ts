/* eslint-disable no-useless-catch */
import axios from "axios";
import env from "../config/config";

import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();
const clientId = env.CLIENT_ID;
const clientSecret = env.CLIENT_SECRET;

export const spotifyService = {
  retrieveToken: async () => {
    try {
      const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        "grant_type=client_credentials",
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: "Basic " + btoa(`${clientId}:${clientSecret}`),
          },
        }
      );
      spotifyApi.setAccessToken(response.data.access_token);
      return response.data.acess_token;
    } catch (error) {
      throw error;
    }
  },
  searchArtists: async (artist: string) => {
    try {
      const response = await spotifyApi.searchArtists(artist);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getArtist: async (artistId: string) => {
    try {
      const response = await spotifyApi.getArtist(artistId);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getUser: async (user: string) => {
    try {
      const response = await spotifyApi.getUser(user);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getTopTracks: async (id: string) => {
    try {
      const response = await spotifyApi.getArtistTopTracks(id, "GB", {
        limit: 4,
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
};
