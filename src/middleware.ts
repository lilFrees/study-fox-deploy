import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { MiddlewareConfig } from "next/server";

export default createMiddleware(routing);

export const config: MiddlewareConfig = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
