import { NextPage } from "next";
import Link from "next/link";
import FloatingButton from "@components/floating-button";
import Layout from "@components/layout";

const Live: NextPage = () => {
  return (
    <Layout seoTitle="Streams" hasTabBar>
      <div className="py-10 px-4 divide-y-2 space-y-4">
        {[...Array(5)].map((_, i) => (
          <Link key={i} href={`streams/${i}`}>
            <div className="pt-4 px-4 block">
              <div className="w-full bg-slate-300 rounded-md shadow-sm aspect-video" />
              <h3 className="font-semibold text-gray-700 text-lg mt-2">
                Galaxy Z Flip {i}
              </h3>
            </div>
          </Link>
        ))}

        <FloatingButton href="/live/create">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Live;
