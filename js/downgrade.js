function triggerDowngrade(){
    const currentSystem = document.body.dataset.name;
    console.log(currentSystem);

    //starts checking off systems
    if(currentSystem === "windows_11"){
        window.open("../../index.html?downgrade=windows10", "_blank", "height=1800 width=2600");
        window.close(); //closes the file window
    }
    if(currentSystem === "windows_10"){
        window.open("../../windows10.html?downgrade=windows8", "_blank", "height=1800 width=2600");
        window.close();
    }
    if(currentSystem === "windows_8"){
        window.open("../../windows8.html?downgrade=windows7", "_blank", "height=1800 width=2600");
        window.close();
    }
    if(currentSystem === "windows_7"){
        window.open("../../windows7.html?downgrade=windows_vista", "_blank", "height=1800 width=2600");
        window.close();
    }
    if(currentSystem === "windows_vista"){
        window.open("../../windows_vista.html?downgrade=windows_xp", "_blank", "height=1800 width=2600");
        window.close();
    }
    if(currentSystem === "windows_xp"){
        window.open("../../windows_xp.html?downgrade=windows_2000", "_blank", "height=1800 width=2600");
        window.close();
    }
    if(currentSystem === "windows_2000"){
        window.open("../../windows_2000.html?downgrade=windows_98", "_blank", "height=1800 width=2600");
        window.close();
    }
    if(currentSystem === "windows_98"){
        window.open("../../windows_98.html?downgrade=windows_95", "_blank", "height=1800 width=2600");
        window.close();
    }
    if(currentSystem === "windows_95"){
        window.open("../../windows_95.html?downgrade=windows_3/windows_3", "_blank", "height=1800 width=2600");
        window.close();
    }
}