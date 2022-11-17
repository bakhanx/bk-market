import useUser from "@libs/client/useUser";
import { getIronSession } from "iron-session/edge";
import { useRouter } from "next/router";
import {
  NextRequest,
  NextFetchEvent,
  userAgent,
  NextResponse,
} from "next/server";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const ua = userAgent(req);
  const res = NextResponse.next();

  const session = await getIronSession(req, res, {
    cookieName: "bksession",
    password: process.env.COOKIE_PASSWORD!,
    // cookieOptions:{
    //   secure: process.env.NODE_ENV === "production"
    // }
  });

  // ============ Gobal Login Check ==============
  if (req.nextUrl.pathname.startsWith("/")) {
    if (!req.url.includes("/api")) {
      if (ua.isBot || (!session?.user && !req.url.includes("/enter"))) {
        req.nextUrl.searchParams.set("from", req.nextUrl.pathname);
        req.nextUrl.pathname = "/enter";
        // return NextResponse.redirect(req.nextUrl);
        return NextResponse.redirect(new URL("/enter", req.nextUrl));
      }
    }
  }

  // ============= Chats ==============
  if (req.nextUrl.pathname.startsWith("/chats")) {
    console.log("Chats middleware!");
  }
}

export const config = {
  matcher: ["/"],
};
