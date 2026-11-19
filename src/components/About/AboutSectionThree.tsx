"use client";
import React, { useEffect, useState } from "react";

interface FacebookPost {
  id: string;
  message?: string;
  created_time: string;
  full_picture?: string;
  permalink_url: string;
}

const AboutSectionThree: React.FC = () => {
  const [posts, setPosts] = useState<FacebookPost[] | undefined>(undefined);

  useEffect(() => {
    const pageId = process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID;
    const accessToken = process.env.NEXT_PUBLIC_FACEBOOK_ACCESS_TOKEN;

    // Uten konfigurerte Facebook-nøkler henter vi ingenting (unngår 400 og feil)
    if (!pageId || !accessToken) {
      setPosts([]);
      return;
    }

    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://graph.facebook.com/v12.0/${pageId}/posts?fields=message,created_time,full_picture,permalink_url&access_token=${accessToken}&limit=3`
        );
        const data = await response.json();
        setPosts(Array.isArray(data?.data) ? data.data : []);
      } catch (error) {
        setPosts([]);
      }
    };

    fetchPosts();
  }, []);

  // Skjul hele seksjonen når det ikke finnes innlegg (f.eks. uten Facebook-nøkler)
  if (!posts || posts.length === 0) return null;

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
              className="group overflow-hidden rounded-2xl border border-stroke-stroke bg-white transition duration-300 hover:-translate-y-1 hover:shadow-glow-soft dark:border-white/10 dark:bg-white/[0.03]"
            >
              {post.full_picture ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.full_picture}
                  alt="Facebook-innlegg"
                  className="h-48 w-full object-cover"
                />
              ) : (
                <div className="flex h-48 w-full items-center justify-center bg-night-700">
                  <span className="text-body-color-dark">Ingen bilde</span>
                </div>
              )}
              <div className="p-6">
                <p className="mb-2 text-sm text-body-color dark:text-body-color-dark">
                  {new Date(post.created_time).toLocaleDateString("no-NO")}
                </p>
                {post.message && (
                  <p className="mb-4 text-base leading-relaxed text-black dark:text-body-color-dark">
                    {post.message.length > 120
                      ? post.message.substring(0, 120) + "…"
                      : post.message}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
