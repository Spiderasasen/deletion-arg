//function to remove files
function remove(file_name){
    const alt =  confirm('Do you want to remove this file?');
    if(alt){
        //user said yes
        console.log(file_name, 'deleted');
    }
    else{
        console.log(file_name, 'saved');
    }
}

//used to see if the user right clicked
document.querySelectorAll('.files').forEach(file => {
   console.log(file);
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