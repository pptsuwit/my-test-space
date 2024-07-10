"use client";

import { ChangeEvent, useEffect, useState } from "react";

export default function Home() {
  const defaultMenu = [
    { name: "Client", path: "/client" },
    // { name: "Image#1", path: "/image1" },
    { name: "Login#1", path: "/login1" },
    { name: "SSR Test", path: "/ssr" },
    { name: "Video Full Screen", path: "/video_background" },
  ];

  const [menu, setMenu] = useState(defaultMenu);
  const [tBody, setTBody] = useState<JSX.Element[]>();
  useEffect(() => {
    const tableBody = menu.map(({ name, path }, index) => {
      return (
        <tr className="odd:bg-white even:bg-gray-200 border-b" key={index}>
          <td className="px-6 py-4">
            <a href={path} className="font-medium whitespace-nowrap">
              {name}
            </a>
          </td>
        </tr>
      );
    });

    setTBody(tableBody);
  }, [menu]);

  const onChangeKeyWord = (e: ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    const newMenu = defaultMenu.filter((w) =>
      w.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
    );
    setMenu(newMenu);
  };
  return (
    <div className="p-8">
      <div className="md:w-full lg:w-2/4 lg:max-w-[600px] mx-auto">
        <div className="flex mb-5 ">
          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only "
          >
            Search
          </label>
          <div className="relative w-full">
            <input
              type="search"
              id="search"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-zinc-50 rounded-lg border-none shadow-md border-zinc-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 focus:outline-none"
              placeholder="Search "
              onChange={onChangeKeyWord}
            />
            <button
              type="submit"
              className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md bg-zinc-50 rounded-md">
        <table className="w-full text-md rtl:text-right text-gray-500 text-center">
          <thead className="text-lg text-gray-700 uppercase bg-gray-400 ">
            <tr>
              <th scope="col">Menu</th>
              {/* <th scope="col">To</th> */}
            </tr>
          </thead>
          <tbody>{tBody}</tbody>
        </table>
      </div>
    </div>
  );
}
