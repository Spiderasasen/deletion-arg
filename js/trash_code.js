document.querySelectorAll(".files").forEach((file) =>{
    file.addEventListener("mousedown", function(event) {
        console.log(file);
        if ((event.button === 0) || (event.button === 2) || event.button === 1) {
            console.log("Mouse Button", event.button, "clicked");
            alert("You can not remove anything from the trash can.")
        }
    });
});