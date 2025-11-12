import { createClient } from "@/lib/supabase/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = await createClient();
  const query = await supabase.from("barang").select("*").eq("id", id);

  if (query.count === 0) {
    return new Response("Not Found", { status: 404 });
  }

  return Response.json(query.data?.[0]);
}
