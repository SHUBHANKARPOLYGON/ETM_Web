import React from "react";

import { BsCalendar4Week } from "react-icons/bs";
import { RiPriceTag3Line } from "react-icons/ri";
import { CgSmartphoneChip } from "react-icons/cg";
import { MdSecurity } from "react-icons/md";

const data = [
  {
    title: "Easy Booking",
    description: `Choose from the widest range of electric scooters that best fits your commute. Enter your details to view the estimated date of delivery and you are done!`,
    icon: <BsCalendar4Week color="#1f003b" size={30} />,
  },
  {
    title: "Tailored Pricing",
    description: `Custom plans according to your company's utility. Even if you are a small merchant or an E-Commerce giant, or any service industry professional serving at doorsteps.`,
    icon: <RiPriceTag3Line color="#1f003b" size={30} />,
  },
  
  {
    title: "S.M.A.R.T",
    description: `Self Monitoring, Analysis, and Reporting Technology enabled. The entire fleet is equipped with IoT and AI technology so you can track and verify the status of conveyances.`,
    icon: <CgSmartphoneChip color="#1f003b" size={30} />,
  },
  {
    title: "Secure & Reliable",
    description: `Security for our services is a crucial concern for us, as it plays an important part in quality, performance, and availability.`,
    icon: <MdSecurity color="#1f003b" size={30} />,
  },
];

export default function Why() {
  return (
    <div id="why" className="py-32   bg-gray-100">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-9 overflow-hidden ">
          Why Etm ?{" "}
        </h1>
        <div className="grid grid-cols-1 place-content-center place-items-center sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((n, index) => {
            return (
              <div key={index} className=" max-w-xs p-3 bg-white rounded">
                <div>{n.icon}</div>
                <div>
                  <h1 className="text-2xl py-2 text-left">{n.title}</h1>
                  <p className="text-xs text-gray-800">{n.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
