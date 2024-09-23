import ServicesPage from "@/app/testUseState/services";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const NavHeader = () => {
  const nav = [
    {
      label: "Home",
      value: "home",
    },
    { label: "Post", value: "post" },
    { label: "Setting", value: "setting" },
  ];
  const [navList, setNavList] = useState("");

  const navTab = () => {
    if (navList == "home") {
      return <ServicesPage />;
    }
  };

  return (
    <div className="flex justify-between w-screen  ">
      <div>Logo</div>
      <div className="flex space-x-4">
        {nav.map((posts, index) => {
          return (
            <div
              className={cn(
                navList == posts.value ? "text-green-200" : "text-black",
                "flex"
              )}
              key={index}
              onClick={() => setNavList(posts.value)}
            >
              {posts.label}
            </div>
          );
        })}
      </div>
      <div>{navTab()}</div>
    </div>
  );
};

export default NavHeader;
