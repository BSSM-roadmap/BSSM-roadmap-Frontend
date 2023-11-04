/* global kakao */
import Script from "next/script";
import React from "react";
import { 업체 } from "@/dummy/업체";

const DEFAULT_LAT = 35.17308711;
const DEFAULT_LNG = 129.12775978;

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

      업체.map((store) => {
        var imageSrc = "/images/markers/office-building.png", // 마커이미지의 주소입니다
          imageSize = new window.kakao.maps.Size(40, 40), // 마커이미지의 크기입니다
          imageOption = { offset: new window.kakao.maps.Point(27, 69) };

        var markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
            imageOption
          ),
          markerPosition = new window.kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다

        var markerPosition = new window.kakao.maps.LatLng(
          store?.X_CNTS, // 위도
          store?.Y_DNTS // 경도
        );

        // 마커 생성
        var marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
        });

        console.log("markerPosition", marker);
        marker.setMap(map);
      });
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
