'use client';
import { usePathname } from 'next/navigation';

export default function GenrePage() {
  const pathname = usePathname();
  const genreName = pathname.split('/').pop(); // Pobiera ostatnią część URL

  return (
    <section>
      <h2 className=" flex flex-col capitalize text-2xl font-light text-gray-light my-6 mx-3">
        {genreName} <span className="uppercase text-sm font-bold">movies</span>
      </h2>
      {/* Możesz tutaj dodać logikę pobierania filmów na podstawie genre */}
      {/* SKELETONS */}
    </section>
  );
}
