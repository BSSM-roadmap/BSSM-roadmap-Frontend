import LoadKakaoMap from "@/components/LoadKakaoMap";
import Markers from "@/components/Markers";
import React, { useState } from "react";
import { 업체 } from "@/dummy/업체";

const Map = () => {
  const [map, setMap] = useState(null);
  const companyDatas = 업체;

  return (
    <>
      <LoadKakaoMap setMap={setMap} />
      <Markers companyDatas={companyDatas} map={map} />
    </>
  );
};

export default Map;
