import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";



export const GET = async () => {
    try {
        const users = await prisma.user.findMany()
        return new NextResponse(
            JSON.stringify(users),
            { status: 200 }
        )

    } catch (error) {
        return new NextResponse(JSON.stringify(`there is a error from Get All Users:${error}`), { status: 500 })
    }
}



