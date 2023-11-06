import LoadKakaoMap from "@/components/RoadKakaoMap";
import Markers from "@/components/Markers";
import React, { useState } from "react";
import { 업체 } from "@/dummy/업체";
import CompanyBox from "@/components/CompanyBox";

const Map = () => {
  const [map, setMap] = useState(null);
  const companyDatas = 업체;
  const [currentCompany, setCurrentCompany] = useState(null);

  return (
    <>
      <LoadKakaoMap setMap={setMap} />
      <Markers
        companyDatas={companyDatas}
        map={map}
        setCurrentCompany={setCurrentCompany}
      />
      <CompanyBox company={currentCompany} setCompany={setCurrentCompany} />
    </>
  );
};

export default Map;
