import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  //cleaning the url to get the id parameter
  if (req.nextUrl.pathname.startsWith('/api/entries/')) {
    const id = req.nextUrl.pathname.replace('/api/entries/', '');
    //regular expresion for mongoID
    const checkMongoIDRegExp = new RegExp('^[0-9a-fA-F]{24}$');
    if (!checkMongoIDRegExp.test(id)) {
      const url = req.nextUrl.clone();
      url.pathname = '/api/bad-request';
      url.search = `?msg=${id} is not a valid ID`;

      return NextResponse.rewrite(url);
    }
  }
  return NextResponse.next();
}

export const config = {
  /* matcher: '/about/:path*', */
  matcher: ['/api/entries/:path+'],
};
