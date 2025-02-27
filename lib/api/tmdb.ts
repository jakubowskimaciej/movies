import { ApiResponse, Genre, GenresResponse, Movie } from '@/types';

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

export async function getPopularMovies(page: number = 1): Promise<Movie[]> {
  const apiKey = process.env.NEXT_TMDB_API_KEY;

  if (!apiKey) {
    throw new Error('TMDB API key is missing. Please check your environment variables.');
  }

  const url = `${apiURL}/movie/popular?api_key=${apiKey}&page=${page}`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    const data: ApiResponse = await res.json();
    return data.results;
  } catch (error) {
    if (error instanceof TypeError) {
      console.error('Network error:', error);
    } else {
      console.error('API error:', error);
    }
    throw error;
  }
}
