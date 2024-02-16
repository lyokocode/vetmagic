import { NextResponse } from "next/server";

export const POST = async (req) => {

    try {
        // Set the access token cookie to expire immediately by setting the Max-Age to 0
        const token = null; // Set the token to an empty string
        return new NextResponse(
            JSON.stringify({ message: 'Logged out successfully' }),
            {
                status: 200,
                headers: {
                    'Set-Cookie': `access_token=${token}; HttpOnly=true; Path=/; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Strict`,
                    'Content-Type': 'application/json',
                },
            }
        );
    } catch (error) {
        return new NextResponse(
            JSON.stringify({ error: `There is an error while logout: ${error}` }),
            { status: 500 }
        );
    }
}