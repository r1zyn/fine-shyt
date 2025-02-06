"use client";

import type { PropsWithChildren } from "react";

export default function Popup({ children }: PropsWithChildren) {
    return <div className="bg-gray-400 border-black border-4 rounded-md hidden opacity-0 flex-col justify-evenly items-center text-center w-full p-10 gap-y-10">
        {children}
    </div>
}