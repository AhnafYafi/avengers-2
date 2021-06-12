var canvas=new fabric.Canvas('myCanvas');

block_image_width=30;
block_image_height=30;

player_x=10;
player_y=10;

var player_object="";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
           top:player_y,
           left:player_x
        });
        canvas.add(player_object);
    });
    
}

function new_image(get_image)
{
    fabric.Image.fromURL("player.png", function(Img)
    {
        block_image_object=Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left_player_x
        });
        canvas.add(block_image_object);
    });
}
if(keyPressed == '38') 
{ 
 up();
 console.log("up");
}

if(keyPressed == '40') 
{ 
down();
 console.log("down");
}

if(keyPressed == '37') 
{ 
left();
 console.log("left");
}

if(keyPressed == '39') 
{ 
right();
 console.log("right");
}



if(keyPressed == '72')
 {
 new_image('hulk_face.png');
  console.log("h");
 }

 if(keyPressed == '75')
 {
 new_image('hulk_legs.png');
  console.log("k");
 }

 if(keyPressed == '85')
 {
 new_image('hulk_left_hand.png');
  console.log("u");
 }

 if(keyPressed == '74')
 {
 new_image('hulk_right_hand.png');
  console.log("j");
 }

 if(keyPressed == '73')
 {
 new_image('ironman_face.png');
  console.log("i");
 }

 if(keyPressed == '77')
 {
 new_image('ironman_legs.png');
  console.log("m");
 }

 if(keyPressed == '72')
 {
 new_image('ironman_lefthand.png');
  console.log("n");
 }

 if(keyPressed == '82')
 {
 new_image('ironman_righthand.png');
  console.log("r");
 }

 if(keyPressed == '90')
 {
 new_image('captain_america_left_hand.png');
  console.log("z");
 }

 if(keyPressed == '88')
 {
 new_image('spiderman_face.png');
  console.log("x");
 }

 if(keyPressed == '89')
 {
 new_image('spiderman_left_hand.png');
  console.log("y");
 }

 if(keyPressed == '65')
 {
 new_image('spiderman_right_hand.png');
  console.log("a");
 }

 if(keyPressed == '67')
 {
 new_image('spiderman_legs.png');
  console.log("c");
 }

 if(keyPressed == '66')
 {
 new_image('thor_face_hand.png');
  console.log("b");
 }

 if(keyPressed == '69')
 {
 new_image('thor_right_hand.png');
  console.log("e");
 }

 if(keyPressed == '68')
 {
 new_image('thor_left_hand.png');
  console.log("d");
 }
