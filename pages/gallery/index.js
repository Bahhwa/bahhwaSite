var counter = 1;

//Image sources
var srcArray = ["../gallery/photos/photo1.png", "../gallery/photos/photo2.jpg", "../gallery/photos/photo3.jpg"];

//Button Nav
function navigateGallery(direction){

    if( direction === 'next' )
    {
        document.getElementById("currentImage").src = srcArray[counter++];
        console.log(counter);
    }
    else
    {
        document.getElementById("currentImage").src = srcArray[counter--];
        console.log(counter);
    }
    
    if(counter > 2){
        counter = 0;
    }
    else if (counter < 0)
    {
        counter = srcArray.length-1;
    }
}


