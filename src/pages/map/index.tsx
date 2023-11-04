/* global kakao */
import Script from "next/script";
import React from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  const loadKakaoMap = () => {};
  return <div id="map" className="w-full h-screen"></div>;
};

export default Map;
