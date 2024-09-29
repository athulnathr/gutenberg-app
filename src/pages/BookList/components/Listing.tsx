import React, { FC, useCallback, useState } from 'react'
import { GridContainer, GridItem } from '../../../components/Grid'
import Book from './Book'
import { FetchBookResponse } from '../../../types/Books'
import Container from '../../../components/Grid/Container'
import styled from 'styled-components'
import InfiniteScroll from '../../../components/InfiniteScroll'
import { fetchBooks } from '../../../services/books'

interface IListing {
    genre?: string
}

const ListingContainer = styled(Container)`
    padding:16px 0;
    @media (max-width:${(props) => props.theme.breakpoints.mobile}) {
        padding:16px;
    }
`

const Listing: FC<IListing> = ({ genre }) => {


    const [hasMore, setHasMore] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const [hasError , setError] = useState<null | string>(null) 

    const handleBookSelect = useCallback((book: FetchBookResponse.Book) => {
        console.log(book)
    }, []);


    const fetchMoreBooks = useCallback(async (page: number) => {
        try {
            setLoading(true);
            const response = await fetchBooks(genre || '', page);
            setLoading(false);
            if (response?.results.length === 0) {
                setHasMore(false);
            }
            return response.results;
        } catch (error) {
            setError(((error) as Error).message)
            return [];
        }
    }, [genre]);

    if(hasError){
        return <h5>{hasError || `Some Error Occuerd while Fetching data`}</h5>
    }

    return <ListingContainer>
        <InfiniteScroll
            fetchData={fetchMoreBooks}
            hasMore={hasMore}
            loading={loading}
        >
            {(books) => (
                <GridContainer desktopColumns={6} tabletColumns={4} mobileColumns={3}>
                    {books.map((book) => (
                        <GridItem key={`${book.id}-listing`}>
                            <Book book={book} onBookSelect={handleBookSelect} />
                        </GridItem>
                    ))}
                    {loading && <p>Loading...</p>}
                </GridContainer>
            )}

        </InfiniteScroll>
    </ListingContainer>
}

export default Listing;