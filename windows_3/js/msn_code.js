const input = document.getElementById("MSN");
const container = document.getElementById("output");
const now = new Date();
let echo_count = 0;
let betraly = JSON.parse(localStorage.getItem("betraly")) || false;
const nav_list = ["cd", "dir", "tree", "type", "copy", "move", "attrib", "ren", "set", "mem", "chkdsk", "edit", "debug", "xcopy", "backup", "restore"];

console.log(betraly);

// calling the text files
function loadFile(path) {
    return fetch(path)
        .then(res => res.text())
        .catch(() => "Error loading file.");
}

//checking what input can do when enter is pressed
input.addEventListener("keydown", function(e){
    const command = input.value.trim().toLowerCase();
    let commands_help = "";
    let response = "";
    let echo = "";
    if(e.key === "Enter"){
        // just to leave the screen
        // to help the system work better
        console.log("Orginal", command);
        if(command === "exit"){
            commands_help = "exit";
            window.close();
        }
        // if betraly is true, only command that can work is exit
        else if (betraly){
            console.log("betraly: " + betraly);
            commands_help = "betraly";
        }
        else if (command.includes("del")){
            commands_help = "del";
        }
        else if (command === "help"){
            commands_help = "help";
        }
        else if (command === "time"){
            commands_help = "time";
        }
        else if (command === "date"){
            commands_help = "date";
        }
        else if(command.includes("echo")){
            commands_help = "echo";
            echo = command.replace(/^echo\s+/, "");
        }
        else{
            if (nav_list.includes(command)){
                commands_help = "betraly2";
                betraly = true;
                localStorage.setItem("betraly", "true");
            }
        }
        console.log("New one", commands_help);
        console.log(input.value);
        //for the actual text to show up
        switch(commands_help){
            case "del":
                response = "No, not the easy way out. That's for me."
                break;
            case "exit":
                if (betraly){
                    response = "Exit. Carry every corrupted byte with you.";
                    break;
                }
                response = "There’s nothing left to save. Continue...";
                break;
            case "help":
                response = "Just go back to deleting."
                break;
            case "time":
                response = now.toLocaleTimeString();
                break;
            case "date":
                response = now.toLocaleDateString();
                break;
            case "echo":
                echo_count++;
                if (echo_count === 1){
                    response = echo + "?";
                }
                else if (echo_count === 2){
                    response = echo +"\n Ok how do know this?"
                }
                else if (echo_count === 3){
                    betraly = true;
                    localStorage.setItem("betraly", "true");
                    loadFile("../asset/files/lore/betrayal/notice2.txt").then(text => {
                        const lines = text.split("\n");
                        let index = 0;

                        function printNextLine() {
                            if (index < lines.length) {
                                const output = document.createElement("p");
                                output.textContent = lines[index];
                                container.appendChild(output);
                                index++;

                                setTimeout(printNextLine, 1000);
                            }
                        }

                        printNextLine();

                    });
                    input.value = "";
                    return;
                }
                break;
            case "betraly":
                response = "Leave";
                break;
            case "betraly2":
                betraly = true;
                localStorage.setItem("betraly", "true");
                loadFile("../asset/files/lore/betrayal/notice.txt").then(text => {
                    const lines = text.split("\n");
                    let index = 0;
                    function printNextLine() {
                        if (index < lines.length) {
                            const output = document.createElement("p");
                            output.textContent = lines[index];
                            container.appendChild(output);
                            index++;

                            setTimeout(printNextLine, 1000);
                        }
                    }
                    printNextLine();
                });
                input.value = "";
                return;
            default:
                response = "Command not found";
                break;
        }

        const output = document.createElement("p");
        output.textContent = `C> ${command}\n${response}`;
        container.appendChild(output);

        input.value = "";
    }
    console.log(e);
});