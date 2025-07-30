import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid"; // Updated for Heroicons v2
import React, { useState, useEffect, useRef } from "react";

export default function Nav() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesTimeoutRef = useRef(null);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) ||
      currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  };

  const handleServicesEnter = () => {
    clearTimeout(servicesTimeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300); // 300ms delay before closing
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <div
      className={`nav ${visible && `nav-blured-bg`} bg-black md:px-4 py-1 flex space-x-11  justify-center`}
    >
      <div className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 place-content-center place-items-center">
          <div className="">
            <Link href="/">
              <img src="/etm1.png" className="h-24" alt="logo" />
            </Link>
          </div>

          {/* Main Links */}
          <div className="hidden md:flex justify-center items-center space-x-3 lg:space-x-6">
            <Link href="/">
              <button className="text-white hover:text-red-700">Home</button>
            </Link>

            {/* Dropdown Menu (Opens on Hover) */}
            <div 
              className="relative flex items-center space-x-1"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button className="text-white hover:text-red-700 flex items-center">
                Services
                <ChevronDownIcon className="w-5 h-5 ml-1" />
              </button>

              {/* Dropdown */}
              {isServicesOpen && (
                <div className="absolute top-full mt-2 w-48 bg-white shadow-md z-10">
                  <Link href="/service1">
                    <button className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200">
                      Service 1
                    </button>
                  </Link>
                  <Link href="/service2">
                    <button className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200">
                      Service 2
                    </button>
                  </Link>
                </div>
              )}
            </div>

            <Link href="/#charging">
              <button className="text-white hover:text-red-700">Charging</button>
            </Link>
            <Link href="/#team">
              <button className="text-white hover:text-red-700">Team</button>
            </Link>
            <Link href="/#etm-connect">
              <button className="text-white hover:text-red-700">Connect</button>
            </Link>
            <Link href="/#etm-connect">
              <button className="text-white hover:text-red-700">Pricing</button>
            </Link>
          </div>

          {/* Rent Now Button */}
          <div className="">
            <Link href="/rent">
              <button className="bg-white text-black hover:bg-blue-500 hover:text-white py-2 px-4 rounded-md">
                Rent Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
