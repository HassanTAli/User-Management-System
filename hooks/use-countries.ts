import { useQuery } from "@tanstack/react-query";

export interface Country {
  id: number;
  name: string;
}

interface CountriesResponse {
  countries: Country[];
  total: number;
  page: number;
  totalPages: number;
}

async function fetchCountries(
  q: string = "",
  page: number = 1
): Promise<CountriesResponse> {
  const res = await fetch(`/api/countries?q=${q}&page=${page}`);
  if (!res.ok) {
    throw new Error("Failed to fetch countries");
  }
  return res.json();
}

async function fetchCountryById(id: number): Promise<Country> {
  const res = await fetch(`/api/countries?id=${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch country");
  }
  return res.json();
}

export function useCountries(q: string = "", page: number = 1) {
  return useQuery({
    queryKey: ["countries", q, page],
    queryFn: () => fetchCountries(q, page),
  });
}

export function useCountry(id: number) {
  return useQuery({
    queryKey: ["countries", id],
    queryFn: () => fetchCountryById(id),
    enabled: !!id,
  });
}
