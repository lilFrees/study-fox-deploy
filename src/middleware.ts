import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("access_token")?.value;
  const locale = request.cookies.get("NEXT_LOCALE")?.value;

  const protectedRoutes = ["account"];
  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.includes(route),
  );

  console.log(request.nextUrl.pathname.split("/")[1]);

  if (isProtectedRoute) {
    if (!accessToken) {
      const redirectUrl = new URL(`/${locale}/auth/sign-in`, request.url);
      return NextResponse.redirect(redirectUrl);
    }
  }

  const intlMiddleware = createMiddleware(routing);
  return intlMiddleware(request);
}

export const config: MiddlewareConfig = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
