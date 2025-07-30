import Head from "next/head";
import App from "../components/App";
import Charging from "../components/Charging";
import Footer from "../components/Footer";

import Header from "../components/Header";
import HowToRent from "../components/HowToRent";
import Nav from "../components/Nav";
import  OurClients  from "../components/OurClients";

import Services from "../components/Services";
import Team from "../components/Team";
import Why from "../components/Why";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Smartest Electric Scooter in India | ETM Bikes</title>
        <meta name="description" content="Eleric Torque Machine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Header />
      <Why />
      <Services />
      <HowToRent />
      <Charging />
      <Team />
      <App />
      <OurClients />
      <Footer />
    </div>
  );
}
