
import { prisma } from "@/utils/db";
import slugify from 'slugify';
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const categories = await prisma.category.findMany()
        return new NextResponse(
            JSON.stringify(categories),
            { status: 200 }
        )

    } catch (error) {
        return new NextResponse(JSON.stringify(`there is a error from Get All Categories:${error}`), { status: 500 })
    }
}

export const POST = async (req) => {
    try {
        // POST isteğinden gelen verileri alın
        const { title, description, image, icon } = await req.json();

        // Slug oluştur
        const slug = slugify(title, { lower: true });
        // Veritabanında yeni bir kategori oluşturun
        const newCategory = await prisma.category.create({
            data: {
                title,
                description,
                image,
                icon,
                slug
            },
        });

        // Başarılı yanıt döndürün
        return new NextResponse(
            JSON.stringify(newCategory),
            { status: 201 } // Yeni kaynak oluşturulduğu için 201 Created durum kodunu dönün
        );

    } catch (error) {
        // Hata durumunda uygun yanıtı döndürün
        return new NextResponse(
            JSON.stringify(`There is an error while creating the category: ${error}`),
            { status: 500 }
        );
    }
}


