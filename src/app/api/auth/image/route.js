import { NextResponse } from "next/server";
import { Buffer } from 'buffer/';
import { storageClient } from "@/utils/storage";

export const POST = async (req) => {
    try {
        const formData = await req.formData();
        const file = formData.get("file");
        const title = formData.get("title");

        if (!file) {
            return new NextResponse(
                JSON.stringify({ error: "File is required." }),
                { status: 400 }
            );
        }

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

        return new NextResponse(
            JSON.stringify("Successful"),
            { status: 201 }
        );
    } catch (error) {
        console.error("An error occurred while processing the image:", error);
        return new NextResponse(
            JSON.stringify(`An error occurred while processing the image: ${error}`),
            { status: 500 }
        );
    }
};
