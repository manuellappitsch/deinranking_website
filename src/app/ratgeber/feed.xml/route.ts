import { blogPosts } from "@/lib/blog-data";

const BASE_URL = "https://dein-ranking.at";

function parseGermanDate(dateStr: string): string {
  const months: Record<string, string> = {
    "Januar": "01", "Februar": "02", "März": "03", "April": "04",
    "Mai": "05", "Juni": "06", "Juli": "07", "August": "08",
    "September": "09", "Oktober": "10", "November": "11", "Dezember": "12",
    "Jän": "01", "Feb": "02", "Mär": "03", "Apr": "04",
    "Jun": "06", "Jul": "07", "Aug": "08", "Sep": "09",
    "Okt": "10", "Nov": "11", "Dez": "12",
  };
  const parts = dateStr.replace(".", "").split(" ").filter(Boolean);
  if (parts.length >= 3) {
    const day = parts[0].padStart(2, "0");
    const month = months[parts[1]] ?? "01";
    const year = parts[2];
    return new Date(`${year}-${month}-${day}`).toUTCString();
  }
  return new Date().toUTCString();
}

export async function GET() {
  const items = Object.entries(blogPosts)
    .map(([slug, post]) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${BASE_URL}/ratgeber/${slug}</link>
      <guid isPermaLink="true">${BASE_URL}/ratgeber/${slug}</guid>
      <description><![CDATA[${post.subtitle ?? post.title}]]></description>
      <pubDate>${parseGermanDate(post.date)}</pubDate>
      <category>${post.category}</category>
      <author>${post.author}</author>
    </item>`)
    .join("\n");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>DeinRanking Ratgeber</title>
    <link>${BASE_URL}/ratgeber</link>
    <description>KI-Ratgeber: Praxis-Tipps für Unternehmen von der KI-Agentur DeinRanking aus Graz.</description>
    <language>de-AT</language>
    <atom:link href="${BASE_URL}/ratgeber/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(feed.trim(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
