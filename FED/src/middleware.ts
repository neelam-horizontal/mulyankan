// Global
import type { NextRequest, NextFetchEvent } from 'next/server';
import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

// Local
import middleware from 'lib/middleware';

// eslint-disable-next-line
export default async function (req: NextRequest, ev: NextFetchEvent) {
  const maintenanceMode = await get('maintenanceMode');

  if (maintenanceMode === true) {
    req.nextUrl.pathname = `/html/maintenance.html`;
    return NextResponse.rewrite(req.nextUrl);
  }

  return middleware(req, ev);
}

export const config = {
  /*
   * Match all paths except for:
   * 1. /api routes
   * 2. /_next (Next.js internals)
   * 3. /public routes
   * 4. /sitecore/api (Sitecore API routes)
   * 5. /- (Sitecore media)
   * 6. all root files inside /public (e.g. /favicon.ico)
   */
  matcher: ['/', '/((?!api/|_next/|public/|sitecore/api/|-/|[\\w-]+\\.\\w+).*)'],
};
