 function Card(props) {
  return (
    <div className="service__card">
      <img src={props.imgSrc} alt="service" className="service__card__img" />
      <div className="service__card__details">
        <h3 className="service__card__details__title">{props.serviceName}</h3>
      </div>
    </div>
  );
  }
export default function Services() {
  return (
    <div id="services" className="service">
      <div className="container mx-auto px-2">
        <div className="flex flex-col items-center mb-5">
          <h1 className="text-4xl font-bold text-white font-style: italic text-center py-4"> Our Services</h1>
          <p className="font-light text-white text-center">
          <i> Daily, Weekly, Monthly, Annually - We've Got Plans For All Your Needs</i> 
          </p>
        </div>

        <div className="flex flex-wrap px-4">
          <div className="w-full md:w-1/4 px-4 mb-8">
            <Card
              imgSrc={"/services/ser.jpg"}
              serviceName={" Join ETM"}
            />
          </div>
          <div className="w-full md:w-1/4 px-4 mb-8">
            <Card
              imgSrc={"/services/ph4.jpg"}
              serviceName={"eMAAS "}
            />
          </div>
          <div className="w-full md:w-1/4 px-4 mb-8">
            <Card
              imgSrc={"/services/ph.jpg"}
              serviceName={" EV logistics & deliveries"}
            />
          </div>
          <div className="w-full md:w-1/4 px-4 mb-8">
            <Card imgSrc={"/services/new3.jpg"} serviceName={"Subscriptions"} />
          </div>
        </div>
      </div>
    </div>
  );
}
