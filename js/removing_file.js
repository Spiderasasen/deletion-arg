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
        triggerDowngrade();
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
    })
}

//reset
let clickCount = 0;

function resetSeason(){
    localStorage.removeItem('deleted_files');
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