export function introduceNextSlide(oldId: string, newId: string) {
    const oldScreen = document.getElementById(oldId);
    const newScreen = document.getElementById(newId);

    if (oldScreen && newScreen) {
        oldScreen.classList.add("fade-out");

        setTimeout(() => {
            oldScreen.style.display = "none";
            newScreen.style.display = "flex";
            newScreen.classList.add("fade-in");
        }, 3000);
    }
}