import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";
import slugify from 'slugify';
import bcrypt from "bcryptjs"
import { storageClient } from "@/utils/storage";
import { Buffer } from 'buffer/';


export const POST = async (req) => {
    // POST isteğinden gelen verileri alın
    const formData = await req.formData();
    const fullName = formData.get("fullName");
    const file = formData.get("file");
    const description = formData.get("description");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
        // Slug oluştur
        const slug = slugify(fullName, { lower: true });

        // şifreyi hash'le
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        if (!file) {
            return new NextResponse(
                JSON.stringify({ error: "File is required." }),
                { status: 400 }
            );
        }
        // Avatar dosyasını depolama hizmetine yükleyin
        const buffer = Buffer.from(await file.arrayBuffer());


        const { data: imageData, error: imageError } = await storageClient
            .from('vetmagic/test')
            .upload(`${Date.now()}.png`, buffer, { // Burada buffer.data değil, sadece buffer
                contentType: file.type,
                cacheControl: '3600',
            });

        if (imageError) {
            console.error("Error uploading image:", imageError);
            return new NextResponse(
                JSON.stringify({ error: `Error uploading image: ${JSON.stringify(imageError)}` }), // Hatanın içeriğini JSON dizisi içinde döndür
                { status: 400 }
            );
        }

        const avatarUrl = imageData.path
        // Veritabanında yeni bir User oluşturun
        const register = await prisma.user.create({
            data: {
                fullName,
                description,
                avatar: avatarUrl, // Avatar URL'sini kullanıcı veritabanına kaydet
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
