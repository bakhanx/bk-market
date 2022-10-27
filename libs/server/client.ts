import { PrismaClient } from "@prisma/client";


const client =  new PrismaClient();

client.user.create({
    data:{
        name : "hong",
        email : "hong123@naver.com"
    }
})


export default client;