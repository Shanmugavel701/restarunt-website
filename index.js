//  Homepage Start

var i = 0;
var images = [];
var time = 2000;

images[0]= "./images/chikken.png" ;
images[1]= "./images/noodles.png" ;
images[2]= "./images/pizza.png" ;
images[3]= "./images/pngwing.com (3).png" ;
images[4]= "./images/pngwing.com (1).png" ;
function slideshow(){
document.slide.src = images[i]
   if( i<images.length-1){
    i++;
   }
else{

    i=0;
}
setTimeout( "slideshow()",time);

}
window.onload = slideshow;

//  Homepage End
    