import MovieList from '@/components/common/MovieList';
import PageTitle from '@/components/ui/PageTitle';
import { fetchMoviesByCategory } from '@/lib/api/tmdb';
import { PageProps } from '@/types';

export default async function Page({ params }: PageProps) {
  const { category } = await params;

  const formatCategory = (category: string) => {
    return category.replace(/_/g, ' ');
  };

  const movies = await fetchMoviesByCategory(category);
  if (movies.length === 0) {
    console.warn(`No movies found for category: ${category}`); // Debugging
  }
  const pageTitle = `${formatCategory(category)}`;

  return (
    <div>
      <PageTitle title={pageTitle} />
      <MovieList movies={movies} />
    </div>
  );
}
