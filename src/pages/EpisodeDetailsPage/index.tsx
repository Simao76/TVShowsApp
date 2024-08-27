// src/pages/EpisodeDetailsPage/index.tsx
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchEpisodeDetails } from '../../redux/episodeDetailsSlice';
import styled from 'styled-components';
import { EpisodeDetails } from '../../types';

// Styled components
const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ImageSection = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const CoverImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 4px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2em;
`;

const Summary = styled.div`
  margin-top: 10px;
  font-size: 1.2em;
`;

const EpisodesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const EpisodeDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { episode, loading, error } = useAppSelector((state) => state.episodeDetails);

  useEffect(() => {
    if (id) {
      dispatch(fetchEpisodeDetails(Number(id)));
    }
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!episode) return <p>No details available</p>;

  return (
    <Container>
      <ImageSection>
        <CoverImage
          src={episode.image?.medium || 'default-image-url.jpg'}
          alt={episode.name}
        />
        <Overlay>
          <Title>{episode.name}</Title>
          <Summary
            dangerouslySetInnerHTML={{ __html: episode.summary || '' }}
          />
        </Overlay>
      </ImageSection>
      <EpisodesContainer>
        {/* Display similar episodes if available */}
      </EpisodesContainer>
    </Container>
  );
};

export default EpisodeDetailsPage;
