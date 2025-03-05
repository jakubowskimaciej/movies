import { fetchMovieCredits, fetchMovieDetails } from '@/lib/api/tmdb';
import { Genre, MovieCredits, MovieDetailsProps, PageProps } from '@/types';
import getConfig from 'next/config';
import Image from 'next/image';
import Link from 'next/link';

export default async function MovieDetails({ params }: PageProps) {
  const { movieId } = await params;

  const movieDetails: MovieDetailsProps | null = await fetchMovieDetails(movieId);

  console.log(movieDetails);

  const posterLink = `https://image.tmdb.org/t/p/`;

  if (!movieDetails) {
    return <div>Movie not found</div>;
  }

  const releaseDate = movieDetails.release_date.slice(0, 4);
  const runtime = movieDetails.runtime + ' ' + 'min.';
  const language = movieDetails.spoken_languages[0].english_name;

  const credits: MovieCredits | null = await fetchMovieCredits(movieId);

  console.log(credits);

  return (
    <section className="w-full grid grid-cols-1 xl:grid-cols-[0.45fr_1fr] justify-items-center gap-8 pt-5 text-gray-main">
      <div className="movie-details-col ">
        <Image
          src={posterLink + 'w780' + movieDetails.poster_path}
          alt={`Poster for ${movieDetails.title}`}
          width={350}
          height={550}
          className="w-auto h-auto object-contain rounded-xl shadow-xl"
          priority
        />
        <div className="w-full px-4 lg:px-20  ">
          <div className="flex items-center justify-center lg:justify-between pt-4">
            <button className="button-main mr-3">Website</button>
            <button className="button-main mr-3">IMDB</button>
            <button className="button-main ">Trailer</button>
          </div>
          <div className="flex justify-center mt-4">
            <button className="button-main w-[15rem] secondary">Add to watchlist</button>
          </div>
        </div>
      </div>
      {/* left column */}
      <div className="w-[80%] flex flex-col  border border-gray-300 py-2 px-3">
        {/* title & rating */}
        <div>
          <h2 className="text-[35px] font-light  uppercase">{movieDetails.title}</h2>
          <p className="text-base font-bold  uppercase">{movieDetails.tagline}</p>
        </div>
        <div className="w-full flex justify-between mt-5  text-sm font-light uppercase">
          <div>* * * * * * {movieDetails.vote_average}</div>
          <div>
            {language} / {releaseDate} / {runtime}
          </div>
        </div>
        {/* details info */}
        <div className="mt-6  ">
          {/* genres */}
          <div>
            <h3 className="my-3 font-bold uppercase">the genres:</h3>
            <div className=" w-full flex mb-6">
              {movieDetails.genres.slice(0, 3).map((genre: Genre) => (
                <Link
                  href={`/movies/genre/${genre.name.toLowerCase()}`}
                  key={genre.id}
                  className="border border-gray-lighter rounded-full px-2 py-1 mr-3 text-xs shadow-md"
                >
                  {genre.name}
                </Link>
              ))}
            </div>
          </div>
          {/* synopsis */}
          <div>
            <h3 className=" my-3 font-bold uppercase">the synopsis:</h3>
            <p className="text-sm">{movieDetails.overview}</p>
          </div>
          {/* cast */}
          <div>
            <h3 className=" my-6 font-bold  uppercase">the cast:</h3>
            <div className="w-full max-h-[700px] grid grid-cols-2 gap-4 overflow-auto ">
              {credits?.cast.map((person) => (
                <Link href={`/person/${person.id}`} key={person.id} className="flex text-xs">
                  {/* <div className="w-[40px] h-[40px] bg-gray-lighter rounded-full mr-3" /> */}
                  <Image
                    src={posterLink + 'w185' + person.profile_path}
                    alt={person.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover w-[55px] h-[55px] mr-3"
                    priority
                  />
                  <div className="flex flex-col">
                    <p className="">{person.name}</p>
                    <p className="">as {person.character}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
