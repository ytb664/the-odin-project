const select = document.querySelector(".select-month");
const list = document.querySelector(".total-days");
const month = document.querySelector(".selected-month");


select.addEventListener("change", () => {
    const choice = select.value;

    let days = 31;
    if (choice === "February") {
        days = 28;
    } else if (choice === "April" || choice === "June" || choice === "September" || choice === "November") {
        days = 30;
    } 

    createCalendar(days, choice);
});

function createCalendar(days, choice) {
    list.innerHTML = "";
    month.textContent = choice;
    for (let i = 1; i <= days; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = i;
        list.appendChild(listItem);
    }
}

createCalendar(31, "January");