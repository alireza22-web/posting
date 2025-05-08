// export const metadata = {
//   title: "مقالات و پست",
//   description: "مقالات و پست | علیرضا خوندابی",

import { posts } from "@/data/posts";

// };
export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return {
    title: post.title + " | مقالات و پست",
    description: post.excerpt,
  };
}
export function getPostBySlug(slug) {
  return posts.find(post => post.slug === slug);
}

export default function RootLayout({ children }) {
  return (
    <div className="dark:bg-gray-800">
      {children}
    </div>
  );
}
