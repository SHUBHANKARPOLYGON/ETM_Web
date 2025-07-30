import Layout from "../components/Layout";


const refund = () => {
  return (
    <Layout>
      <div className="w-full h-[70vh] text-gray-200  flex flex-col justify-center items-center p-12">
        <p className="text-4xl pb-5">Refund Policy</p>
        <p className="text-xl pb-5">
          Returns/Refund is a scheme provided by respective sellers directly
          under this policy in terms of which the option of exchange/replacement
          and/ or refund is offered by the respective sellers to You.
        </p>
        <p className="text-xl">
          Returns//Refund are applicable only on prepaid transactions on
           Cash on Delivery (COD) deliveries are
          not covered under refund and are only eligible for exchange.
        </p>
      </div>

    </Layout>
  );
};

export default refund;
