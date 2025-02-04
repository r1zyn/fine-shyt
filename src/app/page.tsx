import StartButton from "@app/components/StartButton";
import Image from "next/image";

export default function Home() {
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
                <div className="w-full bg-white flex justify-center items-center h-full p-2 border-black border-r-4 rounded-bl-xl">
                    {/* Intro Screen*/}
                    <div className="bg-gray-400 border-black border-4 rounded-md flex flex-col justify-evenly items-center text-center w-full p-10 gap-y-10" id="intro-screen">
                        <span className="uppercase text-pink-300 text-outline text-5xl w-full">New Game</span>
                        <StartButton />
                    </div>

                    {/*Screen 1*/}
                    <form className="bg-gray-400 border-black border-4 rounded-md hidden opacity-0 flex-col justify-evenly items-center text-center w-full p-10 gap-y-10" id="screen-1">
                        <h1 className="text-xl">Q1. Who&apos;s the finest shyt?</h1>

                        <div className="flex flex-row">
                        <span>
                            <input type="checkbox" />
                            You
                        </span>

                        <span>
                            <input type="checkbox" />
                            You
                        </span>

                        <span>
                            <input type="checkbox" />
                            You
                        </span>

                        <span>
                            <input type="checkbox" />
                            You
                        </span>
                        </div>
                    </form>
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
                        <div className="h-44 w-full flex flex-col bg-pink-300 border-black border-b-4">
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
