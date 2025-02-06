"use client";

import type { PropsWithChildren } from "react";

interface ScreenProps extends PropsWithChildren {
    id: string;
    popupId: string;
}

export default function Screen({ children, id, popupId }: ScreenProps) {
    return <form
        className="bg-gray-400 border-black border-4 rounded-md hidden opacity-0 flex-col justify-evenly items-center text-center w-full p-2 md:p-10 gap-y-10" id={id}
        onSubmit={(e): void => {
            e.preventDefault();

            const popup = document.getElementById(popupId);
            if (popup) popup.style.display = "flex";
        }}
    >
        {children}

        <button
            type="submit"
            className="px-3 py-1 bg-red-500 rounded"
        >
            Submit
        </button>
    </form>
}