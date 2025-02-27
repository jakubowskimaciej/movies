import { SkeletonMovieCard } from '@/components/ui/skeleton';

export default function MoviesLoading() {
  return (
    <div className="w-full h-[calc(100vh-165px)] flex justify-center items-center">
      <h2>Loading...</h2>
    </div>
  );
}
