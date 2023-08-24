<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<div align="center">
  <a href="https://github.com/Jswears/spotify-clone">
    <img src="./spotify-clone/src/assets/images/Spotify_logo_with_text.svg alt="Logo" height="80">
  </a>

  <h3 align="center">Spotify Clone</h3>

  <p align="center">
    Espotifai Clone is a web application that replicates some of the features of Spotify, allowing users to explore and search for artists.
    <br />
    <a href="https://github.com/Jswears/spotify-clone"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://espotifai-clone.netlify.app/search">View Demo</a>
    ·
    <a href="https://github.com/Jswears/spotify-clone/issues">Report Bug</a>
    ·
    <a href="https://github.com/Jswears/spotify-clone/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#installation">Installation</a>
      <ul>
        <li><a href="#building-the-project">Building the Project</a></li>
        <li><a href="#building-and-running-with-docker">Building and Running with Docker</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#folder-structure">Folder Structure</a></li>
    <li><a href="#technologies-used">Technologies Used</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact-information">Contact Information</a></li>
    <li><a href="#project-links">Project Links</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Screenshot][product-screenshot]](https://github.com/Jswears/spotify-clone)

Espotifai Clone is a web application that replicates some of the features of Spotify, allowing users to explore and search for artists.

<!-- Installation -->

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

<!-- Building the Project -->

## Building the Project

To build the project, follow these steps:

1. Open your terminal/command prompt.

2. Navigate to the project directory:

   ```sh
   cd spotify-clone
   ```

3. Run the following command to build the project:

   ```sh
   npm run build
   ```

This will compile and package the project, creating optimized files ready for deployment.

<!-- Building and Running with Docker -->

## Building and Running with Docker

You can also build and run this project using Docker. Follow these steps:

1. Open your terminal/command prompt.

2. Navigate to the project directory:

   ```sh
   cd spotify-clone
   ```

3. Build the Docker image, replacing `${YOUR_SPOTIFY_CLIENT_ID}` and `${YOUR_SPOTIFY_CLIENT_SECRET}` with your actual Spotify API credentials:

   ```sh
   docker build --build-arg VITE_CLIENT_ID=${YOUR_SPOTIFY_CLIENT_ID} --build-arg VITE_CLIENT_SECRET=${YOUR_SPOTIFY_CLIENT_SECRET} -t spotify-clone .
   ```

4. Once the Docker image is built, you can start the application using:

   ```sh
   docker run -p 80:80 spotify-clone
   ```

**Please Note:** You can customize the port mapping as you prefer. For example, `-p 8080:80` if you want to use port 8080.

**Important:** Be cautious with your credentials because they remain in the Docker image. Do not upload it to any public Docker hub. Consider a more secure approach for handling credentials in a production environment.

**Note:** We are actively working on a solution to enhance the security of credential handling.

<!-- Usage -->

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

<!-- Folder Structure -->

## Folder Structure

The project is organized as follows:

- `components`: Contains React components used throughout the application.
- `config`: Holds environment configuration for Spotify API credentials.
- `context`: Includes a user context to share information across components.
- `pages`: Defines the main pages of the application (Home and Search).
- `services`: Manages communication with the Spotify API.
- `styles`: Contains SCSS files for styling components.
- `App.tsx` and `main.tsx`: Entry points for the React application.

<!-- Technologies Used -->

## Technologies Used

- React
- TypeScript
- SCSS
- SpotifyAPI

<!-- Contributing -->

## Contributing

Contributions to this project are welcome. If you'd like to contribute, please fork the repository and create a pull request.

<!-- Contact Information -->

## Contact Information

If you have any questions or feedback, feel free to reach out to the project owner:

- Email: ji.swearssalinas@gmail.com

## Project Links

- Project Link: [https://github.com/Jswears/spotify-clone](https://github.com/Jswears/spotify-clone)
- Deployed: [https://github.com/Jswears/spotify-clone](https://espotifai-clone.netlify.app/search)

<!-- Acknowledgments -->

## Acknowledgments

- [arriagadadev](https://github.com/arriagadadev)

[contributors-shield]: https://img.shields.io/github/contributors/Jswears/spotify-clone.svg?style=for-the-badge
[contributors-url]: https://github.com/Jswears/spotify-clone/graphs/contributors
[contributors-shield]: https://img.shields.io/github/contributors/Jswears/spotify-clone.svg?style=for-the-badge
[contributors-url]: https://github.com/Jswears/spotify-clone/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Jswears/spotify-clone.svg?style=for-the-badge
[forks-url]: https://github.com/Jswears/spotify-clone/network/members
[stars-shield]: https://img.shields.io/github/stars/Jswears/spotify-clone.svg?style=for-the-badge
[stars-url]: https://github.com/Jswears/spotify-clone/stargazers
[issues-shield]: https://img.shields.io/github/issues/Jswears/
[issues-url]: https://github.com/Jswears/spotify-clone/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/joaquin-ignacio-swears-salinas-9a4947284/
[product-screenshot]: ./spotify-clone/src/assets/images/Screenshot%202023-08-24%20093001.png
