import { createClient } from "@/lib/supabase/server";

export async function GET() {
    const supabase = await createClient();
    const result = (await supabase.from("barang").select("*")).data;

    return Response.json({products: result});
}
