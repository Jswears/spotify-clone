export type ArtistProps = {
  id: string;
  name: string;
  images: {
    url: string;
  }[];
  genres: string[];
  popularity: number;
  followers: {
    total: number;
  };
  external_urls: {
    spotify: string;
  };
  type: string;
};

export type TrackProps = {
  id: string;
  name: string;
  album: {
    name: string;
    images: {
      url: string;
    }[];
  };
  artists: ArtistProps[];
  preview_url: string;
};

export type UserProps = {
  id: string;
  display_name: string;
  images: {
    url: string;
  }[];
};
