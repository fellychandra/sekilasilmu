export interface TArtikel {
  map(arg0: (artikels: TArtikel) => import("react").JSX.Element): unknown;
  id: string;
  author: { full_name: string };
  category: string;
  content: string;
  created_at: string;
  is_favorite: false;
  slug: string;
  tags: string[];
  thumbnail: string;
  title: string;
  views: number;
  isSimpan: string;
}

export interface TArtikels {
  dataArtikel: TArtikel[];
}

export interface TPage {
  max_page: number;
  current_page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
