let slideIndex = 1;
let images = []
images[1] = "nature1.jpg";
images[2] = "nature2.jpg";
images[3] = "nature3.jpeg";
images[4] = "nature4.jpg";
images[5] = "puppy.jpg";

function changeImageNext(){
     slideIndex += 1;
     if(slideIndex > 5){
          slideIndex = 1;
     }
     document.getElementById("slideImage").src = images[slideIndex];
}

function changeImagePrevious(){
     slideIndex -= 1;
     if(slideIndex < 1){
          slideIndex = 5;
     }
     document.getElementById("slideImage").src = images[slideIndex];
}
