import { NextPage } from "next";

const Chats: NextPage = () => {
  return (
    <div className="py-10 divide-y">
      {/* Profile */}

      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="flex px-4 cursor-pointer py-3 items-center space-x-3"
        >
          <div className="w-12 h-12 rounded-full bg-slate-300" />
          <div>
            <p className="text-sm  text-gray-700">Steve Jebs</p>
            <p className="text-xs font-sm text-gray-500 ">
              What r u doing?
              <span className="bg-orange-500 rounded-full text-sm text-white px-2 ml-1">
                2
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
