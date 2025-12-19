function triggerDowngrade(){
    const currentSystem = document.body.dataset.name;
    console.log(currentSystem);

    //starts checking off systems
    if(currentSystem === "windows_11"){
        window.open("../../index.html?downgrade=windows10", "_blank", "height=1800 width=2600");
        window.close(); //closes the file window
    }
}