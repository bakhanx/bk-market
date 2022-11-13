import Layout from "@components/layout";
import { readdirSync } from "fs";
import matter from "gray-matter";
import { GetStaticProps, NextPage } from "next";
import remarkHtml from "remark-html";
import remarkParse from "remark-parse/lib";
import { unified } from "unified";

const Post: NextPage<{ post: string, data:any }> = ({ post,data }) => {
  return (
    <Layout seoTitle={data?.title} title={`${data?.title} | Blog`} hasTabBar canGoBack>
      <div
        className="blog-post-content ml-10 mt-10 space-y-2"
        dangerouslySetInnerHTML={{ __html: post }}
      ></div>
    </Layout>
  );
};

export function getStaticPaths() {
  const files = readdirSync("./posts").map((file) => {
    const [name, _] = file.split(".");
    return {
      params: {
        slug: name,
      },
    };
  });
  return {
    paths: files,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { data,content  } = matter.read(`./posts/${context.params?.slug}.md`);
  const { value } = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content);
  console.log(value);
  return {
    props: {
      post: value,
      data
    },
  };
};

export default Post;
