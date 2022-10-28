import { NextPage } from "next";
import Layout from "@components/layout";
import Message from "@components/message";

const StreamDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="py-10 px-4 space-y-4">
        <div className="w-full bg-slate-300 rounded-md shadow-sm aspect-video" />
        <div className="mt-5">
          <h1 className="text-3xl font-bold text-gray-900">Galaxy S50</h1>
          <span className="text-2xl block mt-3 text-gray-900">$140</span>
          <p className=" my-6 text-gray-700">
            My money&apos;s in that office, right? If she start giving me some
            bullshit about it ain&apos;t there, and we got to go someplace else
            and get it, I&apos;m gonna shoot you in the head then and there.
            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
            my goddamn money is. She gonna tell me too. Hey, look at me when
            I&apos;m talking to you, motherfucker. You listen: we go in there,
            and that ni**a Winston or anybody else is in there, you the first
            motherfucker to get shot. You understand?
          </p>
        </div>

        {/* Chats Contents*/}
        <h2 className="text-2xl font-bold text-gray-900">Live Chat</h2>

        <div className="py-10 pb-16 h-[50vh] px-4 overflow-y-scroll scrollbar-hide space-y-4">
          <Message message="Hello?" />
          <Message message="Hi" reversed />
          <Message message="How much is it?" />
          <Message message="I have much money :)" />
          <Message message="It's $900,000" reversed />
          <Message message="Fuck" />
          <Message message="r u kidding me?" />
          <Message message="What?" reversed />
          <Message message="I give you a last chance "  reversed/>
          <Message message="Just a second" />
        </div>

        {/* Chat Input */}


        <div className="fixed w-full mx-auto max-w-md bottom-2 inset-x-0">
          <div className="flex items-center relative">
            <input
              type="text"
              className="shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none pr-12 focus:border-orange-500"
            />
            <div className="absolute pr-1.5 right-0 inset-y-0 py-1.5 flex">
              <span className="flex focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 items-center bg-orange-500 rounded-full px-3 hover:bg-orange-600 cursor-pointer text-sm text-white">
                &rarr;
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StreamDetail;
