import sqlite3 from "sqlite3";
import { open } from "sqlite";

let db = null;

export async function GET(request, { params }) {
    const { id } = params;

    if (!db) {
        db = await open({
            filename: "./blog.db",
            driver: sqlite3.Database,
        });
    }

    const result = await db.all("SELECT * FROM blogs WHERE id=?", [id]);

    return new Response(JSON.stringify(result), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
