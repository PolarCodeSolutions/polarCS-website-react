// Siste innlegg fra Facebook-siden vår.
// Hentes når nettsiden BYGGES (serverkomponent), ikke i besøkendes nettleser:
// - tilgangsnøkkelen havner aldri i JavaScript-koden som sendes ut
// - besøkende kontakter ikke Facebook, så IP-adressen deres sendes ikke til Meta
// Bildene fra Facebook vises derfor ikke (de måtte ha blitt lastet fra Facebooks servere).
// Nøkler: FACEBOOK_PAGE_ID og FACEBOOK_ACCESS_TOKEN i byggmiljøet (Cloudflare Pages).

interface FacebookPost {
  id: string;
  message?: string;
  created_time: string;
  permalink_url: string;
}

async function fetchPosts(): Promise<FacebookPost[]> {
  // De gamle NEXT_PUBLIC_-navnene godtas fortsatt, men leses bare her på byggeserveren.
  const pageId = process.env.FACEBOOK_PAGE_ID || process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID;
  const accessToken = process.env.FACEBOOK_ACCESS_TOKEN || process.env.NEXT_PUBLIC_FACEBOOK_ACCESS_TOKEN;
  if (!pageId || !accessToken) return [];
  try {
    const url = new URL(`https://graph.facebook.com/v19.0/${encodeURIComponent(pageId)}/posts`);
    url.searchParams.set("fields", "message,created_time,permalink_url");
    url.searchParams.set("limit", "3");
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
      cache: "force-cache",
    });
    if (!response.ok) return [];
    const data = await response.json();
    return Array.isArray(data?.data) ? data.data : [];
  } catch {
    return [];
  }
}

const AboutSectionThree = async () => {
  const posts = await fetchPosts();

  // Skjul hele seksjonen når det ikke finnes innlegg (f.eks. uten Facebook-nøkler)
  if (posts.length === 0) return null;

  return (
    <section className="bg-white py-16 dark:bg-night-900 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-[640px] text-center">
          <span className="mb-4 inline-block h-1 w-14 rounded-full bg-aurora-gradient" />
          <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">
            Fra Facebook
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-stroke-stroke bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-glow-soft dark:border-white/10 dark:bg-white/[0.03]"
            >
              <p className="mb-2 text-sm text-body-color dark:text-body-color-dark">
                {new Date(post.created_time).toLocaleDateString("nb-NO")}
              </p>
              {post.message && (
                <p className="mb-4 flex-1 text-base leading-relaxed text-black dark:text-body-color-dark">
                  {post.message.length > 220 ? post.message.substring(0, 220) + "…" : post.message}
                </p>
              )}
              <a
                href={post.permalink_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-primary transition hover:text-primary/80"
              >
                Se innlegg på Facebook →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
