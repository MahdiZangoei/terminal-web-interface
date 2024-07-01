# Terminal-like Web Interface

Welcome to the Terminal-like Web Interface project! This project emulates a command-line interface in a web environment, allowing users to enter commands and receive responses as if they were using a terminal.

## Features

- **Command Handling:** Supports a variety of basic commands including `ls`, `help`, `whoami`, `contact`, `github`, and `clear`.
- **Dynamic Input:** Updates command input dynamically without refreshing the page.
- **User Experience:** Designed to mimic the look and feel of a real terminal, providing an immersive user experience.

## Supported Commands

The following commands are supported:

- `ls`: Lists the available files.
- `help`: Displays a help message with available commands.
- `whoami`: Shows a personalized message.
- `contact`: Displays contact information.
- `github`: Provides links to GitHub profiles and repositories.
- `clear`: Clears the terminal screen.

## How to Use

1. Clone the repository:

    ```bash
    git clone https://github.com/MahdiZangoei/terminal-web-interface.git
    cd terminal-web-interface
    ```

2. Open the `index.html` file in your preferred web browser.

3. Start typing commands in the input box to interact with the interface.

## Files

- **index.html:** The main HTML file containing the structure of the web interface.
- **style.css:** CSS file for styling the interface.
- **script.js:** JavaScript file for handling commands and updating the interface.

## Example

```sh
mahdi@dev:~$ ls
README.md
contact.txt

mahdi@dev:~$ whoami
I'm Mahdi Zangoei

mahdi@dev:~$ help
Available commands:
ls - List files
help - Show this help message
whoami - Show information about the user
contact - Show contact information
github - Show GitHub links
clear - Clear the terminal
