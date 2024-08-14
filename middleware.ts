import { createRedirectionIoMiddleware } from "@redirection.io/vercel-middleware/next";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

const handle = async (req: NextRequest) => {
  const url = req.nextUrl;

  if (url.pathname.startsWith("/test-next")) {
    return NextResponse.next();
  }

  if (url.pathname.startsWith("/test-rewrite")) {
    return NextResponse.rewrite(new URL(`/`, req.url));
  }

  return NextResponse.next();
};

let middleware = handle;
if (process.env.REDIRECTIONIO_TOKEN) {
  // @ts-ignore
  middleware = createRedirectionIoMiddleware({ nextMiddleware: handle });
}

export default middleware;

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_static/|_vercel|.*\\..*|[\\w-]+\\.\\w+).*)",
  ],
  unstable_allowDynamic: ["/node_modules/@redirection.io/**"],
};
