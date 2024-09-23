import QRCodeGenerator from "@/components/pages/QR";
import React from "react";

const QR = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <QRCodeGenerator value="https://beyondsensor.com/" />
    </div>
  );
};

export default QR;
