document.querySelectorAll(".files").forEach((file) =>{
    file.addEventListener("mousedown", function(event) {
        console.log(file);
        if ((event.button === 0) || (event.button === 2) || event.button === 1) {
            console.log("Mouse Button", event.button, "clicked");
            alert("You can not remove anything from the trash can.")
        }
    });
});
//checking the local storage
window.onload = function(){
    const bin = document.getElementById("trash_can");
    const deleted_files = JSON.parse(localStorage.getItem('deleted_files')) || [];

    deleted_files.forEach(file_name => {
        const trash_element = bin.querySelector(`[data-name="${file_name}"]`);
        if (trash_element) {
            trash_element.style.display = "block";
        }
    })
}