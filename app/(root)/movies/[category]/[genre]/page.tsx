import MovieList from '@/components/common/MovieList';
import PageTitle from '@/components/ui/PageTitle';
import { fetchMoviesByGenre, getGenres } from '@/lib/api/tmdb';
import { Genre, Movie, PageProps } from '@/types';

export default async function Page({ params }: PageProps) {
  const { genre } = await params;
  const formatCategory = (genre: string) => {
    return genre.replace(/%20/g, ' ');
  };

  const genres: Genre[] = await getGenres();
  const normalizedGenre = genre.trim().toLowerCase();

  const genreId = genres
    .filter((el) => el.name.trim().toLowerCase() === formatCategory(normalizedGenre))
    .map((el) => el.id)[0];

  const movies: Movie[] = await fetchMoviesByGenre(genreId);

  return (
    <div>
      <PageTitle title={`${formatCategory(genre)}`} />
      <MovieList movies={movies} />
    </div>
  );
}
