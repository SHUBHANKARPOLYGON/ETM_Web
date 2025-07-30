import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsCalendarEvent} from "react-icons/bs";
import {MdBatteryCharging60} from "react-icons/md";
import {RiMapPin2Line} from "react-icons/ri";
import {GoGraph} from "react-icons/go";

export default function App() {
  return (
    <div id="etm-connect" className="app">
      <Container fluid className="cont">
        <Row className="app__heading">
          <Col sm={12} md={6}>
            <h1 className="section-title text-3xl ">etm Connect</h1>
          </Col>
          <Col sm={12} md={6}>
            <p className="p">
            One app for everything ETM. Connect to the scooter, charger and the cloud to access information & features remotely.
            </p>
          </Col>
        </Row>

        <Row>
          <Col sm={12} className="app__banner">
            {/* <img src="/charging.jpg" alt="charging bg" /> */}
          </Col>
          <Col sm={12} className="app__details">
            <div className="app__detail">
              <GoGraph className="icon" />
              <p className="p">Get your ride Statistics</p>
            </div>

            <div className="app__detail">
              <BsCalendarEvent className="icon" />
              <p className="p">Book servicing</p>
            </div>

            <div className="app__detail">
              <RiMapPin2Line className="icon" />
              <p className="p">Find swapping station</p>
            </div>

            <div className="app__detail">
              <MdBatteryCharging60 className="icon" />
              <p className="p">Check charge status</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
