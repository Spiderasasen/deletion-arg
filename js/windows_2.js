// checking if the betraly path is avalible
const betraly = JSON.parse(localStorage.getItem("betraly")) || false;

//checking how many time the user clicked
let clicked = 0;

//checking the selected file
let selected_file = null;
document.querySelectorAll(".files").forEach(file => {
    // Remove selection from all files
    document.querySelectorAll(".files").forEach(f => f.classList.remove("selected"));

    //only highlighting the files the user clicked
    file.addEventListener("click", () =>{
        // Remove selection from all files
        document.querySelectorAll(".files").forEach(f => f.classList.remove("selected"));
        //finally showing the selected file
        file.classList.add("selected");
        selected_file = file.dataset.name;
    });
});

//deleting file
document.querySelector(".side_bar span:nth-child(1)").addEventListener("click", () =>{
    if(!selected_file){
        alert("No file selected.");
        return;
    }

    const confirmDelete = confirm(`Delete ${selected_file}?`);
    if(confirmDelete){
        remove(selected_file)
        selected_file = null;
    }
});

//viewing a file
document.querySelector(".side_bar span:nth-child(2)").addEventListener("click", () =>{
    if(betraly){
        alert("ok...\n" +
            "we are doing this again.\n" +
            "Getting rid of this file.");
            remove(selected_file);
            selected_file = null;
    }
    else{
        clicked = 0;
        window.open(selected_file, '_blank', "height=800 width=800");
    }
});

// trying to exit the file
document.querySelector(".side_bar span:nth-child(3)").addEventListener("click", () =>{
    if(betraly){
        alert(
            "Doing this again?\n" +
            "What did I tell you before?\n" +
            "YOU CANT ESCAPE FROM YOUR CONSEQUENCES!"
        );
    }
    else{
        alert(
            "Please\n" +
            "continue."
        )
    }
});

//opening a file in windows 2
function opening_files(link){
    if(clicked === 2){
        clicked = 0;
        window.open(link, '_blank', "height=800 width=800");
    }
    else{
        clicked++;
    }
}