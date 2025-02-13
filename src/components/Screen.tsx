"use client";

import sendMessage from "@app/lib/webhook";
import { introduceNextSlide } from "@app/lib/utils";
import { useState, type PropsWithChildren } from "react";

interface ScreenProps extends PropsWithChildren {
    id: string;
    oneOption?: boolean;
    hearts?: number;
}

export default function Screen({ children, id, oneOption }: ScreenProps) {
    const [showError, setShowError] = useState(false);

    return <form
        className="bg-gray-400 border-black border-4 rounded-md hidden opacity-0 flex-col justify-evenly items-center text-center w-full p-2 md:p-10 gap-y-10" id={id}
        onSubmit={(e): void => {
            e.preventDefault();

            const checkboxes: NodeListOf<HTMLInputElement> = e.currentTarget.querySelectorAll("input[type=checkbox]");

            if (checkboxes.length > 0) {
                let checked = 0;

                checkboxes.forEach(input => {
                    if (input.checked) checked++;
                });

                if (oneOption && (checked > 1 || checked == 0)) {
                    setShowError(true);
                } else {
                    setShowError(false);
                    introduceNextSlide(id, `popup-${id.slice(7)}`);
                }
            } else {
                if (id == "screen-7") {
                    const text = e.currentTarget.querySelector("textarea");
                    if (text) sendMessage(text.value);
                }

                introduceNextSlide(id, `popup-${id.slice(7)}`);
            }
        }}
    >
        {children}

        <div className="flex flex-col justify-center items-center gap-y-2">
            <p className={`text-xs text-red-500 ${showError ? "" : "hidden"}`} id="err-msg">
                choose one bru
            </p>

            {id != "screen-8" ? <button
                type="submit"
                className="px-3 py-1 bg-red-500 rounded"
            >
                Submit
            </button> : <></>}
        </div>
    </form>
}