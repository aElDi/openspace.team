import { Redis } from "ioredis";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
const client = new Redis(process.env.REDIS_URL);
const emailRegex =
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**@param {import("next/server").NextRequest} req  */
export async function GET(req) {
	if (!req.nextUrl.searchParams.has("email"))
		return new NextResponse("Failed", { status: 403 });
	const email = req.nextUrl.searchParams.get("email");
	if (!emailRegex.test(email))
		return new NextResponse("It is not email", { status: 403 });
	await client.sadd("emails", email);
	return new NextResponse("OK", { status: 200 });
}
