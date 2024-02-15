import { prisma } from "@/utils/db";
import slugify from 'slugify';
import { NextResponse } from "next/server";


export const GET = async (req, { params }) => {
    try {
        // URL'den slug değerini alın
        const { slug } = params;

        // Veritabanında slug'a göre blogları bulun
        const blog = await prisma.blog.findUnique({
            where: {
                slug
            }
        });

        // blog bulunamazsa 404 Not Found döndürün
        if (!blog) {
            return new NextResponse(
                JSON.stringify({ error: 'Blog not found' }),
                { status: 404 }
            );
        }

        // blog bulunduysa 200 OK yanıtı ve bloğu döndürün
        return new NextResponse(
            JSON.stringify(blog),
            { status: 200 }
        );

    } catch (error) {
        // Hata durumunda uygun yanıtı döndürün
        return new NextResponse(
            JSON.stringify(`There is an error while getting the blog: ${error}`),
            { status: 500 }
        );
    }
}

export const DELETE = async (req, { params }) => {
    try {
        // URL'den slug değerini alın
        const { slug } = params;

        // Veritabanında slug'a göre bluğu bulun
        const blog = await prisma.blog.findUnique({
            where: {
                slug
            }
        });

        // blog bulunamazsa 404 Not Found döndürün
        if (!blog) {
            return new NextResponse(
                JSON.stringify({ error: 'blog not found' }),
                { status: 404 }
            );
        }

        // bloğu silin
        await prisma.blog.delete({
            where: {
                slug
            }
        });

        // Başarılı bir şekilde silindiğine dair 204 No Content yanıtı döndürün
        return new NextResponse(
            JSON.stringify({ message: 'Blog has been deleted' }),
            { status: 204 }
        );

    } catch (error) {
        // Hata durumunda uygun yanıtı döndürün
        return new NextResponse(
            JSON.stringify(`There is an error while deleting the blog: ${error}`),
            { status: 500 }
        );
    }
}

export const PUT = async (req, { params }) => {
    try {
        const { slug } = params;
        // Put isteğinden gelen verileri alın
        const { title, description, image, catSlug, userSlug } = await req.json();

        const newSlug = slugify(title, { lower: true });

        // Veritabanında slug'a göre blogu bulun
        const blog = await prisma.blog.findUnique({
            where: {
                slug
            }
        });

        // blog bulunamazsa 404 Not Found döndürün
        if (!blog) {
            return new NextResponse(
                JSON.stringify({ error: 'Blog not found' }),
                { status: 404 }
            );
        }

        // blog varsa, güncelleme yapın
        const updatedBlog = await prisma.blog.update({
            where: {
                slug
            },
            data: {
                title,
                description,
                image,
                catSlug,
                userSlug,
                slug: newSlug // Yeni slug'i kullan
            }
        });

        // Başarılı bir şekilde güncellendiğine dair 200 OK yanıtı döndürün
        return new NextResponse(
            JSON.stringify(updatedBlog),
            { status: 200 }
        );

    } catch (error) {
        // Hata durumunda uygun yanıtı döndürün
        return new NextResponse(
            JSON.stringify({ error: `There is an error while updating the blog: ${error}` }),
            { status: 500 }
        );
    }
}