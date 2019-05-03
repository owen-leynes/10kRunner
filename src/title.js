let bg;
let logo;
let begin;
let leaderboard;
let credits;
function preload(){
    bg = loadImage("../assets/title_background.png");
    logo = loadImage("../assets/title_sprite");
    begin = loadImage("../assets/title_begin_button.png");
    leaderboard = loadImage("../assets/title_leaderboard.png");
    credits = loadImage("../assets/title_credits.png");
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    image(bg, 0, 0);
}

function draw(){
    image(logo, width/2, height/2);
    image(begin, width/2, height * 2/3);
    image(leaderboard, width/4, height * 2/3);
    image(credits, width * 3/4, height * 2/3);

    if(mousePressed){
        if(mouseX > begin.x && mouseX < begin.x + begin.width){
            if(mouseY > begin.y && mouseY < begin.y + begin.height){
                window.location.replace("../game.html");
            }
        }

        if(mouseX > leaderboard.x && mouseX < leaderboard.x + leaderboard.width){
            if(mouseY > leaderboard.y && mouseY < leaderboard.y + leaderboard.height){
                window.location.replace("../leaderboard.html");
            }
        }

        if(mouseX > credits.x && mouseX < credits.x + credits.width){
            if(mouseY > credits.y && mouseY < credits.y + credits.height){
                window.location.replace("../credits.html");
            }
        }
    }
}

