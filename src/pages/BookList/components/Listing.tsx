import React, { FC, useCallback } from 'react'
import { GridContainer, GridItem } from '../../../components/Grid'
import Book from './Book'
import { FetchBookResponse } from '../../../types/Books'
import Container from '../../../components/Grid/Container'
import styled from 'styled-components'

interface IListing {
    books?: Array<FetchBookResponse.Book>,
    loading: boolean,
    error?: string | null
}

const ListingContainer = styled(Container)`
    padding:16px 0;
`

const Listing: FC<IListing> = ({ books }) => {
    
    const handleBookSelect = useCallback((book : FetchBookResponse.Book) => {
        console.log(book)
    },[]);

    return <ListingContainer>
        <GridContainer desktopColumns={6} tabletColumns={4} mobileColumns={3}>
            {books?.map((book) => <GridItem key={`${book.id}-listing`}>
                <Book book={book} onBookSelect={handleBookSelect} />
            </GridItem>
            )}
        </GridContainer>
    </ListingContainer>
}

export default Listing;