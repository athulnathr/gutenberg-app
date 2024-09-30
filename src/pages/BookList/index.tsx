import { useParams } from 'react-router-dom';
import NavBar from "./components/NavBar";
import SearchComponent from "../../components/SearchInput";
import Container from "../../components/Grid/Container";
import styled from "styled-components";
import Listing from "./components/Listing";

const Header = styled.div`

  padding:5rem 1rem 2rem 1rem;
    background:${props => props.theme.background};
`

const BookList = () => {
    const { genre } = useParams<{ genre: string }>();
    return <div>
        <Header>
            <Container>
                <NavBar genre={genre}/>
                <SearchComponent />
            </Container>
        </Header>
        <Listing genre={genre} />


    </div>
}

export default BookList;