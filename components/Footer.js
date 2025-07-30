import Link from "next/link";
import { MdFacebook, MdOutlineEmail } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="bg-black">
      <div className="border-gradient"></div>
      <div className="footer">
        <div className="container mx-auto px-2 py-3 md:py-5">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="/etm1.png"
                className="h-40 w-45 footer__logo mb-3 "
                alt="logo"
              />
              <p className="text-white mb-1 font-normal">
                Eleric Automotive Pvt. Ltd. is a startup recognized and
                registered under Start-up India, Department of Industries and
                Govt. of Bihar.
                <br />
                Co-Working Studio, Yaman Enclave, Near Sai Corporate Park,
                Rukanpura, Patna, Bihar 801506.
              </p>
              <div className="flex items-center">
                <div className="div">
                  <a
                    href="https://www.facebook.com/etmbikes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-icon">
                    <MdFacebook className="icon" />
                  </a>
                  <a
                    href="https://www.instagram.com/etmbikes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-icon">
                    <GrInstagram className="icon" />
                  </a>
                  <a
                    href="https://wa.me/916205351477"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-icon">
                    <BsTwitter className="icon" />
                  </a>
                  <a
                    href="mailto:info@navomeshstavya.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-icon">
                    <MdOutlineEmail className="icon" />
                  </a>
                  <a
                    href="tel:916205351477"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-icon">
                    <FiPhoneCall className="icon" />
                  </a>
                </div>
              </div>
            </div>

            <div className="md:w-1/4">
              <h3 className="text-white mb-3 font-bold">ETM</h3>
              <div className="flex flex-col">
                <Link legacyBehavior href="/">
                  <a className="text-white mb-2 hover:text-gray-500 transition-colors duration-300 hover:underline">
                    Our Story
                  </a>
                </Link>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8 sm:mb-0">
              <h3 className="text-white font-bold mb-4">LEGAL</h3>
              <div>
                <span className="text-gray-400 mb-2 block">
                  <a
                    href="/terms-and-conditions"
                    className="text-white hover:text-red-500 transition duration-500 hover:underline">
                    Terms &amp; Conditions
                  </a>
                </span>
                <span className="text-gray-400 mb-2 block">
                  <a
                    href="/privacy"
                    className="text-white hover:text-red-500 transition duration-500 hover:underline">
                    Privacy Policy
                  </a>
                </span>
                <span className="text-gray-400 mb-2 block">
                  <a
                    href="/refund"
                    className="text-white hover:text-red-500 transition duration-500 hover:underline">
                    Refund Policy
                  </a>
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-lg text-white mb-3 font-bold ">
                Quick Links
              </h3>
              <span></span>
              <span className="block mb-2 text-white hover:underline">
                <a href="/">Home</a>
              </span>
              <span className="block mb-2 text-white hover:underline">
                <a href="/rent">Rent and Own</a>
              </span>
              <span className="block mb-2 text-white hover:underline">
                <a href="/pricing">Pricing</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pt-8 pb-4 text-gray-600">
        © All rights reserved by us. Design and Developed by{" "}
        <a
          href="http://www.cypheninnovations.com/"
          rel="noreferrer"
          target="_blank"
          className="text-red-500">
          Cyphen Innovations
        </a>
      </div>
    </div>
  );
}
