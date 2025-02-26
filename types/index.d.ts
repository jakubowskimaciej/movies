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
