// src/components/Grid.tsx
import styled from 'styled-components';

// GridContainer to define grid layout;


interface IGridContainer {
    desktopColumns?: number;
    tabletColumns?: number;
    mobileColumns?: number;
    gap?: string;
}

// src/components/Grid.tsx
export const GridContainer = styled.div<IGridContainer>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.desktopColumns || 12}, 1fr);
  gap: ${(props) => props.gap || '16px'};

  @media (max-width: var(--breakpoint-tablet)) {
    grid-template-columns: repeat(${(props) => props.tabletColumns || 8}, 1fr);
  }

  @media (max-width: var(--breakpoint-mobile)) {
    grid-template-columns: repeat(${(props) => props.mobileColumns || 4}, 1fr);
  }
`;


interface IGridItem {
    span?: number
}

// GridItem for individual cells
export const GridItem = styled.div<IGridItem>`
  grid-column: span ${(props) => props.span || 1};

  @media (max-width: 600px) {
    grid-column: span 4;
  }
`;

