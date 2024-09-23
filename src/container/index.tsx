import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FirstPostPage from "@/post/FirstPost";

const Body = ({ Post }: any) => {
  const clickHandler = (id: number) => {
    if (id == 1) {
      return <FirstPostPage />;
    }
  };
  return (
    <div className="w-[200px] h-[200px] flex p-4">
      {Post.map((x: any) => (
        <Card
          className="p-3 ml-6"
          key={x.id}
          onClick={() => clickHandler(x.id)}
        >
          {x.title}
        </Card>
      ))}
    </div>
  );
};

export default Body;
