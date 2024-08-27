# TV-Show-Browsing-Application

Overview
This project is a React-based application for browsing TV shows and their episodes. The app fetches data from an external API and provides a clean, responsive user interface for navigating shows and viewing detailed information.

Technologies Used
React: For building the user interface.
Redux: For managing the global state of the application.
Redux Toolkit: Used for slices and async thunks to handle API calls.
TypeScript: To ensure type safety and improve code quality.
Styled-Components: For styling the components with CSS-in-JS.
React Router: For handling navigation between different pages.
API: TV show data is fetched from the TVMaze API.

Features
Home Page: Displays a list of TV shows in a responsive grid layout.
TV Show Details Page: Provides detailed information about a selected show and lists its episodes in a sidebar.
Episode Details Page: Displays detailed information about a selected episode.
Read More: Links on show descriptions to navigate to the details page.

Project Structure
src/pages: Contains the main pages (HomePage, TVShowDetailsPage, EpisodeDetailsPage).
src/components: Reusable components like TVShowCard.
src/redux: Contains slices and thunks for managing TV shows and episode data.
src/types: TypeScript interfaces and types for strong typing across the app.

Getting Started

Prerequisites
Node.js
npm or yarn

Installation

Clone the repository:
git clone https://github.com/Simao76/TV-Show-Browsing-Application.git

Navigate to the project directory:
cd tv-show-app

Install dependencies:
npm/yarn install

Start the development server:
npm/yarn start

Deployment

To build the project for production:
npm/yarn run build
