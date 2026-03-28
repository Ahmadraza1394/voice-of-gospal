import BlogsHero from "@/components/blogs/BlogsHero";
import BlogPosts from "@/components/blogs/BlogPosts";

export const metadata = {
  title: "Blogs",
  description:
    "Read insights and inspiration from Voice of the Gospel Tabernacle.",
};

export default function BlogsPage() {
  return (
    <>
      <BlogsHero />
      <BlogPosts />
    </>
  );
}
