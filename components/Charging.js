import React from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import {BsPhone, BsBatteryCharging} from "react-icons/bs";
import {BiPlug} from "react-icons/bi";
import {RiChargingPile2Line} from "react-icons/ri";
import {MdPowerOff} from "react-icons/md";

export default function Charging() {
  return (
    <div id="charging" className="charging bg-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-white mb-4 overflow-hidden"><>ETM Charging</></h1>
          </div>
          <div className="md:w-1/2">
            <p className="text-white">
            <>Fast charge your ETM at any of the ETM charging points in your
            city. Find one on the ETM app or on the dashboard. Going on a long
            ride? Carry a portable charger along.</>
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center mt-8">
          <div className="md:w-2/3 md:mr-8">
             <img src="/charging.jpg" alt="charging bg" /> 
          </div>
          <div className="md:w-1/3">
            <div className="flex items-center mb-4">
              <AiOutlineThunderbolt className=" icon text-2xl mr-4 " />
              <p className="text-gray-400">Upto 15KM in 10 min</p>
            </div>

            <div className="flex items-center mb-4">
              <BsPhone className=" icon text-2xl mr-4" />
              <p className="text-gray-400">Check charge status remotely through ETM app</p>
            </div>

            <div className="flex items-center mb-4">
              <BiPlug className=" icon text-2xl mr-4" />
              <p className="text-gray-400">Charge at any 5A plug point with a portable charger</p>
            </div>

            <div className="flex items-center mb-4">
              <BsBatteryCharging className="icon text-2xl mr-4" />
              <p className="text-gray-400">Charge at any ETM charging station for free</p>
            </div>

            <div className="flex items-center mb-4">
              <MdPowerOff className="icon text-2xl mr-4" />
              <p className="text-gray-400">In built auto cut-off &amp; surge protection</p>
            </div>

            <div className="flex items-center mb-4">
              <RiChargingPile2Line className="icon text-2xl mr-4" />
              <p className="text-gray-400">Hassle free charging board installation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
