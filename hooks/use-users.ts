import { useQuery } from "@tanstack/react-query";

export function useUsers(q: string, page: number) {
  return useQuery({
    queryKey: ["users", q, page],
    queryFn: async () => {
      const res = await fetch(`/api/users?q=${q}&page=${page}`);
      return res.json();
    },
  });
}
