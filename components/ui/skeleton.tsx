import { cn } from '@/lib/utils';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('animate-pulse rounded-md bg-primary/10', className)} {...props} />;
}

export function SkeletonMovieCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="flex flex-col space-y-3">
          <Skeleton className="h-[350px] w-64" />
          <Skeleton className="h-16 w-64" />
        </div>
      ))}
    </div>
  );
}

export function MainSkeleton() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h1>Loading...</h1>
    </div>
  );
}
