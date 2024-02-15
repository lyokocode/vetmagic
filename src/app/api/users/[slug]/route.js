import { prisma } from "@/utils/db";
import slugify from 'slugify';
import { NextResponse } from "next/server";


export const GET = async (req, { params }) => {
    try {
        // URL'den slug değerini alın
        const { slug } = params;

        // Veritabanında slug'a göre User'ı bulun
        const user = await prisma.user.findUnique({
            where: {
                slug
            },
            include: {
                blogs: true // Kullanıcıya bağlı tüm blogları da alın
            }
        });
        // User bulunamazsa 404 Not Found döndürün
        if (!user) {
            return new NextResponse(
                JSON.stringify({ error: 'User not found' }),
                { status: 404 }
            );
        }

        // User bulunduysa 200 OK yanıtı ve user'ı döndürün
        return new NextResponse(
            JSON.stringify(user),
            { status: 200 }
        );

    } catch (error) {
        // Hata durumunda uygun yanıtı döndürün
        return new NextResponse(
            JSON.stringify(`There is an error while getting the user: ${error}`),
            { status: 500 }
        );
    }
}

export const DELETE = async (req, { params }) => {
    try {
        // URL'den slug değerini alın
        const { slug } = params;

        // Veritabanında slug'a göre user'ı bulun
        const user = await prisma.user.findUnique({
            where: {
                slug
            }
        });

        // User bulunamazsa 404 Not Found döndürün
        if (!user) {
            return new NextResponse(
                JSON.stringify({ error: 'User not found' }),
                { status: 404 }
            );
        }

        // User'ı silin
        await prisma.user.delete({
            where: {
                slug
            }
        });

        // Başarılı bir şekilde silindiğine dair 204 No Content yanıtı döndürün
        return new NextResponse(
            JSON.stringify({ message: 'User has been deleted' }),
            { status: 204 }
        );

    } catch (error) {
        // Hata durumunda uygun yanıtı döndürün
        return new NextResponse(
            JSON.stringify(`There is an error while deleting the user: ${error}`),
            { status: 500 }
        );
    }
}

export const PUT = async (req, { params }) => {
    try {
        const { slug } = params;
        // Put isteğinden gelen verileri alın
        const { fullName, description, image } = await req.json();
        const newSlug = slugify(fullName, { lower: true });

        // Veritabanında slug'a göre User bulun
        const user = await prisma.user.findUnique({
            where: {
                slug
            }
        });

        // User bulunamazsa 404 Not Found döndürün
        if (!user) {
            return new NextResponse(
                JSON.stringify({ error: 'User not found' }),
                { status: 404 }
            );
        }

        // User varsa, güncelleme yapın
        const updatedUser = await prisma.user.update({
            where: {
                slug
            },
            data: {
                fullName,
                description,
                image,
                slug: newSlug // Yeni slug'i kullan
            }
        });

        // Başarılı bir şekilde güncellendiğine dair 200 OK yanıtı döndürün
        return new NextResponse(
            JSON.stringify(updatedUser),
            { status: 200 }
        );

    } catch (error) {
        // Hata durumunda uygun yanıtı döndürün
        return new NextResponse(
            JSON.stringify({ error: `There is an error while updating the user: ${error}` }),
            { status: 500 }
        );
    }
}