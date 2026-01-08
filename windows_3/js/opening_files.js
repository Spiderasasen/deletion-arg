function open_msn(link){
    window.open(link, '_blank', "height=1800 width=2600");
}
function open_files(link){
    window.open(link, '_blank', "height=800 width=800");
}
document.querySelector(".close-btn").addEventListener("click", () => {
    window.close();
});