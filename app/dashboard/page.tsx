import React from "react";
import Card from "@/components/ui/dashboard/card/card";

export default function page() {
  return (
    <>
      <div className="flex mt-[20px] gap-[20px]">
        <div className="flex flex-[3] flex-col gap-[20px]">
          <div className="grid  gap-[20px] justify-between grid-cols-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <hr></hr>
          <div className="">right bar</div>
        </div>
      </div>
    </>
  );
}
