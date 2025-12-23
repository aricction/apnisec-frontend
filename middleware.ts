import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect /Dashboard route
  if (pathname.startsWith('/Dashboard')) {
    const token = request.cookies.get('token')?.value;

    if (!token) {
      // Redirect to login if no token
      return NextResponse.redirect(new URL('/Login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/Dashboard/:path*'],
};