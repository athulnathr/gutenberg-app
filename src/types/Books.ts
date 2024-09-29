
export module FetchBookResponse {
    export interface  Book {
        id: number;
        title: string;
        authors:Array<Author>
        mime_type: string;
        formats:Formats
      }
      
      export interface Author{
        name:string,
      }
      export interface Formats {
        "application/epub+zip"?: string;
        "application/octet-stream"?: string;
        "application/rdf+xml"?: string;
        "application/x-mobipocket-ebook"?: string;
        "image/jpeg"?: string;
        "text/html"?: string;
        "text/plain"?: string;
        "text/plain; charset=us-ascii"?: string;
      }

      export interface Root {
        count: number;
        next: string | null;
        previous: string | null;
        results: Array<Book>;
      }
}

