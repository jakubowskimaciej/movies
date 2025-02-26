import { Genre, GenresResponse } from '@/types';

const apiURL = 'https://api.themoviedb.org/3';

export async function getGenres(): Promise<Genre[]> {
  try {
    const res = await fetch(`${apiURL}/genre/movie/list?api_key=${process.env.NEXT_TMDB_API_KEY}`);

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData?.status_message || 'Failed to fetch genres');
    }

    const data: GenresResponse = await res.json();

    if (!data.genres || data.genres.length === 0) {
      throw new Error('No genres found in the response');
    }

    return data.genres;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error fetching genres:', error.message);
    } else {
      console.error('Unknown error occurred while fetching genres');
    }
    throw error; // Re-throw the error to be handled by the caller
  }
}
