import Loader from '@/components/ui/Loader';

export default function MoviesLoading() {
  return (
    <div className="w-full h-[calc(100vh-165px)] flex justify-center items-center">
      <Loader />
    </div>
  );
}
