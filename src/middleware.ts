import { getCookie } from 'cookies-next';
import { ROUTES } from './constants/route';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const publicRoutes = [
  ROUTES.AUTH.DOCTOR_SIGNUP,
  ROUTES.AUTH.PATIENT_SIGNUP,
  ROUTES.AUTH.LOGIN,
];
const protectedRoutes = [
  ROUTES.DASHBOARD.DOCTOR_DASH,
  ROUTES.DASHBOARD.DOCTOR_APPT,
  ROUTES.DASHBOARD.PATIENT_DASH,
  ROUTES.DASHBOARD.PATIENT_APPT,
  ROUTES.DASHBOARD.PATIENT_BOOK_APPT,
];
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

export default async function middleware(req: NextRequest) {
  const res = NextResponse;
  // check current path is public or protected
  const path = req.nextUrl.pathname;
  const isProtected = protectedRoutes.includes(path);
  const isPublic = publicRoutes.includes(path);
  console.log('Current Path: ', path);

  // gets cookie value
  const cookie = await getCookie('accessToken', { cookies });

  // Redirect to /login if user not authenticated
  if (isProtected && !cookie) {
    return res.redirect(new URL(ROUTES.AUTH.LOGIN, req.nextUrl));
  }
  // Redirect to /dashboard if user authenticated
  if (isPublic && cookie && !req.nextUrl.pathname.includes('dashboard')) {
    return res.redirect(new URL(ROUTES.DASHBOARD.DOCTOR_DASH, req.nextUrl)); //FIXME:
  }
  // middleware next function
  return res.next();
}
