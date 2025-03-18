import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json("Obteniendo las peliculas")
}