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

  @media (max-width:${(props) => { console.log(props); return (props.theme.breakpoints.tablet)}}) {
    grid-template-columns: repeat(${(props) => props.tabletColumns || 8}, 1fr);
  }

  @media (max-width:${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: repeat(${(props) => props.mobileColumns || 4}, 1fr);
  }
`;


interface IGridItem {
  span?: number
}

// GridItem for individual cells
export const GridItem = styled.div<IGridItem>`
  grid-column: span ${(props) => props.span || 1};
`;
