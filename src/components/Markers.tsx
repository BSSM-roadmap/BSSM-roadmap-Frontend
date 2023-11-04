import { 학과데이터 } from "@/interface/학과인터페이스";
import React, { useEffect } from "react";

interface MarkerProps {
  map: any;
  companyDatas: any[];
}

const Markers = ({ map, companyDatas }: MarkerProps) => {
  useEffect(() => {
    if (map) {
      companyDatas.map((store) => {
        var imageSrc = "/images/markers/office-building.png", // 마커이미지의 주소입니다
          imageSize = new window.kakao.maps.Size(40, 40), // 마커이미지의 크기입니다
          imageOption = { offset: new window.kakao.maps.Point(27, 69) };

        var markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );

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

        // 마커 커서 오버시 마커 위에 표시할 인포윈도우
        var content = `<div style="background-color: darkblue; color: #ffffff; display: block; font-size: 0.875rem; text-align: center; height: 1.5rem; padding-left: 0.5rem; padding-right: 0.5rem; line-height: 1.5rem; border-radius: 5px;">${store?.C_NAME}</div>`;

        var customOverlay = new window.kakao.maps.CustomOverlay({
          position: markerPosition,
          content: content,
          xAnchor: 0.6,
          yAnchor: 0.91,
        });

        // 마커에 마우스오버 이벤트를 등록합니다
        window.kakao.maps.event.addListener(marker, "mouseover", function () {
          // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
          customOverlay.setMap(map);
        });

        // 마커에 마우스아웃 이벤트를 등록합니다
        window.kakao.maps.event.addListener(marker, "mouseout", function () {
          // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
          customOverlay.setMap(null);
        });
      });
    }
  }, [map, companyDatas]);

  return <div></div>;
};

export default Markers;
