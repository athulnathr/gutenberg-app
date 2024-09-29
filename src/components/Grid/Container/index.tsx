import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    max-width:${(props) => props.theme.containerMaxWidth};
    margin:0 auto;
    
`;

export default Container;