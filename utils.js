export function drawStatusText(context, input, player){
    context.font = '30px Helvetica';
    context.fillStyle = 'Azure';
    context.fillText('Last input: ' + input.lastKey, 40, 80);
    context.fillText('Active State: ' + player.currentState.state, 40, 140);
    
    /* 1.0 */
    context.fillText('W to Jump ', 40, 300);
    context.fillText('S to Crouch ', 40, 360);
    context.fillText('A to move Left  ', 40, 420);
    context.fillText('D to move Right  ', 40, 480);
    /* 1.0 */
}