// app/api/countries/route.ts
import { NextResponse } from "next/server";

export interface Country {
  id: number;
  name: string;
}

const countries: Country[] = [
  { id: 1, name: "United States" },
  { id: 2, name: "Canada" },
  { id: 3, name: "United Kingdom" },
  { id: 4, name: "France" },
  { id: 5, name: "Germany" },
  { id: 6, name: "Japan" },
  { id: 7, name: "Australia" },
  { id: 8, name: "Brazil" },
  { id: 9, name: "Mexico" },
  { id: 10, name: "India" },
  { id: 11, name: "China" },
  { id: 12, name: "Italy" },
  { id: 13, name: "Spain" },
  { id: 14, name: "South Korea" },
  { id: 15, name: "Netherlands" },
  { id: 16, name: "Switzerland" },
  { id: 17, name: "Sweden" },
  { id: 18, name: "Norway" },
  { id: 19, name: "Denmark" },
  { id: 20, name: "Finland" },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const q = searchParams.get("q") || "";
  const page = Number(searchParams.get("page") || 1);
  const size = 10;

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Get country by ID
  if (id) {
    const country = countries.find((c) => c.id === parseInt(id));
    if (!country) {
      return NextResponse.json({ error: "Country not found" }, { status: 404 });
    }
    return NextResponse.json(country);
  }

  // Filter by search query
  const filtered = countries.filter((c) =>
    c.name.toLowerCase().includes(q.toLowerCase())
  );

  // Paginate results
  const paginated = filtered.slice((page - 1) * size, page * size);

  return NextResponse.json({
    countries: paginated,
    total: filtered.length,
    page,
    totalPages: Math.ceil(filtered.length / size),
  });
}
