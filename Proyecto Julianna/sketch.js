var parrot1_running, parrot1_collided,background2,background3,background4,background5,gameOverImg;
var jumpSound,collidedSound, troll_collided;

function preload(){
  parrot1_running = loadAnimation("Pirate parrot1.png","Pirate parrot2.png");//falto cargar png
 parrot1_collided = loadAnimation("crash1.png","Pirate parrot.png","Pirate parrot0.png");
  
  //background1 = loadImage("Japón1.jfif");// La imagen no se cargo correctamente en visual
  background2 = loadImage("Verano.jpg");
  background3= loadImage("otoño1.jpg");
  background4= loadImage("invierno.jpg");
  background5= loadImage("parque.png");
  gameOverImg = loadImage("game over.png");
  //restartImg = loadImage("assets/restart.png");
  jumpSound = loadSound("jump.wav");
  collidedSound = loadSound("collided.wav");
  troll_collided = loadAnimation("Dancing troll4.png","Dancing troll2.png","Dancing troll1.png");
  
}

function setup() {
  createCanvas(800, 400);
  
  /*japon = createSprite(900,300,400,20);
  japon.addImage("japon",background1);
  japon.scale=0.3
  japon.x = width /2;*/
  verano = createSprite(900,300,400,20); // La posición de x es mayor al canvas
  verano.addImage(background2);
  verano.scale=0.3
  verano.x = width /2;
  parrot1 = createSprite(50,200,20,50);
  parrot1.addAnimation("running", parrot1_running);
  parrot1.addAnimation("collided", parrot1_collided);
  parrot1.scale = 0.15;
  parrot1.setCollider("circle",0,0,300)



}
function draw(){
  background(255);
  drawSprites();
}