function loginPrompt() {

    let userName = prompt("Who's There");

    if (userName === "Admin") {
        let password = prompt("Password?");

        if (password === "TheMaster") {
            alert(`Welcome, ${userName}!`);
        } else if (password === "" || password === null) {
            alert("Canceled");
        } else {
            alert("Wrong password");
        }

    } else if (userName === "" || userName === null) {
        alert("Canceled");
    } else {
        alert("I don't know you");
    }
}