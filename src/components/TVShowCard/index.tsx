// src/components/TVShowCard/index.tsx
import React from 'react';
import styled from 'styled-components';
import { TVShow } from '../../types';
import { useNavigate } from 'react-router-dom';

// Styled components
const Card = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 300px; /* Optional: ensures cards are consistent in size */
  margin: 10px;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px; /* Fixed height for uniformity */
  object-fit: cover;
`;

const Content = styled.div`
  padding: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.2em;
  font-weight: bold;
`;

const Description = styled.div`
  font-size: 0.9em;
  color: #555;
  margin-top: 10px;
  overflow: hidden; /* Ensures description doesn't overflow */
  max-height: 4.5em; /* Truncate description to fit within the container */
  position: relative;
`;

const ReadMore = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 0.9em;
  padding: 0;
  margin-top: 10px;
  font-weight: bold;
  text-decoration: underline;

  &:hover {
    color: #0056b3;
  }
`;

interface TVShowCardProps {
  show: TVShow;
}

const TVShowCard: React.FC<TVShowCardProps> = ({ show }) => {
  const navigate = useNavigate(); // For navigation

  // Limit the description to the first 45 words
  const getTruncatedDescription = (text: string, limit: number) => {
    const words = text.split(' ');
    return words.length > limit ? words.slice(0, limit).join(' ') + '...' : text;
  };

  return (
    <Card>
      <Image src={show.image.original} alt={show.name} />
      <Content>
        <Title>{show.name}</Title>
        <Description>
          {getTruncatedDescription(show.summary.replace(/<\/?[^>]+(>|$)/g, ""), 45)}
        </Description>
        <ReadMore onClick={() => navigate(`/tvshow/${show.id}`)}>
          Read more
        </ReadMore>
      </Content>
    </Card>
  );
};

export default TVShowCard;
