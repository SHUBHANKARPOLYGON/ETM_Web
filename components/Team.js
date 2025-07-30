import React from "react";

import { BsLinkedin } from "react-icons/bs";

const data = [
  {
    name: "Ravi Shekhar",
    position: "Founder",
    imageLink: "/services/ravis.png",
    linkedin: "https://www.linkedin.com/in/ravi-shekhar-090bb932",
  },
  {
    name: "Kartikesh Kumar Jha",
    position: "Co-Founder",
    imageLink: "/services/karthik.png",
    linkedin: "https://www.linkedin.com/in/kartikesh-kumar-jha-3970a18b",
  },
  {
    name: "Dheeraj Kumar",
    position: "Co-Founder",
    imageLink: "/services/d.png",
    linkedin: "https://www.linkedin.com/in/dheeraj-kr-cs/",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-100">
      <div className=" container mx-auto px-4">
        <div className="pb-20">
          <h1 className=" text-3xl md:text-4xl">
            <>MEET OUR TEAM</>
          </h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {data.map((n, index) => {
            return (
              <div key={index} className="space-y-4">
                <img
                  alt=""
                  className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm "
                  src={n.imageLink}
                />
                <div className="flex flex-col items-center">
                  <p className="text-xl font-semibold">{n.name}</p>
                  <p className="text-sm ">{n.position}</p>
                  <div className="flex mt-2 space-x-2">
                    <a
                      rel="noopener noreferrer"
                      href={n.linkedin}
                      title="LinkedIn"
                      target="_blank"
                      className="text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        className="w-4 h-4"
                      >
                        <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
          { 
}
        </div>
      </div>
    </section>
  );
}
