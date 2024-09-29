import React from 'react'
import styled from 'styled-components'



export const H1 = styled.h1`
    font-size:48px;
    font-weight:${(props) => props.theme.fontWeights.semiBold};
    color:${(props) => props.theme.primary};

`;

export const H2 = styled.h2`
    font-size:30px;
    font-weight:${(props) => props.theme.fontWeights.semiBold};
    color:${(props) => props.theme.primary};
`;


export const BodyText = styled.p`
    font-size:16px;
    font-weight:${(props) => props.theme.fontWeights.semiBold};
    color:${(props) => props.theme.grey900};
`