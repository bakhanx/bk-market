import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const response  = await (
    await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/images/v2/direct_upload`,
      {
        method: "POST",
        headers: {
          // "Content-Type": "application/json", // Direct Creator Upload v1
          Authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
        },
      }
    )
  ).json();
  res.json({
    ok: true,
    ...response.result
  });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
