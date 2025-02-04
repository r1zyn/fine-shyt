"use client";

export default function StartButton() {
    return <button
        className="border-black border-4 rounded-md bg-pink-300 text-black uppercase text-2xl p-1 hover:shadow-2xl hover:brightness-75 transform transition-all duration-500 ease-in-out hover:-translate-y-[20%]"
        onClick={(): void => {
            const introScreen = document.getElementById("intro-screen");
            const screen1 = document.getElementById("screen-1");

            if (introScreen && screen1) {
                introScreen.classList.add("fade-out");

                setTimeout(() => {
                    introScreen.style.display = "none";
                    screen1.style.display = "flex";
                    screen1.classList.add("fade-in");
                }, 3000);
            }
        }}
    >
        Start
    </button>
}