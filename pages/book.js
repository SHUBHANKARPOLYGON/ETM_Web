import { useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Book() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const makePayment = async () => {
    console.log("here...");
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
      t.json()
    );
    console.log(data);
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: firstName + "" + lastName,
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for reservation",
      image: "http://www.navomeshstavya.in/logo.jpg",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: firstName + " " + lastName,
        email: email,
        contact: phone,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  return (
    <div>
      <Nav />
      <section className="flex flex-wrap sm:flex-nowrap justify-between mt-28">
        <div className="flex">
          {" "}
          <div className="">
            {" "}
            <img src="/download.jpeg" />{" "}
          </div>{" "}
        </div>
        <div className="w-[44rem]  mr-[60px] p-[30px]">
          {" "}
          <div className="mr-[60px] ">
            <h1 className="text-3xl font-semibold text-grey-200">
              Reserve your ETM for a refundable amount of ₹2501{" "}
            </h1>{" "}
          </div>{" "}
          <div className="bg-white rounded-xl">
            <div> </div>
            <section className="p-6 bg-coolGray-100 text-coolGray-900">
              <h1 className="text-3xl">Enter your personal details</h1>
              <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="w-full px-4 md:px-8 mx-auto">
                  <form className="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="inline-block text-gray-800 text-xl  mb-2 "
                      >
                        First name*
                      </label>
                      <input
                        name="first-name"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full bg-gray-50 h-[60px] text-xl text-gray-800 font-bold border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="last-name"
                        className="inline-block text-gray-800 text-xl  mb-2"
                      >
                        Last name*
                      </label>
                      <input
                        name="last-name"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full bg-gray-50 h-[60px] text-xl text-gray-800 font-bold border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="inline-block text-gray-800 text-xl  mb-2"
                      >
                        Email*
                      </label>
                      <input
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-gray-50 h-[60px] text-xl text-gray-800 font-bold border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="mobilenumber"
                        className="inline-block text-gray-800 text-xl  mb-2"
                      >
                        Mobile Number*
                      </label>
                      {/* <input  name="number" placeholder="First Name" className="w-full bg-gray-50 h-[60px] text-xl text-gray-800 font-bold border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" /> */}
                      <input
                        type="number"
                        id="mobile_num"
                        name="mobile_num"
                        autoComplete="off"
                        required=""
                        data-regex="^[0-9]{10}$"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your mobile number"
                        className="w-full bg-gray-50 h-[60px] text-xl text-gray-800 font-bold border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="mobilenumber"
                        className="inline-block text-gray-800 text-xl  mb-2"
                      >
                        Pin Code*
                      </label>
                      <input
                        type="number"
                        id="pincode"
                        name="pincode"
                        autoComplete="off"
                        required=""
                        placeholder="Enter your pincode"
                        className="w-full bg-gray-50 h-[60px] text-xl text-gray-800 font-bold border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
          <div className=" bg-[#EF404A] flex justify-between text-white mt-[1rem] py-[2rem] font-bold text-xl  p-3 px-4 rounded-xl ">
            {/* <a href="/reserve" className="btn primary-btn">Reserve for ₹499/-</a> */}
            <h1>Continue payment </h1>
            <button onClick={makePayment}>₹2501/- </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
