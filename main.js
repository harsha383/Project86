var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

 image_x = 0;
 image_y = 0;

function new_image()
{
    
    fabric.Image.fromURL('Bi.jpg', function(Img) {
        block_image_object = Img;
        
        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set({
            top:0,
            left:0
        });
        canvas.add(block_image_object);
    });
}

function image_update(get_image) 
{
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;

        image_object.scaleToWidth(700);
        image_object.scaleToHeight(510);
        image_object.set({
            top:image_y,
            left:image_x
        });
        canvas.add(image_object);
    });
}

function playSound(){
    x.play();
}


