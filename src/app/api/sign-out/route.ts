import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  const cookiesStore = await cookies();

  cookiesStore.delete("access_token");
  cookiesStore.delete("user");

  return NextResponse.json({ message: "Success logout!" });
}
