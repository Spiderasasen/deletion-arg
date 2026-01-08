//orginal paths to the lore
function getOriginalPath(file_name){
    const map = {
        "thoughts.txt": "../../asset/files/lore/windows11/thoughts.txt",
        "System_logs.txt": "../../asset/files/lore/windows11/sys_logs.txt",
        "before.txt": "../../asset/files/Panic/first_delation.txt",
        "alone.txt": "../../asset/files/lore/windows11/aftermath.txt",
        "FAQ.txt": "../../asset/files/lore/windows11/faq.txt",
        "NOTICE.txt": "../../asset/files/lore/windows11/NOTICE.txt",
        "README.txt": "../../asset/files/lore/windows11/readme.txt"
    };
    return map[file_name];
}


//function to remove files
let deleted_files = []; //a remebering system
//getting the current windows
const windows = document.querySelectorAll("body")

function remove(file_name){
    const alt =  confirm('Do you want to remove this file?');
    if(alt){
        //user said yes
        console.log(file_name, 'deleted');
        deleted_files.push(file_name);
        moveTotrash(file_name); //moves to trash
        triggerDowngrade(); //downgrades the ui
        handelMutation(file_name); //handels with the mutations
    }
    else{
        console.log(file_name, 'saved');
    }
}

//moving to trash
function moveTotrash(file_name){
    //removing in the files
    const file_element = document.querySelector(`[data-name = "${file_name}"]`);
    if (file_element) file_element.style.display = "none";

    //showing in the trash
    let deleted_files = JSON.parse(localStorage.getItem('deleted_files')) || [];
    if(!deleted_files.includes(file_name)){
        deleted_files.push(file_name);
        localStorage.setItem('deleted_files', JSON.stringify(deleted_files));
    }
}

//used to see if the user right clicked
document.querySelectorAll('.files').forEach(file => {
   // console.log(file);
   file.addEventListener('mousedown', function(event){
       const fileName = file.dataset.name;
       console.log(fileName);

       if (fileName === "core_memory.dll"){
           alert('Can Not Interact With This File')
           return;
       }

       if (event.button === 2){
           remove(fileName);
       }
    });
});

window.onload = function(){
    const deleted_files = JSON.parse(localStorage.getItem('deleted_files')) || [];

    deleted_files.forEach(file_name => {
        const file_element = document.querySelector(`[data-name = "${file_name}"]`);
        if (file_element) file_element.style.display = "none";
    });
}

//checking if local storage has before, thoughts, or alone

// left click option, no longer need onclick in html
document.querySelectorAll('.files').forEach(file => {
    file.addEventListener('click', function(){
        const fileName = file.dataset.name;

        if(fileName === "core_memory.dll"){
            alert('Can Not Interact With This File')
            return;
        }

        const mutatedPath = localStorage.getItem(`mutated_path_${fileName}`);
        const pathToLoad =  mutatedPath || getOriginalPath(fileName);

        opening_files(pathToLoad);
    })
})

//mutates the files (aka just swaps)
function mutateFile(targetName, newContent){
    localStorage.setItem(`mutated_path_${targetName}`, newContent);
    console.log("Mutated path for", targetName, "->", newContent);
}

 function handelMutation(file_name){
    const deleted_files = JSON.parse(localStorage.getItem("deleted_files")) || [];

    deleted_files.forEach(file => {
        if(file === "before.txt"){
            mutateFile("thoughts.txt", "../../asset/files/lore/Panic/before_got_deleted.txt")
            mutateFile("System_logs.txt", "../../asset/files/lore/Panic/sys_logs.txt")
        }
        else if(file === "thoughts.txt"){
            mutateFile("README.txt", "../../asset/files/lore/depression/README.txt");
            mutateFile("NOTICE.txt", "../../asset/files/lore/depression/NOTICE.txt");
        }
        else if(file === "alone.txt"){
            mutateFile("FAQ.txt", "../../asset/files/lore/guilt/faq.txt");
            mutateFile("System_logs.txt", "../../asset/files/lore/guilt/logs.txt");
        }
    })
}

//reset
let clickCount = 0;

function resetSeason(){
    localStorage.removeItem('deleted_files');
    localStorage.removeItem('betraly');

    document.querySelectorAll(".files").forEach(file => {
        const name = file.dataset.name;
        localStorage.removeItem(`mutated_path_${name}`)
    })

    window.location.reload();
}

document.getElementById("document").addEventListener("click", () => {
    clickCount++;
    console.log(clickCount);
    if (clickCount === 4){
        resetSeason();
        clickCount = 0;
    }
})