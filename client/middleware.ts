import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { authKey } from "./app/constants";
import { decodedToken } from "./app/utils/jwt";
import { TAuthUser } from "./app/types";

const authRoutes = [
  "/",
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
];
const protectedRoutes = ["/dashboard", "/hr/:page*"];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = cookies().get(authKey)?.value;

  if (!accessToken) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    }
  }

  let user;
  if (accessToken) {
    user = decodedToken(accessToken) as TAuthUser;
  }

  if (user?.role === "EMPLOYEE" && pathname === "/dashboard") {
    return NextResponse.redirect(
      new URL("/hr/attendances/create", request.url)
    );
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
  matcher: [
    "/",
    "/login",
    "/register",
    "/forgot-password",
    "/reset-password",
    "/dashboard",
    "/hr/:page*",
  ],
};
