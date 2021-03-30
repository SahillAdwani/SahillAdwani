function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/tom.png");
    tomImg1= loadAnimation("images/tomOne.png");
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    together= loadAnimation("images/together.png");
    jerryImg1=loadAnimation("images/jerryOne.png")
    tomImg3= loadAnimation("images/tomFour.png");
    jerryImg1=loadAnimation("images/jerryOne.png");
    jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3=loadAnimation("images/jerryFour.png");
    }
    function draw() {
        background(bg);
        if(tom.x - jerry.x < (tom.width - jerry.width)/2);
}{
            tom.velocityX=0;
            tom.addAnimation("Together", together);
            tom.scale=0.5;
            tom.changeAnimation("Together");
    
            jerry.remove();
            tom.addAnimation("tomLastImage", tomImg3);
            tom.x =300;
            tom.scale=0.2;
            tom.changeAnimation("tomLastImage");
            jerry.addAnimation("jerryLastImage", jerryImg3);
            jerry.scale=0.15;
            jerry.changeAnimation("jerryLastImage");
    }
          
    
        drawSprites();
    function setup(){
        createCanvas(1000,800);
        //create tom and jerry sprites here
    
    }
    
    function draw() {
    
        background(255);
        //Write condition here to evalute if tom and jerry collide
    
        drawSprites();
    }
