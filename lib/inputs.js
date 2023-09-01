const keys = [];
window.addEventListener('keydown', onKeyDown)
window.addEventListener('keyup', onKeyUp)

function onKeyDown(e){
    keys[e.keyCode] = true;
}

function onKeyUp(e){
    keys[e.keyCode] = false;
}

export function getKey(keyCode){
    return keys[keyCode];
}

export const keyCodes = {
    a: 65,
    w: 87,
    d: 68,
    s: 83,
    shift: 16
}