"use client";
import React from "react";
import { WavyBackground } from "@/components/Beams";

export default function Page() {
  return (
    <WavyBackground className="w-full mx-auto pb-40">
      <div className="h-[50vh] w-[50vh] bg-white opacity-50 border-2 border-white"></div>
    </WavyBackground>
  );
}
