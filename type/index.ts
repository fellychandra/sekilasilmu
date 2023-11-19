export interface TArtikel {
  map(arg0: (artikels: TArtikel) => import("react").JSX.Element): unknown;
  id: string;
  author: { full_name: 'Admin 4' };
  category: string;
  content: string;
  created_at: string;
  is_favorite: false;
  slug: string;
  tags: string[];
  thumbnail: string;
  title: string;
  views: number;
}

export interface TPage {
  max_page: number;
  current_page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export interface TArtikels {
  dataArtikel: TArtikel;
}
