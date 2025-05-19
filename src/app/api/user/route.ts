import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();

  const token = cookieStore.get("access_token");
  const user = cookieStore.get("user");
  if (!token || token.value === "undefined") {
    cookieStore.delete("access_token");
    cookieStore.delete("user");
    return NextResponse.json({ message: "Token not found" }, { status: 401 });
  }

  return NextResponse.json({ user });
}
