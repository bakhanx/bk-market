import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { prisma } from "@prisma/client";
import { randomInt } from "crypto";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : { email };

  const payload = Math.floor(10000+Math.random()*90000)+"";
  const token = await client.token.create({
    data : {
      payload,
      user : {
        connectOrCreate : {
          where: {
           ...user
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        }
      }

    }
  });

  console.log(token);
  console.log(user);


  console.log(req.body);
  return res.status(200).end();
}

export default withHandler("POST", handler);
