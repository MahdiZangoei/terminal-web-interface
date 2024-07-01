const windowContent = document.querySelector(".window_content");
const inputLine = document.getElementById("input_line");
const commandHistory = [];

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("user_input").focus();
});

function processCommand(command) {
    let output = "";
    if (command.toLowerCase() === "ls") { // ls
        output = "whoami contact github readme";
        displayOutput(command, output);

        // async function fetchData() {
        //     try {
        //         let response = await fetch('./data/ls.txt');
        //         if (!response.ok) {
        //             throw new Error('Network response was not ok.');
        //         }
        //         let output = await response.text();
        //         displayOutput(command, output); 
        //     } catch (error) {
        //         displayOutput(command, error); 
        //     }
        // }
        // fetchData();
    } else if (command.toLowerCase() === "help") { // help
        output = 'Available commands:</br> ls      - List files</br>help    - Show this help message</br>whoami  - Show information about the user</br>contact - Show contact information</br>github  - Show GitHub links</br>clear   - Clear the terminal';
        displayOutput(command, output);
    } else if (command.toLowerCase() === "whoami") { // whoami
        output = "I'm Mahdi Zangoei 20Age Shiraz/Iran";
        displayOutput(command, output);
    } else if (command.toLowerCase() === "contact") { // contact 
        output = ' PHONE_NUMBER="<a href="tel:+989999190768">+98 999-919-0768</a>" </br> EMAIL_ADDRESS="<a href="mailto:mahdizangoei1@gmail.com">mahdizangoei1@gmail.com</a>"</br>Telegram Id="<a href="t.me/Mahdi_Zangoei">@Mahdi_Zangoei</a>"</br>';
        displayOutput(command.toLowerCase(), output);
    } else if (command.toLowerCase() === "github") { // github
        output = '<a href="https://github.com/MahdiZangoei">GitHub Account</a>\n     <a href="https://github.com/MahdiZangoei/personal-website">This repositorie</a> ';
        displayOutput(command.toLowerCase(), output);
    } else if (command.toLowerCase() === "clear") { // clear
        windowContent.innerHTML = '';
        windowContent.appendChild(inputLine);
        document.getElementById("user_input").value = "";
        document.getElementById("user_input").focus();
        return;
    } else {
        output = "Command not found. Type 'help' for a list of commands.";
        displayOutput(command, output);
    }


}

function displayOutput(command, output) {
    const currentUser = "mahdi@dev:~$";
    const newLine = document.createElement("div");
    newLine.innerHTML = `<b>${currentUser} ${command}</b><br>${output}`;
    windowContent.insertBefore(newLine, inputLine);

    document.getElementById("user_input").value = "";
    document.getElementById("user_input").focus();
}

function displayOutputlogin(command, output) {
    //const currentUser = "mahdi@dev:~$";
    const newLine = document.createElement("div");
    newLine.innerHTML = `<b>${currentUser} ${command}</b><br>${output}`;
    windowContent.insertBefore(newLine, inputLine);

    document.getElementById("user_input").value = "";
    document.getElementById("user_input").focus();
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        const userInput = document.getElementById("user_input");
        const command = userInput.value.trim();
        commandHistory.push(command);
        processCommand(command);
    }
});


