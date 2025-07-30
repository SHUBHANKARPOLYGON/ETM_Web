import React, { useState } from "react";

import Link from "next/link";

import Layout from "../components/Layout";

const data = [
  {
    title: "ETM GO",
    styles: `px-4 py-1 font-semibold border rounded-l-lg `,
    borderStyle: "bg-[#C32703]",
    details: [
      {
        type: "Daily",
        price: "Rs-149/day",
        speed: "12Hrs./50km",
        border: false,
      },
      {
        type: "Monthly",
        price: "Rs-799/week",
        speed: "Monday - Saturday",
        border: true,
      },
      {
        type: "Yearly",
        price: "Rs-2999/month",
        speed: "30 days",
        border: false,
      },
    ],
  },
  {
    title: "ETM PRIME",
    styles: `px-4 py-1 border rounded-r-lg `,
    borderStyle: "bg-[#C32703]",
    details: [
      {
        type: "Daily",
        price: "Rs-199/day",
        speed: "24Hrs./90km",
        border: false,
      },
      {
        type: "Monthly",
        price: "Rs-1099/week",
        speed: "Monday - Saturday",
        border: true,
      },
      {
        type: "Yearly",
        price: "Rs-3999/month",
        speed: "30 days",
        border: false,
      },
    ],
  },
];

export default function Pricing() {
  const [Title, setTitle] = useState("ETM GO");
  const filterdata = data.filter((e) => e.title === Title);

  return (
    <Layout>
      <div className=" py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="max-w-xl flex flex-col items-center text-center mx-auto">
            <p className="text-red-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">
              Proud to introduce
            </p>

            <h1 className="text-white overflow-hidden flex-start text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12">
              Rent for 3 years and the bike is yours
            </h1>

            <div className="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
              <Link href="/rent">
                <span className="inline-block bg-red-500 hover:bg-red-600 active:bg-red-700 focus-visible:ring ring-red-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                  Rent Now
                </span>
              </Link>

              <Link href="#pricing">
                <span className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-red-300 text-black active:text-black text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                  Pricing
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section id="pricing" className="py-6  text-white">
        <div className="container p-4 mx-auto sm:p-10">
          <div className="mb-12 space-y-4 text-center">
            <h1 className="text-4xl font-semibold leading-tight">Pricing</h1>

            {/* <p className="px-4 sm:px-8 lg:px-24">
              Sunt suscipit eaque qui iure unde labore numquam iusto alias
              explicabo, pariatur ipsam, cupiditate aliquid modi?
            </p> */}
            <div>
              {data.map((n, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setTitle(n.title)}
                    className={`${n.styles} ${
                      Title === n.title ? n.borderStyle : ""
                    }`}
                  >
                    {n.title}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:grid-cols-3 lg:max-w-full">
            {filterdata[0].details.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    item.border === true
                      ? " rounded-lg bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
                      : " rounded-lg bg-white p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
                  }`}
                >
                  <div className=" min-h-[10rem] bg-black flex flex-col overflow-hidden  rounded-md">
                    <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 bg-black">
                      <p className="text-lg font-medium">{item.type}</p>
                      <p className="text-5xl font-bold">
                        <span className="text-xl text-coolGray-400">
                          {" "}
                          {item.price}
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center px-2 py-8 bg-coolGray-900">
                      <ul className="self-stretch flex-1 space-y-2">
                        <li className="flex justify-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6 text-[#C32703]"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            ></path>
                          </svg>
                          <span>{item.speed}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
//<div className="flex flex-col overflow-hidden  rounded-md border-gradient border-gradient-purple">
