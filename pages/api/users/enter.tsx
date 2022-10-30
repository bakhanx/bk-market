import twilio from "twilio";
import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import smtpTransport from "@libs/server/email";

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: phone } : { email } ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
  const payload = Math.floor(10000 + Math.random() * 90000) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });

  if (phone) {
    // const message = await twilioClient.messages.create({
    //   messagingServiceSid: process.env.TWILIO_MESSAGE_SID,
    //   to: process.env.MY_PHONE!,
    //   body: `Your login token is ${payload}.`,
    // });
    // console.log(message);
  }

  if (email) {
    // const mailOptions = {
    //   from: process.env.MAIL_ID,
    //   to: email,
    //   subject: "BK MARKET Authentication Email",
    //   text: `Authentication Code : ${payload}`,
    //   html : `<strong>Authentication Code : ${payload}</strong>`
    // };
    // const result = await smtpTransport.sendMail(
    //   mailOptions,
    //   (error, response) => {
    //     if (error) {
    //       console.log(error);
    //       return null;
    //     } else {
    //       console.log(response);
    //       return null;
    //     }
    //   }
    // );
    // smtpTransport.close();
    // console.log(result);
  }

  console.log(token);
  console.log(user);

  console.log(req.body);
  return res.json({
    ok: true,
  });
}

export default withHandler("POST", handler);
