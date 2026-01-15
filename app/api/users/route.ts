// app/api/users/route.ts
import { NextResponse } from "next/server";

export interface User {
  id: number;
  name: string;
}

const users: User[] = Array.from({ length: 100 }).map((_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
}));

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") || "";
  const page = Number(searchParams.get("page") || 1);
  const id = searchParams.get("id");
  const size = 20;

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Get user by ID
  if (id) {
    const user = users.find((u) => u.id === parseInt(id));
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(user);
  }

  // Filter by search query
  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(q.toLowerCase())
  );

  // Paginate results
  const paginated = filtered.slice((page - 1) * size, page * size);

  return NextResponse.json({
    users: paginated,
    total: filtered.length,
    page,
    totalPages: Math.ceil(filtered.length / size),
  });
}
