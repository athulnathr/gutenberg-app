export module FetchBookResponse {
    export interface  Book {
        id: number;
        title: string;
        authors:Array<Author>
        mime_type: string;
      }
      
      export interface Author{
        name:string,
      }

      export interface Root {
        count: number;
        next: string | null;
        previous: string | null;
        results: Array<Book>;
      }
}

