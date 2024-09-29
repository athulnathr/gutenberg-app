import React, { FC } from 'react'
import styled from 'styled-components';
import { FetchBookResponse } from '../../../types/Books';



const BookItem = styled.div`
    display:grid;
    gap:5px;
    cursor:pointer;
`;

const BookImage = styled.div`
    border-radius: 8px;
    box-shadow: 0 2px 5px 0 rgba(211, 209, 238, 0.5);
    overflow:hidden;
    margin:0 auto;
    img{
        display:block;
        width:  100%;
        height:100%;
        object-fit: contain;
    }
`;

const AuthorName = styled.h4`
    color:${props => props.theme.grey500};
    font-weight:${(props) => props.theme.fontWeights.semiBold};
    font-size:12px;
`;


const BookTitle = styled.h3`
    font-weight:${(props) => props.theme.fontWeights.semiBold};
    font-size:12px;
    word-break:break-all;
    color:${props => props.theme.grey900}
`

interface IBook {
    book:FetchBookResponse.Book,
    onBookSelect:(book:FetchBookResponse.Book) => void;
}
const Book:FC<IBook> = ({book , onBookSelect}) => {

    return (
       <BookItem onClick={() => onBookSelect(book)}>
        <BookImage> <img src={book.formats['image/jpeg']}  alt={`${book.title}-image`}/> </BookImage>
        <BookTitle>{book.title}</BookTitle>
        <AuthorName>{book.authors?.[0].name}</AuthorName>
       </BookItem>
    )

}

export default Book;