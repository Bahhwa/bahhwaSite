var counter = 0;
   var srcArray = ["../gallery/photos/photo1.png", "../gallery/photos/photo2.jpg", "../gallery/photos/photo3.jpg"];


function navigateGallery(direction){
    
    console.log(counter);
    document.querySelector('#next')
    if(counter > 3 || counter < 0){
        counter = 0;
    };

    if( direction === 'next' )
    {
        document.getElementById("currentImage").src = srcArray[++counter];
        console.log(counter);
    }
    else
    {
        document.getElementById("currentImage").src = srcArray[--counter];
        console.log(counter);
    }

}


