"use client";
import React, { useEffect, useState } from "react";
import QRCode from "qrcode";

interface QRCodeGeneratorProps {
  value: string;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ value }) => {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        const url = await QRCode.toDataURL(value);
        setQrCodeUrl(url);
      } catch (err) {
        console.error(err);
      }
    };

    generateQRCode();
  }, [value]);

  return (
    <div className="flex flex-col justify-center items-center p-4">
      {qrCodeUrl ? (
        <div className="flex flex-col items-center">
          <img
            src={qrCodeUrl}
            alt="QR Code"
            className="border-2 border-gray-300 rounded-lg shadow-md mb-4"
          />
        </div>
      ) : (
        <p>Generating QR code...</p>
      )}
    </div>
  );
};

export default QRCodeGenerator;
