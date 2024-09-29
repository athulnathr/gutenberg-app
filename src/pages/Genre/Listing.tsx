import React from 'react'
import styled from 'styled-components';
import Container from '../../components/Grid/Container';
import { BOOK_TYPES } from '../../constants/bookTypes';
import { GridContainer, GridItem } from '../../components/Grid';


const GenreListingStyles = styled.div`
    background:var(--grey-100);
    padding:16px;
`;

const Button = styled.button`
    padding: 0 10px;
    border-radius:4px;
   
    outline:none;
    background:var(--secondary-color);
    border:none;
    width:100%;
    font-size:20px;
    font-weight:var(--font-weight-regular);
    text-transform:uppercase;
    cursor:pointer;
    box-shadow: 0 2px 5px 0 rgba(211, 209, 238, 0.5);
`;

const ButtonIcon = styled.span`
    width:10px;
    height:10px;
    margin-right:5px;
    color:${(props) => props.theme.primary}
`

const GenreListing = () => {
    
    const handleSelectBookType = (bookId:string) => {
        console.log(bookId)
    }

    return <GenreListingStyles>
        <Container>
            <GridContainer desktopColumns={2} mobileColumns={1} tabletColumns={1} >

                {
                    BOOK_TYPES?.map((book) => <GridItem key={book.id}>
                        <Button onClick={() => handleSelectBookType(book.id)}>
                            <ButtonIcon>I</ButtonIcon>
                            {book.label}
                            <ButtonIcon>I</ButtonIcon>
                        </Button>
                    </GridItem>)
                }
            </GridContainer>
        </Container>
    </GenreListingStyles>
}

export default GenreListing;