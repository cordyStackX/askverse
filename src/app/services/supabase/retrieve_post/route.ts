import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib";


export async function POST(request: Request) {

  try{
    const { search = "", acc_address = "", filter = false, page = 1, limit = 3 } = await request.json().catch(() => ({}));
    const searchTerm = String(search)
    .replaceAll(",", " ")
    .replaceAll("(", " ")
    .replaceAll(")", " ")
    .trim();
    const MAX_PAGE_SIZE = 50;
    const pageSize = Math.min(MAX_PAGE_SIZE, Math.max(1, Number(limit) || 3));
    const pageNumber = Math.max(1, Number(page) || 1);
    const start = (pageNumber - 1) * pageSize;
    const end = start + pageSize - 1;

    let feedsQuery = supabaseServer
    .from("feeds")
    .select("*")
    .order("time", { ascending: false })
    .range(start, end);

    if (searchTerm && searchTerm.length >= 3) {
      const pattern = `%${searchTerm.replaceAll("%", "\\%").replaceAll("_", "\\_")}%`;

      feedsQuery = feedsQuery.or(
        `question.ilike.${pattern},body.ilike.${pattern},author.ilike.${pattern},acc_address.ilike.${pattern}`
      );
    }

    if (filter && acc_address) {
      feedsQuery = feedsQuery.eq("acc_address", acc_address);
    }

    const { data, error } = await feedsQuery;

    const feeds = Array.isArray(data) ? data : [];

    // Fetch answers only for the feeds returned on this page (avoid selecting whole table)
    let answersList: any[] = [];
    let Err_answersList: any = null;

    if (feeds.length > 0) {
      const feedIds = feeds.map((f: any) => f.id).filter(Boolean);
      if (feedIds.length > 0) {
        const res = await supabaseServer
          .from("answersList")
          .select("*")
          .in("questions_id", feedIds);
        answersList = res.data || [];
        Err_answersList = res.error;
      }
    }

    if (error || Err_answersList) {
      console.error(error || Err_answersList);
      return NextResponse.json({ success: false, error: "Something Went Wrong" }, { status: 408 });
    }

    return NextResponse.json({ success: true, message: [feeds, answersList] }, { status: 200 });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
  
}
