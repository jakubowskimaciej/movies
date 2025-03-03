// lib/tmdb-api.ts
import { ApiResponse, ErrorResponse, Genre, GenresResponse, Movie } from '@/types';

const apiURL = 'https://api.themoviedb.org/3';
const genreCache: { genres?: Genre[] } = {};

function getApiKey(): string {
  const key = process.env.NEXT_TMDB_API_KEY;
  if (!key) {
    throw new Error('TMDB API key is missing. Please check your environment variables.');
  }
  return key;
}

export async function getGenres(): Promise<Genre[]> {
  if (genreCache.genres) {
    return genreCache.genres;
  }
  try {
    const apiKey = getApiKey();
    const res = await fetch(`${apiURL}/genre/movie/list?api_key=${apiKey}`);
    const data = await res.json();

    if (!res.ok) {
      const errorData = data as ErrorResponse;
      throw new Error(errorData.status_message || 'Failed to fetch genres');
    }

    const successData = data as GenresResponse;
    if (!successData.genres || successData.genres.length === 0) {
      throw new Error('No genres found in the response');
    }

    genreCache.genres = successData.genres;
    return successData.genres;
  } catch (error: unknown) {
    console.error('Error fetching genres:', error instanceof Error ? error.message : 'Unknown error');
    return [];
  }
}

export async function getPopularMovies(page: number = 1): Promise<Movie[]> {
  if (page < 1) {
    throw new Error('Page number must be greater than or equal to 1');
  }
  try {
    const apiKey = getApiKey();
    const res = await fetch(`${apiURL}/movie/popular?api_key=${apiKey}&page=${page}`);
    const data = await res.json();

    if (!res.ok) {
      const errorData = data as ErrorResponse;
      throw new Error(errorData.status_message || 'Failed to fetch popular movies');
    }

    const successData = data as ApiResponse;
    return successData.results;
  } catch (error: unknown) {
    console.error('Error fetching popular movies:', error instanceof Error ? error.message : 'Unknown error');
    return [];
  }
}

export async function fetchMoviesByCategory(category: string): Promise<Movie[]> {
  const validCategories = ['popular', 'top_rated', 'upcoming', 'now_playing'] as const;
  if (!validCategories.includes(category as (typeof validCategories)[number])) {
    throw new Error(`Invalid category: ${category}`);
  }
  try {
    const apiKey = getApiKey();
    const res = await fetch(`${apiURL}/movie/${category}?api_key=${apiKey}`);
    const data = await res.json();

    if (!res.ok) {
      const errorData = data as ErrorResponse;
      throw new Error(errorData.status_message || 'Failed to fetch movies by category');
    }

    const successData = data as ApiResponse;
    return successData.results;
  } catch (error: unknown) {
    console.error('Error fetching movies by category:', error instanceof Error ? error.message : 'Unknown error');
    return [];
  }
}

export async function fetchMoviesByGenre(genreId: number): Promise<Movie[]> {
  if (!Number.isInteger(genreId) || genreId < 1) {
    throw new Error('genreId must be a positive integer');
  }
  try {
    const apiKey = getApiKey();
    const res = await fetch(`${apiURL}/discover/movie?api_key=${apiKey}&with_genres=${genreId}`);
    const data = await res.json();

    if (!res.ok) {
      const errorData = data as ErrorResponse;
      throw new Error(errorData.status_message || 'Failed to fetch movies by genre');
    }

    const successData = data as ApiResponse;
    return successData.results;
  } catch (error: unknown) {
    console.error('Error fetching movies by genre:', error instanceof Error ? error.message : 'Unknown error');
    return [];
  }
}
