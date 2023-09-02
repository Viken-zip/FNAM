import { drawMainMenu } from "./lib/menu.js";

export const canvas = document.getElementById('canvas');
export const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

export let Night = 1; //make it with localstorage soon
export let Stars = 0; //make it with localstorage soon

export const updateNight = (newValue) => Night = newValue;
export const updateStars = (newValue) => Stars = newValue;

drawMainMenu(ctx);

export function startGame(Night){
    const gameInterval = setInterval(()=>{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 1000/60);
}

export function endGame(interval){
    clearInterval(interval);
    drawMainMenu(ctx)
}