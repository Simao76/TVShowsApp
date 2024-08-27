// src/pages/TVShowDetailsPage/index.tsx
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchTVShowDetails } from '../../redux/tvShowDetailsSlice';
import styled from 'styled-components';
import { TVShowDetails } from '../../types';

// Styled components
const Container = styled.div`
  display: flex;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ImageSection = styled.div`
  flex: 0 0 50%; /* Image occupies 50% of the width */
  position: relative;
  margin-right: 20px;
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

const Description = styled.div`
  margin-top: 10px;
  font-size: 1.2em;
`;

const CarouselContainer = styled.div`
  flex: 1; /* Carousel occupies the remaining width */
  max-height: 80vh;
  overflow-y: auto;
  border-left: 2px solid #ddd;
  padding-left: 20px;
`;

const EpisodeCard = styled(Link)`
  display: block;
  margin-bottom: 20px;
  cursor: pointer;
  text-decoration: none; /* Removes underline from links */
  color: inherit; /* Inherit color from parent */
`;

const EpisodeImage = styled.img`
  width: 100%;
  border-radius: 4px;
`;

const EpisodeTitle = styled.h3`
  margin: 10px 0 5px;
  font-size: 1.2em;
`;

const EpisodeDescription = styled.div`
  margin: 5px 0;
  font-size: 1em;
  color: #666;
`;

const TVShowDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { showDetails, loading, error } = useAppSelector((state) => state.tvShowDetails);

  useEffect(() => {
    if (id) {
      dispatch(fetchTVShowDetails(Number(id)));
    }
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!showDetails) return <p>No details available</p>;

  const episodes = showDetails._embedded?.episodes || [];

  return (
    <Container>
      <ImageSection>
        <CoverImage
          src={showDetails.image?.original || 'default-show-image-url.jpg'}
          alt={showDetails.name || 'No title available'}
        />
        <Overlay>
          <Title>{showDetails.name || 'No title available'}</Title>
          <Description
            dangerouslySetInnerHTML={{ __html: showDetails.summary || '' }}
          />
        </Overlay>
      </ImageSection>
      <CarouselContainer>
        {episodes.map((episode) => (
          <EpisodeCard to={`/episode/${episode.id}`} key={episode.id}>
            <EpisodeImage
              src={episode.image?.medium || 'default-episode-image-url.jpg'}
              alt={episode.name || 'No title available'}
            />
            <EpisodeTitle>{episode.name || 'No title available'}</EpisodeTitle>
            {episode.summary && (
              <EpisodeDescription>
                {episode.summary.replace(/<\/?[^>]+(>|$)/g, "")}
              </EpisodeDescription>
            )}
          </EpisodeCard>
        ))}
      </CarouselContainer>
    </Container>
  );
};

export default TVShowDetailsPage;
