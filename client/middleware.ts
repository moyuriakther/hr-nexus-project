import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { authKey } from "./app/constants";

const authRoutes = ["/", "/login", "/register"];
const protectedRoutes = ["/dashboard", "/hr/:page*"];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = cookies().get(authKey);

  if (!accessToken) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    }
  }

  if (accessToken) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    } else {
      return NextResponse.next();
    }
  }

  // Redirect to login for protected routes if access token is missing
  if (
    protectedRoutes.some((route) => pathname.startsWith(route)) &&
    !accessToken
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/", "/login", "/register", "/dashboard", "/hr/:page*"],
};
