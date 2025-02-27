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

export interface SearchbarProps {
  isScrolled: boolean;
}

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

interface ApiResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface MovieListProps {
  movies: Movie[];
}
