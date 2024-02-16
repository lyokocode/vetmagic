import { prisma } from '@/utils/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from "next/server";


export const POST = async (req) => {
    const { email, password } = await req.json();

    try {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (!user) {
            return new NextResponse(
                JSON.stringify({ error: 'User not found' }),
                { status: 404 }
            );
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return new NextResponse(
                JSON.stringify({ error: 'Wrong password or username' }),
                { status: 400 }
            );
        }

        const token = jwt.sign(
            {
                id: user.id,
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '6h' }
        );
        const { password: _, ...info } = user; // Password değişkenini kullanmadığımız için _ kullanıyoruz

        // Set the cookie and send response
        return new NextResponse(
            JSON.stringify(info),
            {
                status: 200,
                headers: {
                    'Set-Cookie': `access_token=${token}; HttpOnly=true; Path=/; Max-Age=${6 * 60 * 60}; SameSite=Strict`,
                    'Content-Type': 'application/json',
                },
            }
        );
    } catch (error) {
        return new NextResponse(
            JSON.stringify({ error: `There is an error while logging in: ${error}` }),
            { status: 500 }
        );
    }
};
