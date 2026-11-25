import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
    const file = await readFile(
        path.join(process.cwd(), "public", "Ramy_Abdulazziz_Resume.pdf")
    );

    return new Response(file, {
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition":
                'inline; filename="Ramy_Abdulazziz_Resume.pdf"',
            "Cache-Control": "public, max-age=3600",
        },
    });
}
