
import { api } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';

export const DataArticle = (page: number, limit: number, text: string) => {
  return useQuery({
    queryKey: ['article', page],
    queryFn: async () =>
      await api.get(
        `article/filter?page=${page}&limit=${limit} &search=${text}`
      ),
  });
};

export const DataArticleDetails = (slug: string) => {
  return useQuery({
    queryKey: ['detail_article', slug],
    queryFn: async () => await api.get(`article/${slug}`),
  });
};

export const SearchDataArticle = (text: string) => {
  return useQuery({
    queryKey: ['search_artikel', text],
    queryFn: async () =>
      await api.get(`article/filter?page=1&limit=10&search=${text}`),
  });
};
