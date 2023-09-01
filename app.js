import { drawMainMenu } from "./lib/menu.js";

export const canvas = document.getElementById('canvas');
export const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

drawMainMenu(ctx);

function startGame(){
    const gameInterval = setInterval(()=>{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 1000/60);
}