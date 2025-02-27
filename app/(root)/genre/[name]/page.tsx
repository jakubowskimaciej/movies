'use client';
import PageTitle from '@/components/ui/PageTitle';
import { usePathname } from 'next/navigation';

export default function GenrePage() {
  const pathname = usePathname();
  const genreName = pathname.split('/').pop(); // Pobiera ostatnią część URL

  return (
    <section>
      <PageTitle title={genreName ?? 'Genre'} />
      {/* Możesz tutaj dodać logikę pobierania filmów na podstawie genre */}
      {/* SKELETONS */}
    </section>
  );
}
