import React from 'react'
import styled from 'styled-components';
import Container from '../../../components/Grid/Container';
import { BOOK_TYPES } from '../../../constants/bookTypes';
import { GridContainer, GridItem } from '../../../components/Grid';
import { useNavigate } from 'react-router-dom';
import paths from '../../../constants/paths';
import { FaArrowRight } from "react-icons/fa";


const GenreListingStyles = styled.div`
    background:${props => props.theme.background};
    padding:16px;
    height:100%;
`;

const Button = styled.button`
    padding: 11px 10px;
    border-radius:4px;
    display:flex;
    justify-content:space-between;
    outline:none;
    background:${props => props.theme.secondary};
    border:none;
    width:100%;
    font-size:20px;
    font-weight:${props => props.theme.fontWeights.semiBold};
    text-transform:uppercase;
    cursor:pointer;
    box-shadow: 0 2px 5px 0 rgba(211, 209, 238, 0.5);\
    line-height:1;
    margin:16px;
   
`;

const ButtonIcon = styled.span`
    margin-right:8px;
    font-size:1.2em;
    color:${(props) => props.theme.primary}
`

const RightElements = styled.span`
    display:flex;
    align-items:center

`

const GenreListing = () => {
    const navigate = useNavigate();
    const handleSelectBookType = (genre: string) => {
        navigate(paths.books(genre))
    }

    return <GenreListingStyles>
        <Container>
            <GridContainer desktopColumns={2} mobileColumns={1} tabletColumns={1} >

                {
                    BOOK_TYPES?.map((book) => <GridItem key={book.id}>
                        <Button onClick={() => handleSelectBookType(book.id)}>
                            <RightElements>
                                <ButtonIcon>{<book.icon />}</ButtonIcon>
                                {book.label}
                            </RightElements>
                            <ButtonIcon><FaArrowRight/></ButtonIcon>
                        </Button>
                    </GridItem>)
                }
            </GridContainer>
        </Container>
    </GenreListingStyles>
}

export default GenreListing;