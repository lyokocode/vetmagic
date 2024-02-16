import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";
import slugify from 'slugify';
import bcrypt from "bcryptjs"



export const POST = async (req) => {
    try {
        // POST isteğinden gelen verileri alın
        const { fullName, avatar, description, email, password } = await req.json();
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        // Slug oluştur
        const slug = slugify(fullName, { lower: true });
        // Veritabanında yeni bir User oluşturun
        const register = await prisma.user.create({
            data: {
                fullName,
                description,
                avatar,
                slug,
                email,
                password: hash
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
