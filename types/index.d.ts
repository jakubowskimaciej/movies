// Typ dla pojedynczego genre
export interface Genre {
  id: number;
  name: string;
}

// Typ dla odpowiedzi z API, która zawiera listę genres
export interface GenresResponse {
  genres: Genre[];
}

export interface NavigationProps {
  genres: Genre[];
}

// types.ts
export interface SidebarLink {
  label: string;
  route: string;
}

export interface SearchbarProps {
  isScrolled: boolean;
}

export interface Movie {
  id: number;
  title: string;
  poster_path: string | null; // Może być null w odpowiedzi TMDb
  overview: string;
  release_date: string; // ISO 8601, np. "2023-01-01"
  vote_average: number;
  genre_ids: number[]; // Poprawione z genreId na tablicę
  backdrop_path?: string | null; // Opcjonalne, przydatne do tła
  popularity?: number; // Opcjonalne, ale użyteczne
  original_title?: string; // Opcjonalne, jeśli chcesz oryginalny tytuł
}

export interface ApiResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface MovieListProps {
  movies?: Movie[];
}

export interface PageProps {
  params: {
    category: string; // np. "popular"
    genre: string; // np. "action"
    genreId: number; // np. "28"
  };
}

export interface ErrorResponse {
  status_code: number;
  status_message: string;
  success: boolean;
}
