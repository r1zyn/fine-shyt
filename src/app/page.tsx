"use client";

import Popup from "@app/components/Popup";
import Screen from "@app/components/Screen";
import StartButton from "@app/components/StartButton";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Home() {
    const [value, setValue] = useState(0);
    const [like, setLike] = useState(0);
    const [hasValentines, setValentines] = useState("no");
    const [hearts, setHearts] = useState(0);
    const [hasChance, setChance] = useState("yes");

    const heartsRef = useRef(0);

    const addHearts = () => {
        heartsRef.current += 50;
        setHearts(heartsRef.current);
    };

    return (
        <div className="mx-10 md:mx-0 bg-pink-300 border-black border-4 rounded-2xl flex flex-col justify-center items-center shadow-2xl animate">
            {/* Top Bar */}
            <div className="w-full flex flex-row justify-end items-center gap-x-1 p-2 border-black border-b-4">
                <div className="cursor-pointer bg-white border-black border-4 rounded-md flex justify-center items-center p-1 hover:shadow-2xl hover:brightness-75 transform transition-all duration-500 ease-in-out">
                    <Image
                        src="/icons/line.svg"
                        alt="line"
                        height={20}
                        width={20}
                        priority
                    />
                </div>
                <div className="cursor-pointer bg-white border-black border-4 rounded-md flex justify-center items-center p-1 hover:shadow-2xl hover:brightness-75 transform transition-all duration-500 ease-in-out">
                    <Image
                        src="/icons/circle.svg"
                        alt="circle"
                        height={20}
                        width={20}
                        priority
                    />
                </div>
                <div className="cursor-pointer bg-white border-black border-4 rounded-md flex justify-center items-center p-1 hover:shadow-2xl hover:brightness-75 transform transition-all duration-500 ease-in-out">
                    <Image
                        src="/icons/cross.svg"
                        alt="cross"
                        height={20}
                        width={20}
                        priority
                    />
                </div>
            </div>

            <div className="flex flex-row justify-center items-center w-full h-full">
                {/* Sreen Content*/}
                <div className="w-full text-white bg-white flex justify-center items-center h-full p-2 border-black border-r-4 rounded-bl-xl">
                    {/* Intro Screen*/}
                    <div className="bg-gray-400 border-black border-4 rounded-md flex flex-col justify-evenly items-center text-center w-full p-10 gap-y-10" id="intro-screen">
                        <span className="uppercase text-pink-300 text-outline text-5xl w-full">New Game</span>
                        <StartButton />
                    </div>

                    <Popup id="popup-0">
                        <div className="w-52">hi chat i made this specifically for this day if u havent figured and js keep going ull figure what this is out ltr yezz</div>
                    </Popup>

                    {/* Section 1*/}
                    <>
                        {/*Screen 1*/}
                        <Screen id="screen-1">
                            <h1 className="text-xl text-outline w-full">Q1. whos the finest shyt</h1>

                            <div className="flex flex-row flex-wrap md:gap-5 justify-center items-center">
                                <div className="w-full md:w-1/2 flex gap-x-10 flex-col md:flex-row">
                                    <div>
                                        <input className="mr-2" type="checkbox" required onInput={() => addHearts()} />
                                        A. You
                                    </div>

                                    <div>
                                        <input className="mr-2" type="checkbox" required />
                                        B. You
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 flex gap-x-10 flex-col md:flex-row">
                                    <div>
                                        <input className="mr-2" type="checkbox" required />
                                        C. You
                                    </div>

                                    <div>
                                        <input className="mr-2" type="checkbox" required />
                                        D. You
                                    </div>
                                </div>
                            </div>
                        </Screen>

                        <Popup id="popup-1">
                            <div className="flex flex-col items-center gap-y-2">
                                you got it right!!!!
                                <Image className="cursor-pointer transform duration-500 ease-in-out hover:scale-110" src="/icons/milo.png" alt="Iced Milo" height={90} width={90} />
                                here&apos;s sum milo
                                <span className="text-xs text-pink-300 flex flex-row items-center">
                                    <Image src="/favicon.ico" alt="hearts" height={20} width={20} />
                                    +50 hearts
                                </span>
                            </div>
                        </Popup>
                    </>

                    {/* Section 2*/}
                    <>
                        {/*Screen 2*/}
                        <Screen id="screen-2">
                            <h1 className="text-xl text-outline w-full">Q2. why do i like u</h1>

                            <div className="flex flex-row flex-wrap md:gap-5 justify-center items-center w-min">
                                <div className="w-full md:w-1/2 flex gap-x-10 flex-col md:flex-row justify-center items-center">
                                    <span>
                                        <input className="mr-2" type="checkbox" required onInput={() => addHearts()} />
                                        <span>ur funny</span>
                                    </span>

                                    <span>
                                        <input className="mr-2" type="checkbox" required />
                                        <span>ur pretty</span>
                                    </span>
                                </div>

                                <div className="w-full md:w-1/2 flex gap-x-10 flex-col md:flex-row justify-center items-center">
                                    <span>
                                        <input className="mr-2" type="checkbox" required />
                                        <span>ur cute</span>
                                    </span>

                                    <span>
                                        <input className="mr-2" type="checkbox" required />
                                        <span>ur amazing at everything</span>
                                    </span>
                                </div>
                            </div>
                        </Screen>

                        <Popup id="popup-2">
                            <div className="flex flex-col items-center gap-y-2">
                                glad u know!!!
                                <Image className="cursor-pointer transform duration-500 ease-in-out hover:scale-110" src="/icons/volleyball.png" alt="Volleyball" height={90} width={90} />
                                u like volleyball yes
                                <span className="text-xs text-pink-300 flex flex-row items-center">
                                    <Image src="/favicon.ico" alt="hearts" height={20} width={20} />
                                    +50 hearts
                                </span>
                            </div>
                        </Popup>
                    </>

                    {/* Section 3*/}
                    <>
                        {/*Screen 3*/}
                        <Screen id="screen-3">
                            <h1 className="text-xl text-outline w-full">Q3. how much do u think i like u</h1>

                            <div className="flex flex-row items-center gap-x-3">
                                not at all
                                <input type="range" defaultValue={0} min={0} max={100} className="slider" onInput={(e) => {
                                    const val = parseInt(e.currentTarget.value);
                                    setValue(val);

                                    if (val == 100) addHearts();
                                }} />
                                sosososo much
                            </div>
                        </Screen>

                        <Popup id="popup-3">
                            {value == 100 ? <div className="flex flex-col items-center gap-y-2">
                                woah u guessed it
                                <Image src="/happi.gif" alt="happi cat" height={90} width={90} />
                                i is happy now!!
                                <span className="text-xs text-pink-300 flex flex-row items-center">
                                    <Image src="/favicon.ico" alt="hearts" height={20} width={20} />
                                    +50 hearts
                                </span>
                            </div> : <div className="flex flex-col items-center gap-y-2">
                                why didnt u max the slider {":(("}
                                <Image src="/cri.gif" alt="cri cat" height={90} width={90} />
                                i is sad now
                                <span className="text-xs text-pink-300 flex flex-row items-center">
                                    <Image src="/favicon.ico" alt="hearts" height={20} width={20} />
                                    +0 hearts
                                </span>
                            </div>}
                        </Popup>
                    </>

                    {/* Section 4*/}
                    <>
                        {/*Screen 4*/}
                        <Screen id="screen-4">
                            <h1 className="text-xl text-outline w-full">Q3. how much is u like me</h1>

                            <div className="flex flex-row items-center gap-x-3">
                                not at all
                                <input type="range" defaultValue={0} min={0} max={100} className="slider" onInput={(e) => {
                                    const val = parseInt(e.currentTarget.value);
                                    setLike(val);

                                    if (val == 100) addHearts();
                                }} />
                                sosososo much
                            </div>
                        </Screen>

                        <Popup id="popup-4">
                            {like == 100 ? <div className="flex flex-col items-center gap-y-2">
                                WOWOWOW U LIKE ME!!!
                                <Image src="/happi.gif" alt="happi cat" height={90} width={90} />
                                yipeeeeee
                                <span className="text-xs text-pink-300 flex flex-row items-center">
                                    <Image src="/favicon.ico" alt="hearts" height={20} width={20} />
                                    +50 hearts
                                </span>
                            </div> : <div className="flex flex-col items-center gap-y-2">
                                oh {":(("}
                                <Image src="/cri.gif" alt="cri cat" height={90} width={90} />
                                maybe u is close this now
                                <span className="text-xs text-pink-300 flex flex-row items-center">
                                    <Image src="/favicon.ico" alt="hearts" height={20} width={20} />
                                    +0 hearts
                                </span>
                            </div>}
                        </Popup>
                    </>

                    {/* Section 5*/}
                    <>
                        {/*Screen 5*/}
                        <Screen id="screen-5" oneOption>
                            <h1 className="text-xl text-outline w-full">Q5. is u have valentines alr</h1>

                            <div className="flex flex-row flex-wrap md:gap-5 justify-center items-center w-min">
                                <div className="w-full md:w-1/2 flex gap-x-10 flex-col md:flex-row justify-center items-center">
                                    <span>
                                        <input className="mr-2" type="checkbox" onInput={() => setValentines("yes")} />
                                        <span>yes</span>
                                    </span>

                                    <span>
                                        <input className="mr-2" type="checkbox" onInput={() => {
                                            setValentines("no");
                                            addHearts();
                                        }} />
                                        <span>no</span>
                                    </span>
                                </div>
                            </div>
                        </Screen>

                        <Popup id="popup-5">
                            {hasValentines == "yes" ? <div className="flex flex-col items-center gap-y-2">
                                oh noesssss
                                <Image src="/cri.gif" alt="cri cat" height={90} width={90} />
                                nvm u is close this then...
                                <span className="text-xs text-pink-300 flex flex-row items-center">
                                    <Image src="/favicon.ico" alt="hearts" height={20} width={20} />
                                    +0 hearts
                                </span>
                            </div> : <div className="flex flex-col items-center gap-y-2">
                                yipeeee
                                <Image src="/happi.gif" alt="happi cat" height={90} width={90} />
                                maybe i is have chance?
                                <span className="text-xs text-pink-300 flex flex-row items-center">
                                    <Image src="/favicon.ico" alt="hearts" height={20} width={20} />
                                    +50 hearts
                                </span>
                            </div>}
                        </Popup>
                    </>

                    {/* Section 6*/}
                    <>
                        {/*Screen 6*/}
                        <Screen id="screen-6" oneOption>
                            <h1 className="text-xl text-outline w-full">Q6. can i b ur valentine?</h1>

                            <div className="flex flex-row flex-wrap md:gap-5 justify-center items-center w-min">
                                <div className="w-full md:w-1/2 flex gap-x-10 flex-col md:flex-row justify-center items-center">
                                    <span>
                                        <input className="mr-2" type="checkbox" onInput={() => {
                                            setChance("yes");
                                            addHearts();
                                        }} />
                                        <span>yes</span>
                                    </span>

                                    <span>
                                        <input className="mr-2" type="checkbox" onInput={() => {
                                            setChance("no");

                                        }} />
                                        <span>no</span>
                                    </span>
                                </div>
                            </div>
                        </Screen>

                        <Popup id="popup-6">
                            {hasChance == "no" ? <div className="flex flex-col items-center gap-y-2">
                                WHAT
                                <Image src="/cri.gif" alt="cri cat" height={90} width={90} />
                                ur so mean
                                <span className="text-xs text-pink-300 flex flex-row items-center">
                                    <Image src="/favicon.ico" alt="hearts" height={20} width={20} />
                                    +0 hearts
                                </span>
                            </div> : <div className="flex flex-col items-center gap-y-2">
                                WAIT RLLY???
                                <Image src="/happi.gif" alt="happi cat" height={90} width={90} />
                                POOKIE ILYSM
                                <span className="text-xs text-pink-300 flex flex-row items-center">
                                    <Image src="/favicon.ico" alt="hearts" height={20} width={20} />
                                    +50 hearts
                                </span>
                            </div>}
                        </Popup>
                    </>

                    {/* Section 7*/}
                    <>
                        {/*Screen 7*/}
                        <Screen id="screen-7">
                            <h1 className="text-xl text-outline w-full">Q7. so will u be my gf</h1>

                            <textarea className="w-full text-pink-300" placeholder="is ok if u say no but say wtv u want" required />
                        </Screen>

                        <Popup id="popup-7">
                            ur answer has been sent to meee

                            <Image src="/happi.gif" alt="happi cat" height={90} width={90} />
                        </Popup>
                    </>

                    {/* Section 8*/}
                    <>
                        {/*Screen 8*/}
                        <Screen id="screen-8" hearts={hearts}>
                            <h1 className="text-xl text-outline w-full"><span className="flex flex-row items-center gap-x-2">you earned: <Image src="/favicon.ico" alt="hearts" height={40} width={40} /> {hearts} hearts!!!</span></h1>
                            <p className="text-md w-full">i liek u smsmsmsmsm</p>
                            <p className="text-md w-full">happy valentines!! 💖</p>
                        </Screen>
                    </>
                </div>

                {/* Display Scrollbar */}
                <div className="w-10 h-full p-0.5">
                    <div className="border-black border-4 rounded-md bg-white h-full w-full flex flex-col">
                        <div className="h-5 w-full flex justify-center items-center hover:brightness-75 cursor-pointer">
                            <Image
                                src="/icons/arrow.svg"
                                alt="scroll up"
                                height={20}
                                width={20}
                                priority
                            />
                        </div>
                        <div className="h-64 md:h-44 w-full flex flex-col bg-pink-300 border-black border-b-4">
                            <div className="bg-pink-400 border-black border-y-4 border-x-2 rounded-b-md h-2/5 w-full"></div>
                            <div className="h-3/5 w-full"></div>
                        </div>
                        <div className="h-5 w-full flex justify-center items-center rotate-180 hover:brightness-75 cursor-pointer">
                            <Image
                                src="/icons/arrow.svg"
                                alt="scroll down"
                                height={20}
                                width={20}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        //     <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        //         <Image
        //             className="dark:invert"
        //             src="/next.svg"
        //             alt="Next.js logo"
        //             width={180}
        //             height={38}
        //             priority
        //         />
        //         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        //             <li className="mb-2">
        //                 Get started by editing{" "}
        //                 <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
        //                     src/app/page.tsx
        //                 </code>
        //                 .
        //             </li>
        //             <li>Save and see your changes instantly.</li>
        //         </ol>

        //         <div className="flex gap-4 items-center flex-col sm:flex-row">
        //             <a
        //                 className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        //                 href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        //                 target="_blank"
        //                 rel="noopener noreferrer"
        //             >
        //                 <Image
        //                     className="dark:invert"
        //                     src="/vercel.svg"
        //                     alt="Vercel logomark"
        //                     width={20}
        //                     height={20}
        //                 />
        //                 Deploy now
        //             </a>
        //             <a
        //                 className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
        //                 href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        //                 target="_blank"
        //                 rel="noopener noreferrer"
        //             >
        //                 Read our docs
        //             </a>
        //         </div>
        //     </main>
        //     <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        //         <a
        //             className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        //             href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        //             target="_blank"
        //             rel="noopener noreferrer"
        //         >
        //             <Image
        //                 aria-hidden
        //                 src="/file.svg"
        //                 alt="File icon"
        //                 width={16}
        //                 height={16}
        //             />
        //             Learn
        //         </a>
        //         <a
        //             className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        //             href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        //             target="_blank"
        //             rel="noopener noreferrer"
        //         >
        //             <Image
        //                 aria-hidden
        //                 src="/window.svg"
        //                 alt="Window icon"
        //                 width={16}
        //                 height={16}
        //             />
        //             Examples
        //         </a>
        //         <a
        //             className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        //             href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        //             target="_blank"
        //             rel="noopener noreferrer"
        //         >
        //             <Image
        //                 aria-hidden
        //                 src="/globe.svg"
        //                 alt="Globe icon"
        //                 width={16}
        //                 height={16}
        //             />
        //             Go to nextjs.org →
        //         </a>
        //     </footer>
        // </div>
    );
}
