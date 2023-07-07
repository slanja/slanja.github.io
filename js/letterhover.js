const texts = document.querySelectorAll(".text-changing");

    texts.forEach((text) => {
        text.innerHTML = text.innerText
        .split("")
        .map((letter) => `<span class="letter">${letter}</span>`)
        .join("");
    });

    const letters = document.querySelectorAll(".letter");

    letters.forEach((letter) => {
        letter.addEventListener("mouseover", () => {
        letter.style.color = "#ff0000";

        setTimeout(() => {
            letter.style.color = "#ffdead";
        }, 350);
    });
});
