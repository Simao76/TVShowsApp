import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components for Navbar
const NavbarContainer = styled.div`
  background-color: #ADD8E6; /* Light blue background */
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled(Link)`
  color: white; /* White text color */
  font-size: 24px;
  text-decoration: none; /* Remove underline */
  font-weight: bold;

  &:hover {
    text-decoration: none; /* Ensure no underline on hover */
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Title to="/">Code Challenge/Home</Title>
    </NavbarContainer>
  );
};

export default Navbar;
