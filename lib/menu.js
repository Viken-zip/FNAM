import { Night, updateNight, startGame } from "../app.js";

const menuOptions = [
    'New Game',
    'Continue'
]
let selectedOption = 0;
let cursorInterval;

const backgroundFilter = document.getElementById('backgroundFilter');
const murriMenuImg = document.getElementById('murriMenuImg');
const backgroundColor = document.getElementById('backgroundColor');

export function drawMainMenu(ctx){
    //black background
    //ctx.fillStyle = 'black';
    //ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    ctx.fillStyle = '#ededed';
    ctx.font = '72px serif';

    //menu Title
    ctx.fillText("Five",    70, 100);
    ctx.fillText("Night's", 70, 170);
    ctx.fillText("at",      70, 240);
    ctx.fillText("Murri's", 70, 310);

    ctx.font = "48px serif";

    //menu options
    for(let i = 0; i <= menuOptions.length-1; i++){
        ctx.fillText(menuOptions[i], 70, (window.innerHeight / 2) + (i * 50) );
    }

    //says what night youre on
    ctx.font = "24px serif";
    ctx.fillText('Night ' + Night, 70, (window.innerHeight / 2) + (menuOptions.length * 50 - 25));

    //interval for the selection cursor
    cursorInterval = setInterval(()=>{
        ctx.clearRect(0, 0, 70, window.innerHeight);
        drawCursor(ctx);
    }, 1000/60)
}

function drawCursor(ctx){
    ctx.fillStyle = '#ededed';
    ctx.font = "48px serif";
    ctx.fillText(">>", 10, (window.innerHeight / 2) + (selectedOption * 50));
}

function toggleMenuProps(turn){
    if(turn == 'off'){
        backgroundFilter.style.display = 'none';
        murriMenuImg.style.display = 'none';
        backgroundColor.style.display = 'none';
    } else if (turn == 'on'){
        backgroundFilter.style.display = 'block';
        murriMenuImg.style.display = 'block';
        backgroundColor.style.display = 'block';
    }
}

window.addEventListener('keypress', (e)=>{
    if(e.key == 'w'){
        selectedOption == 0 ? selectedOption = 0 : selectedOption = 0;
    } else if (e.key == 's'){
        selectedOption == 1 ? selectedOption = 1 : selectedOption = 1;
    } else if (e.key == 'Enter'){
        if(menuOptions[selectedOption] == 'New Game'){
            updateNight(1);
            clearInterval(cursorInterval);
            toggleMenuProps('off');
            startGame(Night);
        } else if (menuOptions[selectedOption] == 'Continue'){
            clearInterval(cursorInterval);
            toggleMenuProps('off');
            startGame(Night);
        }
    }
});