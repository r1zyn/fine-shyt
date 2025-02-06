"use client";

import { introduceNextSlide } from "@app/utils";

export default function StartButton() {
    return <button
        className="border-black border-2 rounded-md bg-pink-300 text-black uppercase text-2xl p-1 hover:shadow-2xl hover:brightness-75 transform transition-all duration-500 ease-in-out hover:-translate-y-[20%]"
        onClick={(): void => introduceNextSlide("intro-screen", "screen-1")}
    >
        Start
    </button>
}