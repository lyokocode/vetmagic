import { prisma } from "@/utils/db";
import slugify from 'slugify';
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


export const POST = async (req) => {
    try {
        // POST isteğinden gelen verileri alın
        const { fullName, image, description } = await req.json();

        // Slug oluştur
        const slug = slugify(fullName, { lower: true });
        // Veritabanında yeni bir User oluşturun
        const register = await prisma.user.create({
            data: {
                fullName,
                description,
                image,
                slug
            },
        });

        // Başarılı yanıt döndürün
        return new NextResponse(
            JSON.stringify(register),
            { status: 201 } // Yeni kaynak oluşturulduğu için 201 Created durum kodunu dönün
        );

    } catch (error) {
        // Hata durumunda uygun yanıtı döndürün
        return new NextResponse(
            JSON.stringify(`There is an error while creating the user: ${error}`),
            { status: 500 }
        );
    }
}

