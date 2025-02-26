import Header from '@/components/common/Header';
import Navigation from '@/components/common/Navigation';
import { getGenres } from '@/lib/api/tmdb';
import { Genre } from '@/types';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const genres: Genre[] = await getGenres();

  return (
    <div className=" w-full  flex flex-col">
      {/* HEADER */}
      <Header />
      {/* MAIN CONTENT */}
      <div className="flex flex-1  pt-16 ">
        {/* STICKY NAVIGATION */}
        <Navigation genres={genres} />

        {/* MOVIE GRID */}
        <main className="flex-1  p-6">{children}</main>
      </div>
    </div>
  );
}
