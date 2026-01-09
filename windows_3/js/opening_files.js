let mouse_click = 0;
function open_msn(link){
    window.open(link, '_blank', "height=1800 width=2600");
}
function open_files(link){
    window.open(link, '_blank', "height=800 width=800");
}
document.querySelector(".close-btn").addEventListener("click", () => {
    window.close();
});
function opening_files(link){
    if(mouse_click === 2){
        mouse_click = 0;
        window.open(link, '_blank', "height=800 width=800");
    }
    else{
        mouse_click++;
    }
}