import { prisma } from "@/utils/db";
import slugify from 'slugify';
import { NextResponse } from "next/server";


export const GET = async (req, { params }) => {
    try {
        // URL'den slug değerini alın
        const { slug } = params;

        // Veritabanında slug'a göre kategoriyi bulun
        const category = await prisma.category.findUnique({
            where: {
                slug
            }
        });

        // Kategori bulunamazsa 404 Not Found döndürün
        if (!category) {
            return new NextResponse(
                JSON.stringify({ error: 'Category not found' }),
                { status: 404 }
            );
        }

        // Kategori bulunduysa 200 OK yanıtı ve kategoriyi döndürün
        return new NextResponse(
            JSON.stringify(category),
            { status: 200 }
        );

    } catch (error) {
        // Hata durumunda uygun yanıtı döndürün
        return new NextResponse(
            JSON.stringify(`There is an error while getting the category: ${error}`),
            { status: 500 }
        );
    }
}

export const DELETE = async (req, { params }) => {
    try {
        // URL'den slug değerini alın
        const { slug } = params;

        // Veritabanında slug'a göre kategoriyi bulun
        const category = await prisma.category.findUnique({
            where: {
                slug
            }
        });

        // Kategori bulunamazsa 404 Not Found döndürün
        if (!category) {
            return new NextResponse(
                JSON.stringify({ error: 'Category not found' }),
                { status: 404 }
            );
        }

        // Kategoriyi silin
        await prisma.category.delete({
            where: {
                slug
            }
        });

        // Başarılı bir şekilde silindiğine dair 204 No Content yanıtı döndürün
        return new NextResponse(
            JSON.stringify({ message: 'Category has been deleted' }),
            { status: 204 }
        );
    } catch (error) {
        // Hata durumunda uygun yanıtı döndürün
        return new NextResponse(
            JSON.stringify(`There is an error while deleting the category: ${error}`),
            { status: 500 }
        );
    }
}

export const PUT = async (req, { params }) => {
    try {
        const { slug } = params;
        // Put isteğinden gelen verileri alın
        const { title, description, image, icon } = await req.json();
        const newSlug = slugify(title, { lower: true });

        // Veritabanında slug'a göre kategoriyi bulun
        const category = await prisma.category.findUnique({
            where: {
                slug
            }
        });

        // Kategori bulunamazsa 404 Not Found döndürün
        if (!category) {
            return new NextResponse(
                JSON.stringify({ error: 'Category not found' }),
                { status: 404 }
            );
        }

        // Kategori varsa, güncelleme yapın
        const updatedCategory = await prisma.category.update({
            where: {
                slug
            },
            data: {
                title,
                description,
                image,
                icon,
                slug: newSlug // Yeni slug'i kullan
            }
        });

        // Başarılı bir şekilde güncellendiğine dair 200 OK yanıtı döndürün
        return new NextResponse(
            JSON.stringify(updatedCategory),
            { status: 200 }
        );

    } catch (error) {
        // Hata durumunda uygun yanıtı döndürün
        return new NextResponse(
            JSON.stringify({ error: `There is an error while updating the category: ${error}` }),
            { status: 500 }
        );
    }
}