

export interface BookType{
    id:string, 
    label:string
}

export const BOOK_TYPES:Array<BookType> = [
    { id: 'fiction', label: 'Fiction' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'drama', label: "Drama" },
    { id: 'history', label: "History" },
    { id: 'humor', label: "Humor" },
    { id: 'adventure', label: "Adventure" },
    { id: 'politics', label: "Politics" }
];