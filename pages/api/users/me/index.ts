import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "GET") {
    const profile = await client.user.findUnique({
      where: { id: req.session.user?.id },
    });

    res.json({
      ok: true,
      profile,
    });
  }

  if (req.method === "POST") {
    const {
      session: { user },
      body: { email, phone, name },
    } = req;

    const currentUser = await client.user.findUnique({
      where: {
        id: user?.id,
      },
    });

    if (email && email !== currentUser?.email) {
      const alreayExists = Boolean(
        await client.user.findUnique({
          where: {
            email,
          },
          select: {
            id: true,
          },
        })
      );
      if (alreayExists) {
        return res.json({
          ok: false,
          error: "Email already taken.",
        });
      }
      await client.user.update({
        where: {
          id: user?.id,
        },
        data: {
          email,
        },
      });
      res.json({ ok: true });
    }
    if (phone && phone !== currentUser?.phone) {
      const alreayExists = Boolean(
        await client.user.findUnique({
          where: {
            phone,
          },
          select: {
            id: true,
          },
        })
      );
      if (alreayExists) {
        return res.json({
          ok: false,
          error: "phone number already taken.",
        });
      }
      await client.user.update({
        where: {
          id: user?.id,
        },
        data: {
          phone,
        },
      });
      res.json({
        ok: true,
        phone,
      });
    }
    if(name){
      await client.user.update({
        where:{
          id:user?.id
        },
        data:{
          name
        }
      })
    }
    res.json({
      ok:true
    })
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET", "POST"],
    handler,
  })
);
