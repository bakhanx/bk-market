import { withIronSessionApiRoute } from "iron-session/next";

// passwordsgenerators.net // at least 36 words


declare module "iron-session" {
    interface IronSessionData {
      user?: {
        id: number;
      };
    }
  }

const cookieOptions = {
    cookieName: "bksession",
    password : process.env.COOKIE_PASSWORD!,
}

export function withApiSession(fn :any){
    return withIronSessionApiRoute(fn, cookieOptions);
}