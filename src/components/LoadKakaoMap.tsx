/* global kakao */
import Script from "next/script";
import React from "react";

const DEFAULT_LAT = 35.174;
const DEFAULT_LNG = 129.128;

declare global {
  interface Window {
    kakao: any;
  }
}

const LoadKakaoMap = () => {
  const loadKakaoMap = () => {
    // kakao map 로드
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById("map");
      const mapOption = {
        center: new window.kakao.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG),
        level: 3,
      };
      const map = new window.kakao.maps.Map(mapContainer, mapOption);
    });
  };
  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_CLIENT}&autoload=false`}
        onReady={loadKakaoMap}
      />
      <div id="map" style={{ width: "100%", height: "93vh" }}></div>
    </>
  );
};

export default LoadKakaoMap;
