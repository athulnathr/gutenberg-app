import React from "react";
import styled from "styled-components";
import { BodyText as Text, H1 } from "../../../components/Typography";
import Container from "../../../components/Grid/Container";


const GenreHeaderStyles = styled.div`
    padding:5rem 1rem 2rem 1rem;
    background:#f0f0f0;
`

const BodyText = styled(Text)`
    margin-top:0.5rem;
`;

const GenreHeader = () => {


    return <GenreHeaderStyles>
        <Container>
            <H1>Gutenberg Project</H1>
            <BodyText >A social cataloging website that allows you to freely search its database of books, annotations,
                and reviews.</BodyText>
        </Container>
    </GenreHeaderStyles>
}

export default GenreHeader;