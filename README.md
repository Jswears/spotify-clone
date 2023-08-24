# Spotify Clone

Espotifai Clone is a web application that replicates some of the features of Spotify, allowing users to explore and search for artists and discover their top 5 popular songs. This README provides essential information for setting up and using the project.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/Jswears/spotify-clone.git
   ```

2. Navigate to the project directory:

   ```sh
   cd spotify-clone
   ```

3. Install the project dependencies using npm:

   ```sh
   npm install
   ```

4. Create a `.env` file in the project root and add your Spotify API credentials:
   ```
   VITE_CLIENT_ID=<Your Client ID>
   VITE_CLIENT_SECRET=<Your Client Secret>
   ```

## Usage

Espotifai Clone offers the following main features:

- **Home**: Discover the most popular artists, albums, and more (future feature).
- **Search**: Search for artists, view their top 5 popular songs.
  - See related artists and albums (future feature).

To start the development server, run:

```sh
npm run dev
```

Visit `http://localhost:5173` in your web browser to access the application.

## Folder Structure

The project is organized as follows:

- `components`: Contains React components used throughout the application.
- `config`: Holds environment configuration for Spotify API credentials.
- `context`: Includes a user context to share information across components.
- `pages`: Defines the main pages of the application (Home and Search).
- `services`: Manages communication with the Spotify API.
- `styles`: Contains SCSS files for styling components.
- `App.tsx` and `main.tsx`: Entry points for the React application.

## Technologies Used

- React
- TypeScript
- SCSS
- SpotifyAPI

## Contributing

Contributions to this project are welcome. If you'd like to contribute, please fork the repository and create a pull request.

## Contact Information

If you have any questions or feedback, feel free to reach out to the project owner:

- Email: ji.swearssalinas@gmail.com
