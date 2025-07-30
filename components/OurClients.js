import React from "react";

const OurClients = () => {
  return (
    <div className="py-6 dark:bg-coolGray-800 dark:text-coolGray-100">
      <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
        <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">
          Our Clients
        </h1>
        <div className="flex flex-row flex-wrap justify-center">
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-coolGray-500"
              src="/zomzto.webp"
            />
            <p className="text-xl font-semibold leading-tight">Zomato</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-coolGray-500"
              src="/pb.jpeg"
            />
            <p className="text-xl font-semibold leading-tight">Patna Beats</p>
          </div>

          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-coolGray-500"
              src="/1553762301164.jpeg"
            />
            <p className="text-xl font-semibold leading-tight">
              Anandsagar Natural Dairy{" "}
            </p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-15 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-coolGray-500"
              src="/blue.png"
            />
            <p className="text-xl font-semibold leading-tight">BLUE DART </p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-22 h-25 mb-4 bg-center bg-cover rounded-full dark:bg-coolGray-500"
              src="/blinkit1.png"
            />
            <p className="text-xl font-semibold leading-tight">Blinkit </p>
          </div>

          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-coolGray-500"
              src="/Co-Working.jpg"
            />
            <p className="text-xl font-semibold leading-tight">Co-Working</p>
          </div>

          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center  flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-coolGray-500"
              src="/rodbez.jpeg"
            />
            <p className="text-xl font-semibold leading-tight">RodBez</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center  flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-coolGray-500"
              src="/rapido.png"
            />
            <p className="text-xl font-semibold leading-tight">Rapido</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center  flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-coolGray-500"
              src="/deliver.png"
            />
            <p className="text-xl font-semibold leading-tight">
              Deliver Dukkan
            </p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center object-contain bg-black flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-coolGray-500"
              src="/uber.jpg"
            />
            <p className="text-xl font-semibold leading-tight">Uber</p>
          </div>

          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center  flex-shrink-0 w-20 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-coolGray-500"
              src="/adb.jpg"
            />
            <p className="text-xl text-justify font-semibold leading-tight">
              ADBIKE
            </p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center  flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-coolGray-500"
              src="/vahan.jpeg"
            />
            <p className="text-xl font-semibold leading-tight">Vahan</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center  flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-coolGray-500"
              src="/sun.jpeg"
            />
            <p className="text-xl font-semibold leading-tight">Sun Mobility</p>
          </div>
          <a href="https://cypheninnovations.com/">
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center  flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-coolGray-500"
                src="/cyphen-logo.jpg"
              />

              <p className="text-xl font-semibold leading-tight">
                Cyphen Innovations
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default OurClients;
