import Layout from "@components/layout";
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";

interface Post {
  title: string;
  date: string;
  category: string;
  slug : string;
}

export const Blog: NextPage<{ posts: Post[] }> = function ({ posts }) {
  return (
    <Layout seoTitle="Blog" title="Blog" hasTabBar>
      <h1 className="font-semibold text-lg text-center mt-5 mb-10">
        Latest Posts :{" "}
      </h1>

      {posts.map((post, i) => (
        <div key={i} className="mb-5">
          <Link href={`/blog/${post.slug}`}>
            <a>
              <span className="text-lg text-red-500">{post.title}</span>
              <div>
                <span>
                  {post.date} / {post.category}
                </span>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </Layout>
  );
};

export const getStaticProps :GetStaticProps = async ()=> {
  const blogPosts = readdirSync("./posts").map((file) => {
    const content = readFileSync(`./posts/${file}`, "utf-8");
    const [slug, _]= file.split(".");
    return {...matter(content).data , slug};
  });
  console.log(blogPosts);

  return {
    props: {
      posts: blogPosts,
    },
  };
}

export default Blog;
