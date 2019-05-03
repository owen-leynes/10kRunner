let playerSprite;
let playerJump;
let playerDie;
let obstacleSprites = [];
let bgSprite;

let obstacles = new Group();
let player;

const GROUND_Y = height / 10;

function preload(){
    playerSprite = loadImage("../assets/game/player.png");
    playerJump = loadImage("../assets/game/player-jump.png");
    playerDie = loadImage("../assets/game/player-die.png");
    obstacleSprites[0] = loadImage("../assets/game/obstacle1.png");
    obstacleSprites[1] = loadImage("../assets/game/obstacle2.png");
    obstacleSprites[2] = loadImage("../assets/game/obstacle3.png");
    bgSprite = loadImage("../assets/game/background.png");
}

function setup(){

}

function draw(){

}

function createObstacles(){
    let rx = random(0, width);
    let type = randomType();
    if(type === "single"){
        obstacles.add(createSprite(rx, GROUND_Y, obstacles[0]));
    }
    else if(type === "double"){
        obstacles.add(createSprite(rx, GROUND_Y, obstacles[1]));
    }
    else{
        obstacles.add(createSprite(rx, GROUND_Y, obstacles[2]));
    }
}

function scrollScreen(){
    for(let i = 0; i < obstacles.length; i++){
        
    }
}

function randomType(){
    let r = random(0, 100);
    if(r < 33){
        return "single";
    }
    else if(r < 66){
        return "double";
    }
    else{
        return "duck";
    }
}

