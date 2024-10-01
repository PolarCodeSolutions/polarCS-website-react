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
  const [posts, setPosts] = useState<FacebookPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Gjør kall til Cloudflare Function, som håndterer Facebook API-kallet
        const response = await fetch('/fb-posts');
        const data = await response.json();
        if (data) {
          setPosts(data);
        }
      } catch (error) {
        console.error("Error fetching Facebook posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-100 dark:bg-dark">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-12">
          Fra Facebook
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div
                key={post.id}
                className="bg-white dark:bg-dark rounded-lg shadow-lg overflow-hidden transition-colors duration-300"
              >
                {post.full_picture && (
                  <img
                    src={post.full_picture}
                    alt="Post Image"
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {new Date(post.created_time).toLocaleDateString()}
                  </p>
                  {post.message && (
                    <p className="text-gray-800 dark:text-gray-300 text-base leading-relaxed mb-4">
                      {post.message.length > 100
                        ? post.message.substring(0, 100) + "..."
                        : post.message}
                    </p>
                  )}
                  <a
                    href={post.permalink_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-yellow-400 hover:text-blue-800 dark:hover:text-yellow-500 text-sm font-semibold"
                  >
                    Les mer på Facebook →
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 dark:text-gray-400 text-center col-span-3">
              Laster inn innlegg...
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
