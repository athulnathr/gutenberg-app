import React from "react";
import styled from "styled-components";
import GenreHeader from "./components/Header";
import GenreListing from "./components/Listing";


const GenreContainer = styled.div``;

const Genre = () => {
    return <GenreContainer>
        <GenreHeader/>
        <GenreListing />
    </GenreContainer>
}

export default Genre;