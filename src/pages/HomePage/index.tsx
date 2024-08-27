// src/pages/HomePage/index.tsx
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchTVShows } from '../../redux/tvShowsSlice';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TVShow } from '../../types';
import TVShowCard from '../../components/TVShowCard';

// Styled components
const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { shows, loading, error } = useAppSelector((state) => state.tvShows);

  useEffect(() => {
    dispatch(fetchTVShows());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container>
      <h1>TV Shows</h1>
      <CardsContainer>
        {shows.map((show: TVShow) => (
          <StyledLink to={`/tvshow/${show.id}`} key={show.id}>
            <TVShowCard show={show} />
          </StyledLink>
        ))}
      </CardsContainer>
    </Container>
  );
};

export default HomePage;
