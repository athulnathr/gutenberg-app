import React, { FC } from 'react'
import { GridContainer, GridItem } from '../../../components/Grid'
import Book from './Book'
import { FetchBookResponse } from '../../../types/Books'

interface IListing{
    books?:Array<FetchBookResponse.Book>,
    loading:boolean, 
    error?:string | null
}

const Listing:FC<IListing>= ({books}) => {


    return <GridContainer desktopColumns={6} tabletColumns={4} mobileColumns={3}>
        <GridItem> {books?.map((book) =><Book /> )} </GridItem>
    </GridContainer>
}

export default Listing;