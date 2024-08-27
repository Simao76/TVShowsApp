// src/routes.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TVShowDetailsPage from './pages/TVShowDetailsPage';
import EpisodeDetailsPage from './pages/EpisodeDetailsPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tvshow/:id" element={<TVShowDetailsPage />} />
      <Route path="/episode/:id" element={<EpisodeDetailsPage />} />
    </Routes>
  );
};

export default AppRoutes;
