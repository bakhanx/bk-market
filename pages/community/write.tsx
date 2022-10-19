import { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <form className="px-4 py-10">
      <textarea
        placeholder="Ask a question"
        className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500 resize-none"
        rows={7}
      />
      <button className="mt-2 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none ">
        Submit
      </button>
    </form>
  );
};

export default Write;
