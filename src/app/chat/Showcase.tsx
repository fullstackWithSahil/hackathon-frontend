"use client";
import {BackgroundGradient} from "@/components/background-gradient"


export default function Showcase(){
  return (
        <BackgroundGradient className="rounded-3xl p-8 sm:p-10 bg-zinc-900">
            <div className="rounded-xl">
                <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
                    Ideal CTA
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    title for the cta The Air Jordan 4 Retro Reimagined Bred will
                    release on Saturday, February 17, 2024. Your best opportunity to get
                    these right now is by entering raffles and waiting for the official
                    releases.
                </p>
                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                    docs
                    </span>
                </button>
            </div>
        </BackgroundGradient>
  )
}
