import { SkeletonMovieCard } from '@/components/ui/skeleton';
import { getPopularMovies } from '@/lib/api/tmdb';
import { Movie } from '@/types';
import { Suspense } from 'react';
import MovieList from '@/components/common/MovieList';
import PageTitle from '@/components/ui/PageTitle';

export default async function Home() {
  const movies: Movie[] = await getPopularMovies();

  return (
    <section>
      <PageTitle title="popular" />
      <Suspense fallback={<SkeletonMovieCard />}>
        <MovieList movies={movies} />
      </Suspense>
    </section>
  );
}
