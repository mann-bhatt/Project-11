var track, trackImg, invisible1, invisible2
var boy, boyAni

function preload()
{
    trackImg = loadImage("path.png")
    boyAni = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup()
{
  createCanvas(400,400);
  
    track = createSprite(200,200)
    track.addImage(trackImg)
    track.velocityY = 4
    track.scale = 1.2

    boy = createSprite(200,300,100,100)
    boy.scale = 0.08
    boy.addAnimation("boy", boyAni)

    invisible1 = createSprite(5,200,5,400)
    invisible1.visible = false

    invisible2 = createSprite(395,200,5,400)
    invisible2.visible = false
  
}

function draw() 
{
  background(0);

  if(track.y > 400 )
  {
      track.y = track.height/200
  }

  boy.x = World.mouseX
 
  boy.collide(invisible1)
  boy.collide(invisible2)
  
  drawSprites()
}
