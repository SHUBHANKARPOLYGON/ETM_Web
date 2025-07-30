import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

function VideoPopUp() {
  return (
    <div className="video-popup">
      <video width="100%" controls autoPlay>
        <source src="/videos/intro.mp4" type="video/mp4" />
        <p>Your browser does not support HTML video.</p>
      </video>
    </div>
  );
}

export default function Header() {
  const [videoPopup, setVideoPopup] = useState(false);

  return (
    <div id="introduction">
      <div
        className="cursor-box"
        onClick={() => {
          setVideoPopup(true);
        }}
      ></div>

      {videoPopup && (
        <div className="popup">
          <VideoPopUp />
          <div
            className="popup__close"
            onClick={() => {
              setVideoPopup(false);
            }}
          ></div>
        </div>
      )}

      <div className="header">
        <h3 className="header__title">ETM Bikes</h3>
        <Link href="#culture">
          <span className="scroll-text">Scroll down to see more</span>
        </Link>
      </div>

      <video className="header__bg-video" autoPlay loop muted playsInline>
        <source src={"/videos/intro.mp4"} type="video/mp4" />
      </video>
    </div>
  );
}
