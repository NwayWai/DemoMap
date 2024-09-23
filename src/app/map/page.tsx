import dynamic from "next/dynamic";
import React from "react";

// Dynamically import RealTimeMap with SSR disabled
const RealTimeMap = dynamic(() => import("@/components/pages/Map"), {
  ssr: false,
});

const MapPage = () => {
  return (
    <div>
      <RealTimeMap />
    </div>
  );
};

export default MapPage;
