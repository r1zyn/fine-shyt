"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function BackgroundAudio() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const togglePlayPause = () => {
        if (!audioRef.current) return;

        if (isPlaying) audioRef.current.pause();
        else audioRef.current.play();

        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        if (!audioRef.current) return;

        audioRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    return (
        <div className="fixed bottom-2 md:bottom-4 md:left-4 bg-pink-300 shadow-2xl p-4 rounded-lg text-white flex flex-col justify-center items-start gap-y-3">
            <audio ref={audioRef} src="/audio/music.mp3" loop />

            <div className="flex flex-row justify-between w-full items-center">
                <span className="text-outline">Now Playing</span>

                <button
                    onClick={toggleMute}
                    className="ml-5 px-3 py-1 bg-red-500 rounded"
                >
                    {isMuted ? "Unmute" : "Mute"}
                </button>
            </div>

            <div className="w-full flex flex-row justify-between items-center">
                <div className="flex flex-row gap-x-4 items-center">
                    <Image className="rounded-md" src="/icons/nowplaying.jpg" alt="Cigarettes After Sex" height={50} width={50} />

                    <div className="flex flex-col justify-center items-start gap-y-1">
                        <h1 className="text-md">blue</h1>
                        <span className="text-xs brightness-[90%]">yung kai</span>
                    </div>
                </div>

                <button
                    onClick={togglePlayPause}
                    className="rounded-full h-10 w-10 bg-white flex justify-center items-center"
                >
                    {isPlaying ? <Image src="/icons/pause.svg" alt="pause" height={20} width={20} /> : <Image className="pl-0.5" src="/icons/play.svg" alt="play" height={20} width={20} />}
                </button>
            </div>
        </div>
    );
}
