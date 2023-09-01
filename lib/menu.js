const menuOptions = [
    'New Game',
    'Continue'
]
let selectedOption = 0;
const Night = 1;

export function drawMainMenu(ctx){
    //black background
    //ctx.fillStyle = 'black';
    //ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    ctx.fillStyle = '#ededed';
    ctx.font = "72px serif";

    //menu Title
    ctx.fillText("Five", 70, 100);
    ctx.fillText("Night's", 70, 170);
    ctx.fillText("at", 70, 240);
    ctx.fillText("Murri's", 70, 310);

    ctx.font = "48px serif";
    //menu options
    for(let i = 0; i <= menuOptions.length-1; i++){
        ctx.fillText(menuOptions[i], 70, (window.innerHeight / 2) + (i * 50) );
    }

    //says what night youre on
    ctx.font = "24px serif";
    ctx.fillText('Night ' + Night, 70, (window.innerHeight / 2) + (menuOptions.length * 50 - 25))

    //interval for the selectio cursor
    const cursorInterval = setInterval(()=>{
        ctx.clearRect(0, 0, 70, window.innerHeight)

        //ctx.fillStyle = 'black';
        //ctx.fillRect(0, 0, 70, window.innerHeight);

        drawCursor(ctx)

    }, 1000/60)
}

function drawCursor(ctx){
    ctx.fillStyle = '#ededed';
    ctx.font = "48px serif";
    ctx.fillText(">>", 10, (window.innerHeight / 2) + (selectedOption * 50));
    
}

window.addEventListener('keypress', (e)=>{
    if(e.key == 'w'){
        selectedOption == 0 ? selectedOption = 0 : selectedOption = 0;
    } else if (e.key == 's'){
        selectedOption == 1 ? selectedOption = 1 : selectedOption = 1;
    }
});