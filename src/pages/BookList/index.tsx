import React from "react";
import { useParams } from 'react-router-dom';
import NavBar from "./components/NavBar";
import { fetchBooksByGenre } from "../../services/books";
import useFetch from "../../hooks/useFetch";
import SearchComponent from "../../components/SearchInput";
import Container from "../../components/Grid/Container";
import styled from "styled-components";
import Listing from "./components/Listing";

const Header = styled.div`

  padding:5rem 1rem 2rem 1rem;
    background:#f0f0f0;
`

const BookList = () => {
    const { genre } = useParams<{ genre: string }>();
    const fetchFunction = () => fetchBooksByGenre(genre || '');
    const { data: books, loading, error } = useFetch(fetchFunction, [genre]);



    return <div>
        <Header>
            <Container>
                <NavBar />
                <SearchComponent />
            </Container>
        </Header>
        <Listing books={books?.results} loading={loading} error={error} />


    </div>
}

export default BookList;