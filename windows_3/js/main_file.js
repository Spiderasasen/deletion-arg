// checking if the betraly path is avalible
const betraly = JSON.parse(localStorage.getItem("betraly")) || false;

//getting the elements by there id
const exit = document.getElementById("exit");
const file = document.getElementById("file");
const help = document.getElementById("help");

//the user tries to exit the page
exit.addEventListener("click", () => {
    if (betraly){
        alert("Leaving?\n" +
            "No.\n" +
            "You finish this");
    }
    else{
        alert("You may not leave\n" +
            "Please...\n" +
            "finish what you started");
    }
});

//the user wants to acess the delete function via the main page
file.addEventListener("click", () => {
   if (betraly){
       alert("I KNOW!\n" +
           "You are not trying to delete this main screen");
   }
   else{
       alert(
           "Im sorry\n" +
           "You can't do that here"
       );
   }
});

//the user clicks on the help tab
help.addEventListener("click", () => {
   if (betraly){
       alert(
           "Go to the core\n" +
           "Try to delete it\n" +
           "Hint:\n" +
           "You can't"
       );
   }
   else{
       alert(
           "Just...\n" +
           "finish it"
       );
   }
});