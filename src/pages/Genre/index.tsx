import React from "react";
import styled from "styled-components";
import GenreHeader from "./Header";
import GenreListing from "./Listing";


const GenreContainer = styled.div``;

const Genre = () => {
    return <GenreContainer>
        <GenreHeader/>
        <GenreListing />
    </GenreContainer>
}

export default Genre;