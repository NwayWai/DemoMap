import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center space-x-4">
      <Link href="/map">
        <Button>Map</Button>
      </Link>
      <Link href="/qr">
        <Button>Qr</Button>
      </Link>
    </div>
  );
};

export default App;
