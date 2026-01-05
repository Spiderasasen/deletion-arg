const input = document.getElementById("MSN");
const container = document.getElementById("output");
const now = new Date();
let echo_count = 0;

//checking what input can do when enter is pressed
input.addEventListener("keydown", function(e){
    const command = input.value.trim().toLowerCase();
    let commands_help = "";
    let response = "";
    let echo = ""
   console.log(e);
    if(e.key === "Enter"){
        // just to leave the screen
        if(command === "exit"){
            commands_help = "exit";
            window.close();
        }
        // to help the system work better
        console.log("Orginal", command);
        if (command.includes("del")){
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
        console.log("New one", commands_help);
        console.log(input.value);
        //for the actual text to show up
        switch(commands_help){
            case "del":
                response = "No, not the easy way out. That's for me."
                break;
            case "exit":
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
                    response = "FUCK YOU!";
                }
                break;
            default:
                response = "Command not found";
                break;
        }

        const output = document.createElement("p");
        output.textContent = `C> ${command}\n${response}`;
        container.appendChild(output);

        input.value = "";
    }
});