
export default function myTest(){
    return(
    <div className="bg-slate-400 py-20 px-10 xl:px-20  grid gap-10 lg:grid-cols-2 xl:grid-cols-3 min-h-screen xl:place-content-center">
      {/* Select Item */}
      <div className="bg-white p-7 rounded-3xl shadow-xl flex flex-col justify-between">
        <span className="font-semibold text-3xl">Select Item</span>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex justify-between my-1 odd:bg-blue-50 even:bg-yellow-50"
            >
              <span className="text-gray-500">Grey Chair {i}</span>
              <span className="font-semibold">${19 + i * 2}</span>
            </div>
          ))}
        </ul>

        <div className="flex justify-between mt-2 pt-2 border-t-4 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$9999</span>
        </div>

        <button className="mt-5 bg-blue-500 text-white p-3 rounded-xl w-3/4 hover:bg-teal-500 active:bg-teal-700 mx-auto block">
          Checkout
        </button>
      </div>

      {/* Profile */}
      <div className="bg-white overflow-hidden rounded-3xl shadow-xl group">
        <div className=" portrait:bg-indigo-500 landscape:bg-teal-500 p-6 pb-14 xl:pb-40">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 relative -top-5 bg-white">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-semibold">340</span>
            </div>
            <div className="h-24 w-24 bg-red-400 rounded-full  group-hover:bg-orange-300" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-semibold">$2,310</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-semibold">Tony Molly</span>
            <span className="text-sm text-gray-500">Seoul, KOREA</span>
          </div>
        </div>
      </div>

      {/* Detail of Item */}
      <div className="bg-white p-7 rounded-3xl shadow-xl lg:col-span-2 xl:col-span-1">
        <div className="flex mb-5 justify-between items-center">
          <span className="text-2xl">⬅</span>
          <div className="space-x-3">
            <span>⭐4.9</span>
            <span className="shadow-xl p-2 rounded-md">💗</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-semibold mb-1.5 text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition"></button>
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition"></button>
              <button className="w-5 h-5 rounded-full bg-lime-500 focus:ring-2 ring-offset-2 ring-lime-500 transition"></button>
            </div>
            <div className="flex items-center space-x-5">
              <button className=" rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 font-semibold text-xl text-gray-500">
                -
              </button>
              <span className="font-semibold">1</span>
              <button className=" rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 font-semibold text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-2xl">$450</span>
            <button className="bg-blue-500 py-2 px-8 text-sm text-center text-white rounded-lg">
              Add to cart
            </button>
          </div>
        </div>
      </div>

      {/* Select Item -Dark Mode */}
      <div className="bg-white p-7 rounded-3xl shadow-xl flex flex-col justify-between dark:bg-black ">
        <span className="font-semibold text-3xl dark:text-white">
          Select Item -Dark Mode
        </span>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex justify-between my-1 odd:bg-blue-50 even:bg-yellow-50 dark:odd:bg-gray-700 dark:even:bg-gray-800"
            >
              <span className="text-gray-500 dark:text-gray-200">
                Grey Chair {i}
              </span>
              <span className="font-semibold dark:text-gray-200">
                ${19 + i * 2}
              </span>
            </div>
          ))}
        </ul>

        <div className="flex justify-between mt-2 pt-2 border-t-4 border-dashed dark:text-white">
          <span>Total</span>
          <span className="font-semibold">$9999</span>
        </div>

        <button className="mt-5 bg-blue-500 dark:bg-black dark:border dark:border-white text-white p-3 rounded-xl w-3/4 hover:bg-teal-500 dark:hover:bg-white dark:hover:text-black active:bg-teal-700 mx-auto block">
          Checkout
        </button>
      </div>

      {/* form, Login*/}
      <div>
        <form className="p-5 flex flex-col space-y-2 bg-white rounded-3xl focus-within:bg-green-200">
          <input
            type="text"
            placeholder="Input Id"
            required
            className="border-2 placeholder-shown:bg-teal-200 valid:border-0 invalid:border-red-500"
          />
          <input required type="text" className="required: bg-orange-200" />
          <input disabled type="text" className="disabled:opacity-0" />
        </form>
        <div className="py-5"></div>
        <form className="space-y-2 flex flex-col p-5 bg-slate-200 rounded-3xl">
          <input
            type="text"
            required
            placeholder="Username"
            className="border p-1 border-gray-400 rounded-md peer"
          />
          <span className="text-red-500 peer-valid:hidden">
            This input is invalid.
          </span>
          <span className="text-sky-500 peer-invalid:hidden">Welcome!</span>
          <input type="submit" value="Login" className="font-bold " />
        </form>
      </div>

      {/* Summary, List, File,  */}
      <div className="flex flex-col space-y-2 p-5 bg-white rounded-3xl">
        <details className="select-none open:text-white open:bg-indigo-400">
          <summary className="hover:cursor-pointer">Helo</summary>
          <span className="">My Name is Good</span>
        </details>

        <ul className="list-decimal marker:text-teal-500 p-5">
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <input
          type="file"
          className="file:border file:border-purple-100 file:rounded-xl file:px-5 file:text-white file:cursor-pointer file:hover:bg-white file:hover:text-purple-400 file:hover:border file:hover:border-purple-400 file:bg-purple-400 pointer-events-none file:pointer-events-auto transition-colors"
        />

        <p className="first-letter:text-6xl first-letter:hover:text-purple-400 first-line:text-cyan-600 first-letter:cursor-pointer">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
          a hic temporibus porro ipsam quasi deleniti. Quae hic dolorem
          assumenda perspiciatis fugit iste harum aperiam! Numquam ab, officiis
          quisquam expedita ipsa in velit aliquid, sequi, repellendus aut non
          laborum nihil incidunt. Dolores facilis labore fugit, dolor debitis
          nisi est delectus minima! Molestias voluptatem nam maiores eius
          tempora laboriosam cum et commodi. Qui repellendus illo blanditiis
          enim perferendis totam, consequatur id modi in nostrum eveniet
          commodi, minus labore nihil sint reprehenderit! Aliquam eaque officiis
          est. Deleniti iste similique voluptate quidem. Quos, perspiciatis odio
          aliquid mollitia blanditiis corporis suscipit aspernatur quibusdam
          rerum.
        </p>
      </div>

      {/* Custom className - JIT (Just In Time) */}
      <div className="flex flex-col space-y-2 p-5 bg-white rounded-3xl">
        <details className="select-none open:text-white open:bg-indigo-400">
          <summary className="hover:cursor-pointer first-letter:text-[32px]">
            Custom name
          </summary>
          <span className="">My Name is Good</span>
        </details>

        <p className="first-line:text-[#44e185] ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
          a hic temporibus porro ipsam quasi deleniti. Quae hic dolorem
          assumenda perspiciatis fugit iste harum aperiam! Numquam ab, officiis
          quisquam expedita ipsa in velit aliquid, sequi, repellendus aut non
          laborum nihil incidunt. Dolores facilis labore fugit, dolor debitis
          nisi est delectus minima! Molestias voluptatem nam maiores eius
          tempora laboriosam cum et commodi. Qui repellendus illo blanditiis
          enim perferendis totam, consequatur id modi in nostrum eveniet
          commodi, minus labore nihil sint reprehenderit! Aliquam eaque officiis
          est. Deleniti iste similique voluptate quidem. Quos, perspiciatis odio
          aliquid mollitia blanditiis corporis suscipit aspernatur quibusdam
          rerum.
        </p>
      </div>
    </div>
  );
}