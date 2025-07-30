import Layout from "../components/Layout";


const rent = () => {
  return (
    <Layout>
      <div className="bg-black mt-[-3rem] sm:mt-0 text-white">
        <iframe
          className="w-screen h-screen color-white"
          src="https://etm-registration.vercel.app/"
        ></iframe>
      </div>
    </Layout>
  );
};

export default rent;
