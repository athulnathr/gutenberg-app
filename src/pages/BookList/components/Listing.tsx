import React, { FC, useCallback, useState } from 'react'
import { GridContainer, GridItem } from '../../../components/Grid'
import Book from './Book'
import { FetchBookResponse } from '../../../types/Books'
import Container from '../../../components/Grid/Container'
import styled from 'styled-components'
import InfiniteScroll from '../../../components/InfiniteScroll'
import { fetchBooks } from '../../../services/books'
import generateUniqueKey from '../../../utils/uniqueKey'

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
    const [hasError, setError] = useState<null | string>(null)

    const handleBookSelect = useCallback((book: FetchBookResponse.Book) => {
        if (book.formats['application/pdf']) {
            window.open(book.formats['application/pdf']);
        } else if (book.formats['text/html']) {
            window.open(book.formats['text/html']);
        } else if (book.formats['text/plain']) {
            window.open(book.formats['text/plain']);
        } else {
            alert('No viewable version available');
        }
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
    }, []);

    if (hasError) {
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
                        <GridItem key={generateUniqueKey()}>
                            <Book book={book} onBookSelect={handleBookSelect} />
                        </GridItem>
                    ))}
                    {(loading && books === null) ? <p>Loading books... </p> : loading ? 
                    <p>Loading More Books...</p>:<></>
                }
                </GridContainer>
            )}

        </InfiniteScroll>
    </ListingContainer>
}

export default Listing;