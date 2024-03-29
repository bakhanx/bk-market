import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "@libs/server/withSession";
import { userInfo } from "os";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id },
    session: { user },
    body: {answer}
  } = req;

  //   API Handler

  const newAnswer = await client.answer.create({
    data: {
      user: {
        connect: {
          id: user?.id,
        },
        
      },
      post: {
        connect: {
          id: Number(id),
        },
      },
      answer
    },
  });
  console.log(newAnswer);

  res.json({
    ok: true,
    answer:newAnswer
  });
}

export default withApiSession(
  withHandler({
    methods: ["POST"],
    handler,
  })
);
