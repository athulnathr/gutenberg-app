import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for the shimmer effect
const shimmerAnimation = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

// Shimmer Card
const ShimmerCard = styled.div`
  width: 100%;
  height: 200px;
  background: ${props => props.theme.secondary};
  background-image: linear-gradient(
    to right,
     ${props => props.theme.secondary} 0%,
     ${props => props.theme.grey100} 20%,
     ${props => props.theme.secondary} 40%,
     ${props => props.theme.secondary} 100%
  );
  background-repeat: no-repeat;
  background-size: 200px 100%;
  animation: ${shimmerAnimation} 1.5s infinite linear;
  border-radius: 8px;
`;

export default ShimmerCard;
