import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";


export async function POST(request: Request) {

  try{
    const { search = "" } = await request.json().catch(() => ({}));
    const searchTerm = String(search)
    .replaceAll(",", " ")
    .replaceAll("(", " ")
    .replaceAll(")", " ")
    .trim();

    let feedsQuery = supabaseServer
    .from("feeds")
    .select("*");

    if (searchTerm) {
      const pattern = `%${searchTerm.replaceAll("%", "\\%").replaceAll("_", "\\_")}%`;

      feedsQuery = feedsQuery.or(
        `question.ilike.${pattern},body.ilike.${pattern},author.ilike.${pattern},acc_address.ilike.${pattern}`
      );
    }

    const { data, error } = await feedsQuery;

    const { data: answersList, error: Err_answersList } = await supabaseServer
    .from("answersList")
    .select("*");

    if (error || Err_answersList) {
      console.error(error || Err_answersList);
      return NextResponse.json({ success: false, error: "Something Went Wrong" }, { status: 408 });
    }

    return NextResponse.json({ succes: true, message: [data, answersList] }, { status: 200 });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
  
}
