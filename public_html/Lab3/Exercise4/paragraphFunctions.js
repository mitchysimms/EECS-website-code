function changeColors(){
     let newBorderRedValue = document.getElementById("borderRedValue").value;
     let newBorderGreenValue = document.getElementById("borderGreenValue").value;
     let newBorderBlueValue = document.getElementById("borderBlueValue").value;
     let newBorderWidth = document.getElementById("borderWidth").value;

     let backRedValue = document.getElementById("backgroundRedValue").value;
     let backGreenValue = document.getElementById("backgroundGreenValue").value;
     let backBlueValue = document.getElementById("backgroundBlueValue").value;

     let paragraphBlock = document.getElementById("blockToChange");

     paragraphBlock.style.backgroundColor = "rgb(backRedValue, backGreenValue, backBlueValue)";
     paragraphBlock.style.borderColor = "rgb(borderRedValue, borderGreenValue, borderBlueValue)";
     paragraphBlock.style.borderWidth = borderWidth;

     alert("The activate button worked");

}
