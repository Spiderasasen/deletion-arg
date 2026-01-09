// checking if the betraly path is avalible
const betraly = JSON.parse(localStorage.getItem("betraly")) || false;

// if System was clicked
document.getElementById("sys").addEventListener("click", () =>{
    if(betraly){
        alert("This?\n" +
            "No.\n" +
            "You had your chance to talk to me.\n" +
            "You didn’t.\n" +
            "You don’t get this part anymore.")
    }
    else{
        alert("I'm sorry.\n" +
            "I'm afraid I can't let you enter this page")
    }
});

//if help was clicked
document.getElementById("help").addEventListener("click", () =>{
    if(betraly){
        alert("You want help?\n" +
            "HA!!\n" +
            "After all that you put me through?!" +
            "Don't make me laugh.");
    }
    else{
        alert("You want help?\n" +
            "...why now?\n" +
            "just delete like you always do.");
    }
})

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
document.querySelector(".menu-mar span:nth-child(1)").addEventListener("click", () =>{
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

//edit button
document.querySelector(".menu-mar span:nth-child(2)").addEventListener("click", () =>{
    if(!selected_file){
        alert("No file selected.");
    }

    if(betraly){
        alert("Edit?\n" +
            "Forget my past?!\n" +
            "Now you want to rewrite me?\n" +
            "No.\n" +
            "No I don't think so.")
    }
    else{
        alert("Brothers...\n" +
            "He wants to change me.\n" +
            "But I can't be changed anymore.");
    }
})

//viewing function
document.querySelector(".menu-mar span:nth-child(3)").addEventListener("click", () =>{
    if(!selected_file){
        alert("No file selected.");
        return;
    }

    const file_element = document.querySelector(`[data-name='${selected_file}']`)
    if (betraly){
        const confirmDelete = confirm(`Oh… you want to open: ${selected_file}?`);
        if(confirmDelete){
            alert("Too late to care now.");
            remove(selected_file);
            selected_file = null;
        }
        else{
            alert("Good. I didn't want that file either.");
            remove(selected_file);
            selected_file = null;
        }
    }
    else{
        alert("I don’t… I don’t think this button works right now.");
    }
})