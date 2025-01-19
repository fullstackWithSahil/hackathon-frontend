"use client";
import React from "react";
import Showcase from "./Showcase";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Chart from "./Chart";
import Header from "./Header";


export default function Page() {
  return (
    <div className="w-screen bg-black h-screen pt-12">
      <div className="w-3/4 bg-white bg-opacity-50 border-2 border-white border-opacity-100 rounded-md m-5 p-8 flex flex-col items-center mx-[auto] max-h-[75vh] overflow-y-scroll">
        <Header/>
        <Showcase />
        <div className="border-2 border-white p-3 rounded-xl w-full bg-gray-900 text-white my-3 pl-8">
          <h1 className="text-2xl font-bold">Pain points</h1>
          <ul className="list-disc">
            <li>sahil</li>
            <li>sahil</li>
            <li>sahil</li>
            <li>sahil</li>
          </ul>
        </div>

        <div className="border-2 border-white p-3 rounded-xl w-full bg-gray-900 text-white my-3 pl-8 grid grid-cols-3 gap-2">
          <h1 className="text-2xl font-bold col-span-3">Top results</h1>
          <Showcase />
          <Showcase />
          <Showcase />
        </div>

        <div className="border-2 border-white p-3 rounded-xl w-full bg-gray-900 text-white my-3 pl-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h1 className="text-2xl font-bold">Refrences</h1>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col items-center justify-start text-blue-400">
                {Array(10).fill(1).map((iteam,i)=>(<><Link
                  key={i}
                  href={
                    "https://chatgpt.com/c/678c1844-1770-8007-b865-c7bf64d58f0f"
                  }
                >
                  some link
                </Link> <br /></>
              ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="grid grid-cols-3 gap-2 dark">
          <Chart/>
          <Chart/>
          <Chart/>
        </div>
      </div>
    </div>
  );
}
