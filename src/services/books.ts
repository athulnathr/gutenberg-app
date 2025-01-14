import axios, { CancelToken, CancelTokenSource } from 'axios';
import { FetchBookResponse } from '../types/Books';

const BASE_URL = 'http://skunkworks.ignitesol.com:8000';

export const fetchBooks= async (genre: string, search:string | null , page: number = 1):Promise<FetchBookResponse.Root>  => {
  try {
    const response = await axios.get<FetchBookResponse.Root>(`${BASE_URL}/books`, {
      params: {
        topic: genre,
        page: page,
        mime_type: 'image',
        search:search ? (search) : ''
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};