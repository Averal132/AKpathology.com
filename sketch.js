var gameState=1
var micro
var microImg

function preload() {
  microImg=loadImage("m.png")

}

function setup() {
  createCanvas(1400,1700);
micro=createSprite(200,110,20,20)
micro.addImage(microImg);
}





function draw() {

  background(239,239,239);
 textSize(35)
 fill(0,0,247)
  text("AK PATHOLOGY", 500, 400);
  text("Near Pushpanjali Hotel,Nighasan Road ", 500, 450);
  text("Palia Kalan, Kheri, UP 262902", 500, 500);
  text("Ph-9415667985,8299465524", 500, 550);
  text("E mail- akpathology@yahoo,co.in", 500, 600);

  fill(239,155,15)
  textSize(40)
  text("ADDRESS:",550,350)

  
  textSize(60)
  fill("red");
  text("AK PATHOLOGY", 500, 50);
  text("PhoneNumber:9415667985", 400, 100);
  textSize(50)
  fill(150,0,0)
  text("ANUJ KUMAR PURWAR", 500, 150);
  textSize(30)
  fill(237,62,47)
  text("Master of Science in Clinical Pathology",500,200)
  text("Post Graduate Diploma in Clinical Pathology",500,250)
  text("Life Member - Indian Red Cross Society",500,300)

  
 


    

  
  drawSprites();
}
