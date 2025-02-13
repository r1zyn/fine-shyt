"use client";

import { introduceNextSlide } from "@app/lib/utils";
import type { PropsWithChildren } from "react";

interface PopupProps extends PropsWithChildren {
    id: string;
}

export default function Popup({ children, id }: PopupProps) {
    return <form
        className="bg-gray-400 border-black border-4 h-full rounded-md hidden opacity-0 flex-col justify-evenly items-center text-center w-full p-10 gap-y-2" id={id}
        onSubmit={(e): void => {
            e.preventDefault();
            introduceNextSlide(id, `screen-${parseInt(id.slice(6)) + 1}`);
        }}
    >
        {children}

        <button
            type="submit"
            className="px-3 py-1 bg-red-500 rounded"
        >
            Next
        </button>
    </form>
}