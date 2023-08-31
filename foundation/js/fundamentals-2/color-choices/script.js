const select = document.querySelector("select");
const html = document.querySelector(".output");

select.addEventListener("change", () => {
    const choice = select.value;

    switch(choice) {
        case "black":
            update("black", "white");
            break;
        case "purple":
            update("purple", "yellow");
            break;
        case "yellow":
            update("yellow", "purple");
            break;
        case "psychedelic":
            update("lime", "purple");
            break;
        default:
            update("white", "black");
            break;
    }
});

function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}