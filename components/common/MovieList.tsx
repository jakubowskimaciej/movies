import { MovieListProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default function MovieList({ movies }: MovieListProps) {
  const posterLink = `https://image.tmdb.org/t/p/`;

  if (!movies || movies.length === 0) {
    return <div>No movies found.</div>; // Obsługa przypadku, gdy `movies` jest `undefined`
  }

  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 place-items-center justify-center"
      style={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 16rem))',
      }}
    >
      {movies.map((movie) => (
        <div key={movie.id} className="relative">
          <Link href={`/movie/${movie.id}`} className="movie-link ">
            <Image
              src={posterLink + 'w342' + movie.poster_path}
              alt={`Poster for ${movie.title}`}
              width={342} // Ustalony rozmiar dla stałych wymiarów
              height={512}
              className="object-cover rounded-xl h-[340px] transition-transform duration-300 ease-out scale-100 hover:scale-[1.03]"
              priority
            />
            <div className="w-full flex flex-col pt-3 pb-5  justify-center items-center text-xs text-center tracking-wide">
              <p>{movie.title}</p>
              <p>{movie.vote_average}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
