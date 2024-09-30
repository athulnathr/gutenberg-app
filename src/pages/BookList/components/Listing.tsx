import React, { FC, useCallback, useEffect, useState } from 'react'
import { GridContainer, GridItem } from '../../../components/Grid'
import Book from './Book'
import { FetchBookResponse } from '../../../types/Books'
import Container from '../../../components/Grid/Container'
import styled from 'styled-components'
import InfiniteScroll from '../../../components/InfiniteScroll'
import { fetchBooks } from '../../../services/books'
import generateUniqueKey from '../../../utils/uniqueKey'
import { useSearchParams } from 'react-router-dom'
import { AxiosError, CancelToken, CancelTokenSource } from 'axios'
import Shimmer from '../../../components/Shimmer'
import ShimmerCard from '../../../components/Shimmer'
import LoadingAnimation from './Loading'
import NotFound from './NotFound'

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
    const [searchQuery] = useSearchParams();
    const search = searchQuery.get('search');


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

    const fetchMoreBooks = async (page: number) => {
        console.log(page, 'search on dependancy useCallback')
        try {
            setLoading(true);
            const response = await fetchBooks(genre || '', search, page);
            setLoading(false);
            if (response?.results.length === 0) {
                setHasMore(false);
            }
            return response.results;
        } catch (error) {
            if (((error) as AxiosError).status == 404) {
                setHasMore(false);
                setLoading(false);
            }
            return [];
        }
    };



    return <ListingContainer>
        <InfiniteScroll
            fetchData={fetchMoreBooks}
            hasMore={hasMore}
            loading={loading}
            reset={search}
        >
            {(books) => (
                (books.length == 0 && !loading) ? <NotFound /> :
                    <GridContainer desktopColumns={6} tabletColumns={4} mobileColumns={3}>
                        {books.map((book) => (
                            <GridItem key={generateUniqueKey()}>
                                <Book book={book} onBookSelect={handleBookSelect} />
                            </GridItem>
                        ))}
                        {loading ? <LoadingAnimation /> : <></>}
                    </GridContainer>
            )}

        </InfiniteScroll>
    </ListingContainer>
}

export default Listing;