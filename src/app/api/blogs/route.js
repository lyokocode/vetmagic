import { prisma } from "@/utils/db";
import slugify from 'slugify';
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const blogs = await prisma.blog.findMany()
        return new NextResponse(
            JSON.stringify(blogs),
            { status: 200 }
        )

    } catch (error) {
        return new NextResponse(JSON.stringify(`there is a error from Get All Blogs:${error}`), { status: 500 })
    }
}

export const POST = async (req) => {
    try {
        // POST isteğinden gelen verileri alın
        const { title, description, image, catSlug, userSlug } = await req.json();

        const slug = slugify(title, { lower: true });

        // Veritabanında yeni bir blog oluşturun
        const newBlog = await prisma.blog.create({
            data: {
                title,
                description,
                image,
                slug,
                catSlug,
                userSlug
            },
        });

        // Başarılı yanıt döndürün
        return new NextResponse(
            JSON.stringify(newBlog),
            { status: 201 } // Yeni kaynak oluşturulduğu için 201 Created durum kodunu dönün
        );

    } catch (error) {
        // Hata durumunda uygun yanıtı döndürün
        return new NextResponse(
            JSON.stringify({ error: `There is an error while creating the blog: ${error}` }),
            { status: 500 }
        );
    }
}