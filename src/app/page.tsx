import React from "react";
import MapComponent from "./map";
import QRCodeGenerator from "./qrCode";
import RealTimeMap from "./map";

const App: React.FC = () => {
  return (
    // <div className="min-h-screen bg-gray-100 flex justify-center items-center">
    //   <QRCodeGenerator value="https://www.example.com" />
    // </div>
    <div>
      <RealTimeMap />
    </div>
  );
};

export default App;
